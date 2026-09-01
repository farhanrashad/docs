[Home](index.md) | [Previous: Workforce Operations](workforce-operations.md) | [Next: Shift Attendance Link](shift-attendance-link.md)

# Shift Planning

## Overview

This module documents the planning layer of the workforce suite. It is built for industrial shift design where teams may work morning, evening, night, or double-shift patterns and where schedules must remain safe for payroll and work-entry use.

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

These menus are intentionally nested under the core app so users keep a single workflow path:

1. open `Workforce Operations`
2. enter `Shift Planning`
3. manage allocations, rotations, and schedule regeneration
4. review reports or setup templates and teams from configuration menus

## Main Models and Workflows

Main models:

- `dx.shift.template`: named shift definitions with time range, break, paid hours, color, company, and work entry type.
- `dx.shift.team`: employee groups for bulk planning.
- `dx.shift.allocation`: dated employee shift assignments with planned start/stop, state, rotation source, and generated schedule lines.
- `dx.shift.rotation` and `dx.shift.rotation.line`: weekly rotation plans and sequence lines.
- Wizards for rotation allocation generation and schedule regeneration.

Model responsibilities in practice:

- `dx.shift.template` defines the repeatable shift pattern that can be reused across teams.
- `dx.shift.team` groups employees for bulk planning and easier allocation.
- `dx.shift.allocation` stores each dated assignment, its planned start and stop, and the state of the assignment.
- `dx.shift.rotation` and `dx.shift.rotation.line` let managers describe weekly cycles before generating allocations.
- Wizards keep repetitive planning operations fast when the team needs to generate or refresh schedules.

Core workflow:

1. Configure shift templates and teams.
2. Create manual allocations or generate allocations from a rotation plan.
3. Confirm allocations after overlap/night-shift validation.
4. Regenerate schedules for the target period where needed.
5. Review allocations in list/calendar/pivot/report views.

This workflow allows planners to start with a reusable template, assign people or teams, validate the result, and then regenerate schedules only when a business change requires it.

## Security and Validation

Shift planning users can read shift data. Workforce managers can create, confirm, cancel, regenerate, and manage configuration. Allocations must block overlapping time ranges for the same employee unless the conflicting allocation is cancelled. Non-overlapping double shifts are allowed.

Validation behavior should protect industrial schedules from accidental overlap while still allowing intentional double shifts when the time ranges are different. Night shifts crossing midnight must stay readable in reports and views.

## Community Boundary

The module uses Community HR contracts, work entries, and resource calendars for safe planning visibility. It must not require Enterprise payroll salary computation. Old confirmed/payroll-processed periods should not be silently rewritten.

This keeps the module suitable for Community deployments and avoids changing already finalized historical periods.

## Test Scenarios

- Create morning, evening, and night templates.
- Generate one month of weekly rotation allocations.
- Confirm double shift on the same day when times do not overlap.
- Reject overlapping allocations.
- Confirm night shift date handling across midnight.
- Regenerate schedule for a date range and verify generated attendance/calendar lines.
- Confirm menus disappear when `Shift Planning` is disabled.

Additional checks:

- Confirm allocations remain traceable when generated from a rotation source.
- Confirm regenerated schedules match the selected target period.
- Confirm reports remain available from the workforce reporting path.

## Related Pages

- [Suite Home](index.md)
- [Workforce Operations](workforce-operations.md)
- [Shift Attendance Link](shift-attendance-link.md)

## Future Extensions

Add grace periods, skill-based shift assignment, capacity planning, supervisor approval rules, and shift exchange workflows in separate extensions if needed.

Potential future enhancements should stay separate so the current module remains focused on scheduling, validation, and schedule generation.
