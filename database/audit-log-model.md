# Audit Log Model

## Purpose

Audit logging should capture important user actions and entity changes to support accountability and traceability.

## Core entity

### AuditLog
- `id`: UUID
- `user_id`: reference to `users`
- `action`: string
- `entity`: string
- `entity_id`: string
- `metadata`: JSON | null
- `created_at`: timestamp

## Key fields

- `user_id`: the user who performed the action
- `action`: a concise description, e.g. `Changed room price`, `Cancelled booking`
- `entity`: the type of entity affected, e.g. `Booking`, `Room`, `PromoCode`
- `entity_id`: the identifier of the affected record
- `metadata`: optional additional context, such as old/new values or source channel

## Future considerations

- avoid storing sensitive personal data in audit payloads
- limit audit metadata to what is legally appropriate
- use audit logs for administrator review and operational issue diagnosis
- connect audit records to role-based permissions checks
