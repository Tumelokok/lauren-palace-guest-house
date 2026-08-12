# Database Schema Design

## Recommended architecture
- Primary database: PostgreSQL
- ORM: Prisma or a similar relational ORM for Next.js
- Rationale: relational booking and room inventory data, roles/permissions, audit logs, and future reporting all benefit from a structured relational model.

## Core tables

### users
- id: UUID
- email: string
- name: string | null
- role: enum(USER, OWNER, MANAGER, STAFF, HOUSEKEEPING, CUSTOMER)
- created_at: timestamp
- updated_at: timestamp

### permissions
- id: UUID
- name: string
- description: string
- created_at: timestamp
- updated_at: timestamp

### user_permissions
- user_id: UUID → users.id
- permission_id: UUID → permissions.id
- grants a user explicit permissions

### room_types
- id: UUID
- code: string (STANDARD, THREE_SLEEPER, COTTAGE)
- name: string
- description: text
- capacity: string
- verified_direct_price: boolean
- booking_com_price: integer | null
- created_at: timestamp
- updated_at: timestamp

### rooms
- id: UUID
- room_number: string | null
- room_type_id: UUID → room_types.id
- status: enum(AVAILABLE, RESERVED, OCCUPIED, CLEANING, MAINTENANCE, OUT_OF_SERVICE)
- active: boolean
- notes: text | null
- created_at: timestamp
- updated_at: timestamp

### bookings
- id: UUID
- customer_id: UUID → users.id
- room_id: UUID → rooms.id
- room_type_id: UUID → room_types.id
- check_in: date
- check_out: date
- guests: integer
- status: enum(PENDING, CONFIRMED, CHECKED_IN, CHECKED_OUT, CANCELLED, NO_SHOW)
- pricing_snapshot: JSON
- reference: string
- source: string
- created_at: timestamp
- updated_at: timestamp

### payments
- id: UUID
- booking_id: UUID → bookings.id
- amount: integer
- currency: string
- status: enum(PENDING, COMPLETED, FAILED, REFUNDED)
- provider: string
- provider_reference: string
- created_at: timestamp
- updated_at: timestamp

### promo_codes
- id: UUID
- code: string
- description: string | null
- percentage_discount: integer | null
- fixed_discount: integer | null
- valid_from: timestamp
- valid_until: timestamp
- usage_limit: integer | null
- minimum_booking_amount: integer | null
- room_type_id: UUID | null
- active: boolean
- created_at: timestamp
- updated_at: timestamp

### reward_accounts
- id: UUID
- customer_id: UUID → users.id
- points_balance: integer
- lifetime_points: integer
- tier: string | null
- created_at: timestamp
- updated_at: timestamp

### reward_transactions
- id: UUID
- customer_id: UUID → users.id
- booking_id: UUID | null → bookings.id
- points: integer
- reason: string
- created_at: timestamp

### housekeeping_tasks
- id: UUID
- room_id: UUID → rooms.id
- assigned_staff_id: UUID | null → users.id
- task_type: string
- status: enum(DIRTY, CLEANING, CLEAN, INSPECTED, OCCUPIED, OUT_OF_SERVICE)
- scheduled_time: timestamp | null
- completed_time: timestamp | null
- notes: text | null
- created_at: timestamp
- updated_at: timestamp

### audit_logs
- id: UUID
- user_id: UUID → users.id
- action: string
- entity: string
- entity_id: string
- metadata: JSON | null
- created_at: timestamp
