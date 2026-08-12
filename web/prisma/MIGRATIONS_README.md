# Prisma Migration Strategy for Lauren Palace Guest House

This folder contains:
- `schema.prisma` — Phase 1 Prisma schema (models and enums)
- `migrations/` — SQL migration files auto-generated and managed by Prisma
- Documentation files for reference

## Setup and Migration Steps

Run these commands from the `web` folder:

1. Install dependencies:

   npm install

2. Create a development database and set `DATABASE_URL` in `web/.env`.

   Example:
   ```
   DATABASE_URL="postgres://user:password@localhost:5432/lauren_palace_dev"
   ```

3. Run migrations:

   npx prisma migrate deploy

   Or in development:

   npx prisma migrate dev

   This will apply:
   - Schema tables and enums (20240812000000_init)
   - Booking overlap and validation constraints (20240812000001_add_booking_and_promo_constraints)

## What the Migrations Do

**20240812000000_init:**
- Creates all tables for roles, permissions, users, rooms, bookings, payments, promotions, rewards, housekeeping, audit logs, and system settings
- Creates indexes for performance
- Sets up foreign key relationships

**20240812000001_add_booking_and_promo_constraints:**
- Creates btree_gist PostgreSQL extension (required for GIST exclusion constraint)
- Adds computed `booking_date_range` column using `daterange` for DATE columns
- Adds exclusion constraint preventing overlapping active bookings for the same room
- Adds CHECK constraint ensuring `checkOut` > `checkIn`
- Adds CHECK constraint enforcing FIXED vs PERCENTAGE discount type exclusivity

## Booking Overlap Protection

The exclusion constraint applies only to active bookings:
- PENDING (temporary hold, blocks availability)
- CONFIRMED (confirmed booking, blocks availability)
- CHECKED_IN (guest is present, blocks availability)

Does **not** block availability:
- CANCELLED (cancellation voids the hold)
- NO_SHOW (guest did not arrive)
- CHECKED_OUT (booking is completed)

## Important Notes

- All migrations are committed to version control and automatically applied by Prisma
- Monetary values are stored as integer cents (ZAR currency default)
- Pricing snapshots are stored as JSONB to preserve historical booking prices
- Password reset tokens store hashes, not plaintext
- Rewards do not auto-award; application logic controls when points are earned

## Environment Variables

Configure `web/.env` with:
```
DATABASE_URL="postgres://USER:PASSWORD@HOST:PORT/DATABASE"
```

Example for local development:
```
DATABASE_URL="postgres://postgres:password@127.0.0.1:5432/lauren_palace_dev"
```
