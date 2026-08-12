-- Create btree_gist extension for exclusion constraints
CREATE EXTENSION IF NOT EXISTS btree_gist;

-- Add computed daterange column to Booking for overlap detection
-- This uses daterange (not tstzrange) because checkIn/checkOut are DATE columns
ALTER TABLE "Booking" 
  ADD COLUMN "booking_date_range" daterange 
  GENERATED ALWAYS AS (daterange("checkIn", "checkOut", '[)')) 
  STORED;

-- Add exclusion constraint to prevent overlapping bookings for the same room
-- Only applies to bookings that are actively held (PENDING, CONFIRMED, CHECKED_IN)
-- CANCELLED, NO_SHOW, and CHECKED_OUT bookings do not block availability
ALTER TABLE "Booking"
  ADD CONSTRAINT "booking_no_overlap_active" 
  EXCLUDE USING GIST (
    "roomId" WITH =, 
    "booking_date_range" WITH &&
  ) 
  WHERE ("roomId" IS NOT NULL AND "status" = ANY(ARRAY['PENDING'::"BookingStatus", 'CONFIRMED'::"BookingStatus", 'CHECKED_IN'::"BookingStatus"]));

-- Add check constraint ensuring checkOut > checkIn
-- Uses simple date comparison without unnecessary casting
ALTER TABLE "Booking"
  ADD CONSTRAINT "booking_checkout_after_checkin" 
  CHECK ("checkOut" > "checkIn");

-- Add check constraint to enforce promo code discount type consistency
-- A promo code is either FIXED or PERCENTAGE, never both
ALTER TABLE "PromoCode"
  ADD CONSTRAINT "promo_code_discount_type_consistency"
  CHECK (
    ("discountType" = 'FIXED' AND "fixedAmount" IS NOT NULL AND "percentage" IS NULL)
    OR
    ("discountType" = 'PERCENTAGE' AND "percentage" IS NOT NULL AND "fixedAmount" IS NULL)
  );
