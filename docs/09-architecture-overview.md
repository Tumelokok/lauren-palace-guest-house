# Architecture Overview

## Current project state
- the application is a Next.js frontend with marketing and hospitality landing page content.
- core functionality such as booking, authentication, database persistence, payments, rewards, and admin dashboards is not implemented.
- the current code now includes a working header, desktop/mobile navigation, and a functioning FAQ accordion.
- room data has been realigned to the verified Lauren Palace inventory categories.

## Foundation work completed
- missing `Header.tsx` has been implemented and integrated.
- `Navigation.tsx` and `MobileMenu.tsx` are now connected to the header.
- the missing `Accordion` component has been added to support the FAQ section.
- the application now has a stronger domain model foundation for room types and room inventory.

## Future architectural direction
- use a relational database pattern to support room inventory, booking lifecycle, users, roles, permissions, payments, and audit logs.
- build a dedicated domain model before wiring persistence.
- keep pricing calculations separate from UI and preserve booking snapshots.
- model physical rooms separately from room categories.

## Documentation
The following database planning documents have been created:
- `/database/domain-model.md`
- `/database/schema-design.md`
- `/database/roles-permissions.md`
- `/database/booking-model.md`
- `/database/pricing-model.md`
- `/database/rewards-model.md`
- `/database/housekeeping-model.md`
- `/database/audit-log-model.md`

## What remains
- database implementation
- authentication and account management
- booking engine and availability logic
- payments and promo code processing
- rewards and staff/admin dashboards
- real-time operational updates

## Recommended next step
Finalize the database schema and persistence layer before implementing any booking or payment workflows.
