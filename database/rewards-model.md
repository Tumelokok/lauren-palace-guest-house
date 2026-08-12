# Rewards Model

## Purpose

The rewards model should support future loyalty features without requiring a database redesign later.

## Core entities

### RewardAccount
- `id`: UUID
- `customer_id`: reference to `users`
- `points_balance`: integer
- `lifetime_points`: integer
- `tier`: string | null
- `created_at`: timestamp
- `updated_at`: timestamp

### RewardTransaction
- `id`: UUID
- `customer_id`: reference to `users`
- `booking_id`: UUID | null reference to `bookings`
- `points`: integer
- `reason`: string
- `created_at`: timestamp

## Reward capabilities

The system should be able to support:
- points earned by booking activity
- milestone rewards based on booking count
- discount rewards
- benefit rewards such as service upgrades or add-ons
- reward expiration rules
- redemption tracking

## Important constraints

- breakfast-based rewards must not be implemented until breakfast availability is verified.
- rewards should be tied to customer accounts, not guest details alone.
- reward history should be auditable and stored as transaction records.
