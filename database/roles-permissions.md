# Roles and Permissions

## Role-based access control

The future system should model both roles and explicit permissions.
Roles are role names that describe a broad level of access; permissions are granular actions that can be granted independently.

### Proposed roles
- `SUPER_ADMIN`
- `OWNER`
- `MANAGER`
- `STAFF`
- `HOUSEKEEPING`
- `CUSTOMER`

### Proposed permission categories
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

## Role examples

### SUPER_ADMIN
- manage all users, roles, and permissions
- manage rooms, bookings, pricing, promo codes, rewards, housekeeping, and reports
- view all audit logs

### OWNER
- manage bookings
- manage room inventory and pricing
- view revenue and occupancy reports
- view customer information for bookings
- review audit logs as needed

### MANAGER
- manage bookings
- manage staff assignments and roles
- manage promo codes and rewards
- view operational reports

### STAFF
- view assigned bookings
- update check-in/check-out status when permitted
- confirm bookings if granted
- view occupied rooms and available inventory

### HOUSEKEEPING
- view housekeeping tasks
- update task status
- view rooms needing cleaning

### CUSTOMER
- create and manage their own bookings
- manage profile
- view rewards and booking history

## Permission design

Permissions must be stored separately from role definitions so the system can:
- grant exceptions to individual users
- define restricted staff access
- support future business rules for owner/operator separation
- map role defaults to permission sets

## Future implementation notes

- A role table should define default permission assignments.
- A user_permissions table should allow explicit overrides.
- Roles should be used for broad access patterns, while permissions should gate specific operations.
