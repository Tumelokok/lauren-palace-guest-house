# Housekeeping Model

## Purpose

The housekeeping model should support room cleaning workflows tied to physical room inventory and booking activity.

## Core entity

### HousekeepingTask
- `id`: UUID
- `room_id`: reference to `rooms`
- `assigned_staff_id`: UUID | null reference to `users`
- `task_type`: string
- `status`: enum(DIRTY, CLEANING, CLEAN, INSPECTED, OCCUPIED, OUT_OF_SERVICE)
- `scheduled_time`: timestamp | null
- `completed_time`: timestamp | null
- `notes`: text | null
- `created_at`: timestamp
- `updated_at`: timestamp

## Housekeeping statuses
- `DIRTY`
- `CLEANING`
- `CLEAN`
- `INSPECTED`
- `OCCUPIED`
- `OUT_OF_SERVICE`

## Business rules

- housekeeping tasks should be generated based on booking check-out and room occupancy.
- tasks should be assignable to housekeeping staff members.
- staff should be able to update task statuses and add notes.
- room status should be updated to reflect cleaning progress.

## Future considerations

- integrate housekeeping tasks with a staff dashboard
- surface priority rooms and same-day turnovers
- support inspection workflows after cleaning
- connect housekeeping workflows to room availability updates
