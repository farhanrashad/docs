[Home](README.md) | [Previous: Workforce Operations](workforce-operations.md) | [Next: Shift Attendance Link](shift-attendance-link.md)

# Shift Planning

## Purpose and Users

`Shift Planning` manages industrial shift planning for workers. It supports shift templates, worker teams, dated allocations, weekly rotation plans, multiple shifts per day, double shifting, night shifts crossing midnight, and generated employee working schedules.

Target users are shift supervisors, HR planners, production managers, and Workforce managers.

## Dependencies and Activation

- Depends on `Workforce Operations`, `hr_contract`, and `hr_work_entry_contract`.
- Activation uses the `Shift Planning` feature from the core app.
- Module is not an app; menus live under `Workforce Operations`.

## Menus and Configuration

Operational menus:

- `Workforce Operations > Shift Planning > Allocations`
- `Workforce Operations > Shift Planning > Rotations`
- `Workforce Operations > Shift Planning > Regenerate Schedules`
- `Workforce Operations > Reports > Shift Planning > Shift Allocation Report`

Configuration menus:

- `Workforce Operations > Configuration > Shift Planning > Teams`
- `Workforce Operations > Configuration > Shift Planning > Shift Templates`

## Main Models and Workflows

Main models:

- `dx.shift.template`: named shift definitions with time range, break, paid hours, color, company, and work entry type.
- `dx.shift.team`: employee groups for bulk planning.
- `dx.shift.allocation`: dated employee shift assignments with planned start/stop, state, rotation source, and generated schedule lines.
- `dx.shift.rotation` and `dx.shift.rotation.line`: weekly rotation plans and sequence lines.
- Wizards for rotation allocation generation and schedule regeneration.

Core workflow:

1. Configure shift templates and teams.
2. Create manual allocations or generate allocations from a rotation plan.
3. Confirm allocations after overlap/night-shift validation.
4. Regenerate schedules for the target period where needed.
5. Review allocations in list/calendar/pivot/report views.

## Security and Validation

Shift planning users can read shift data. Workforce managers can create, confirm, cancel, regenerate, and manage configuration. Allocations must block overlapping time ranges for the same employee unless the conflicting allocation is cancelled. Non-overlapping double shifts are allowed.

## Community Boundary

The module uses Community HR contracts, work entries, and resource calendars for safe planning visibility. It must not require Enterprise payroll salary computation. Old confirmed/payroll-processed periods should not be silently rewritten.

## Test Scenarios

- Create morning, evening, and night templates.
- Generate one month of weekly rotation allocations.
- Confirm double shift on the same day when times do not overlap.
- Reject overlapping allocations.
- Confirm night shift date handling across midnight.
- Regenerate schedule for a date range and verify generated attendance/calendar lines.
- Confirm menus disappear when `Shift Planning` is disabled.

## Related Pages

- [Suite Home](README.md)
- [Workforce Operations](workforce-operations.md)
- [Shift Attendance Link](shift-attendance-link.md)

## Future Extensions

Add grace periods, skill-based shift assignment, capacity planning, supervisor approval rules, and shift exchange workflows in separate extensions if needed.
