[Home](README.md) | [Previous: Shift Planning](shift-planning.md) | [Back to Workforce Operations](workforce-operations.md)

# Shift Attendance Link

## Purpose and Users

`Shift Attendance Link` links Odoo attendances to confirmed shift allocations. It is optional so shift planning can run without attendance dependencies.

Target users are attendance officers, HR supervisors, and Workforce managers who need to know which planned shift an attendance belongs to.

## Dependencies and Activation

- Depends on `Workforce Operations`, `Shift Planning`, and `hr_attendance`.
- Activated from core settings through the `Shift Attendance Link` feature toggle.
- Defines a `Shift Attendance` group, implying Workforce user and shift planning access.

## Menus and Configuration

Operational menus appear only when installed and the user has the shift attendance group:

- `Workforce Operations > Attendance > Attendances`

No separate configuration menu is required in the current implementation.

## Main Models and Workflows

The module extends `hr.attendance` with shift allocation and shift template references. Attendance records can show and group by their matched shift allocation/template.

Workflow:

1. Confirm shift allocations in `Shift Planning`.
2. Create or import employee attendance records through Odoo attendance.
3. Assign or review the matching shift allocation on attendance.
4. Use list/form/search views to audit attendance by shift.

## Security and Validation

The module keeps Odoo attendance overlap behavior intact. Shift fields and menus are visible only to the shift attendance group. Workforce managers can administer through inherited Workforce access.

## Community Boundary

This module depends on Community `hr_attendance`, not payroll. Late/early rules, grace periods, and penalty calculations should stay out of this module unless explicitly added in a future attendance rules extension.

## Test Scenarios

- Install after `Shift Planning` and `hr_attendance`.
- Confirm Attendance menu appears under Workforce Operations.
- Create a confirmed shift allocation and attendance for the same employee.
- Verify attendance displays shift allocation and shift template fields.
- Verify Odoo native attendance overlap rules still apply.
- Confirm menus/fields are hidden for users without the shift attendance group.

## Related Pages

- [Suite Home](README.md)
- [Workforce Operations](workforce-operations.md)
- [Shift Planning](shift-planning.md)

## Future Extensions

Add automatic matching by check-in time, grace periods, late/early marking, missing checkout handling, and night-shift matching windows.
