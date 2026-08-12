# Booking Model

## Booking entity

A booking should capture the complete transaction and stay details as a single immutable record.

### Fields
- `id`: UUID
- `customer_id`: reference to `users`
- `room_id`: reference to `rooms`
- `room_type_id`: reference to `room_types`
- `check_in`: date
- `check_out`: date
- `guests`: integer
- `status`: booking lifecycle status
- `pricing_snapshot`: JSON
- `reference`: string
- `source`: string
- `created_at`: timestamp
- `updated_at`: timestamp

## Pricing snapshot

Each booking must store an embedded pricing snapshot so historical values do not change if pricing rules change later.
The snapshot should include:
- `basePrice`
- `websitePrice`
- `platformFee`
- `maintenanceFee`
- `discountAmount`
- `finalCustomerPrice`
- `businessAmount`
- `platformAmount`
- `currency`

## Booking status values

- `PENDING`: booking created, awaiting confirmation
- `CONFIRMED`: booking confirmed and reserved
- `CHECKED_IN`: guest has checked in
- `CHECKED_OUT`: guest has checked out
- `CANCELLED`: booking was cancelled
- `NO_SHOW`: guest did not arrive

## Business rules

- bookings must reference an actual physical room when available
- room availability should be calculated from confirmed bookings and room status
- a booking should preserve the price snapshot independently of current room type pricing
- booking sources should differentiate direct website bookings from external channels or offline reservations
- guest counts should be recorded for operational planning

## Future implementation considerations

- support promo code assignments per booking
- support booking modifications and status transitions
- support booking history and customer lifecycle views
- support audit logging for booking actions
