-- Enforce that promo codes behave as either FIXED OR PERCENTAGE, not both.
-- Apply this AFTER Prisma migrations.

ALTER TABLE "PromoCode"
  ADD CONSTRAINT promo_code_discount_type_consistency
  CHECK (
    ("discountType" = 'FIXED' AND "fixedAmount" IS NOT NULL AND "percentage" IS NULL)
    OR
    ("discountType" = 'PERCENTAGE' AND "percentage" IS NOT NULL AND "fixedAmount" IS NULL)
  );
