# Domain Model

## Core entities

### User
- `id`: unique identifier
- `email`: unique email address
- `name`: optional display name
- `role`: customer, staff, owner/admin, housekeeping, super admin
- `permissions`: explicit permission records in addition to role-based access
- `createdAt` / `updatedAt`

### Role
- `SUPER_ADMIN`
- `OWNER`
- `MANAGER`
- `STAFF`
- `HOUSEKEEPING`
- `CUSTOMER`

Roles are a convenient grouping of permissions. A user may have a primary role and additional explicit permissions.

### Permission
- permission names are granular and could include:
  - `MANAGE_USERS`
  - `MANAGE_ROLES`
  - `MANAGE_ROOMS`
  - `MANAGE_PRICING`
  - `MANAGE_BOOKINGS`
  - `MANAGE_PROMO_CODES`
  - `MANAGE_REWARDS`
  - `MANAGE_HOUSEKEEPING`
  - `VIEW_AUDIT_LOGS`
  - `VIEW_REPORTS`
  - `VIEW_REVENUE`

### RoomType
- `STANDARD`
- `THREE_SLEEPER`
- `COTTAGE`
- verified direct pricing per type
- booking.com benchmark price only available for Standard
- capacity and descriptive details remain TODO until verified

### Room
- physical inventory unit
- references a `RoomType`
- has operational status
- has active/inactive flag
- can have a room number or name when verified

### Booking
- customer
- room
- room type
- check-in date
- check-out date
- guest count
- status
- pricing snapshot
- booking reference
- source channel
- timestamps

### BookingStatus
- `PENDING`
- `CONFIRMED`
- `CHECKED_IN`
- `CHECKED_OUT`
- `CANCELLED`
- `NO_SHOW`

### RoomStatus
- `AVAILABLE`
- `RESERVED`
- `OCCUPIED`
- `CLEANING`
- `MAINTENANCE`
- `OUT_OF_SERVICE`

### Payment
- booking link
- amount
- currency
- status
- provider
- provider reference
- timestamps

### PromoCode
- code
- discount settings
- active windows
- usage rules
- minimum booking amount
- optional room type targeting
- active/inactive

### RewardAccount
- customer link
- points balance
- lifetime points
- tier/status

### RewardTransaction
- customer link
- booking link
- points earned/spent
- reason
- timestamp

### HousekeepingTask
- room link
- assigned staff member
- task type
- status
- scheduled time
- completed time
- notes

### AuditLog
- user link
- action
- entity
- entity ID
- metadata
- timestamp

## Relationships
- a user can have one primary role and many permissions
- room types define category-level pricing and features
- rooms are physical inventory tied to room types
- bookings reference customers, rooms, room types, and pricing snapshots
- payments reference bookings
- promo codes can optionally target room types
- reward transactions reference customers and bookings
- housekeeping tasks reference rooms and optionally staff
- audit logs reference users and tracked entities
