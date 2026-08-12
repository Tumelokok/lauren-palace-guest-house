**Database Schema (Phase 1 Implementation)**

Summary of what is implemented under `web/prisma/schema.prisma`:

- Authorization: `User`, `Role`, `Permission`, `RolePermission`, `UserPermission`, `PasswordResetToken`.
- Room inventory: `RoomType`, `RoomTypePricing` (money as integer cents), `Room`.
- Bookings: `Booking` stores `checkIn`/`checkOut` (DATE semantics via Prisma @db.Date), `pricingSnapshot` (Json), `reference`, `status`.
- Payments: provider-agnostic `Payment` (amount fields in cents, provider, providerReference, status).
- Promotions: `PromoCode`, `PromoCodeUsage` with uniqueness constraint for promo+booking.
- Rewards: `RewardTier`, `RewardAccount`, `RewardDefinition`, `RewardTransaction`, `RewardRedemption` (structures only; no business logic implemented).
- Housekeeping: `HousekeepingTask` (separate from `Room` status).
- Audit & settings: `AuditLog`, `SystemSetting`.

Important implementation notes:
- UUIDs used as primary keys (Postgres UUID type).
- Monetary values stored as integer cents (e.g., R650.00 -> 65000).
- `Booking.pricingSnapshot` is Json and intended to be an immutable snapshot captured at booking time.
- Indexes and uniqueness constraints added for performance and correctness (promo code uniqueness, booking reference, etc.).
- Booking overlap protection requires applying a Postgres exclusion constraint (see `web/prisma/booking_exclusion.sql`) after running migrations. This is documented in `web/prisma/MIGRATIONS_README.md`.

Files:
- web/prisma/schema.prisma — Prisma schema implementing Phase 1 models.
- web/prisma/seed.ts — development seed script (safe seeded data: roles, permissions, room types, pricing in cents).
- web/prisma/MIGRATIONS_README.md — instructions for running migrations and applying exclusion constraint.
- web/prisma/booking_exclusion.sql — example SQL to add exclusion constraint (manual apply).

This documentation reflects only what has been added for Phase 1 and does not describe authentication, payment integrations, or reward algorithms (these are intentionally not implemented in Phase 1).
