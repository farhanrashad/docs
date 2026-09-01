[Home](index.md) | [Previous: Shift Planning](shift-planning.md) | [Back to Workforce Operations](workforce-operations.md)

# Shift Attendance Link

## Overview

This page documents the attendance extension layer of the workforce suite. It keeps attendance records tied to confirmed shift allocations so supervisors can see which planned shift a punch belongs to.

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

The menu only appears when the module is installed and the user belongs to the shift attendance group.

## Main Models and Workflows

The module extends `hr.attendance` with shift allocation and shift template references. Attendance records can show and group by their matched shift allocation/template.

The extension is intentionally lightweight. It does not create a new attendance subsystem; it adds shift context to the existing Odoo attendance model and screens.

Workflow:

1. Confirm shift allocations in `Shift Planning`.
2. Create or import employee attendance records through Odoo attendance.
3. Assign or review the matching shift allocation on attendance.
4. Use list/form/search views to audit attendance by shift.

This keeps the workflow familiar to attendance officers while giving HR supervisors a direct link from the actual punch record back to the planned shift.

## Security and Validation

The module keeps Odoo attendance overlap behavior intact. Shift fields and menus are visible only to the shift attendance group. Workforce managers can administer through inherited Workforce access.

The module should not weaken native attendance validation. Instead, it augments the record with shift references and keeps access scoped to the correct workforce users.

## Community Boundary

This module depends on Community `hr_attendance`, not payroll. Late/early rules, grace periods, and penalty calculations should stay out of this module unless explicitly added in a future attendance rules extension.

That boundary keeps the module focused on shift context rather than turning it into a full attendance rules engine.

## Test Scenarios

- Install after `Shift Planning` and `hr_attendance`.
- Confirm Attendance menu appears under Workforce Operations.
- Create a confirmed shift allocation and attendance for the same employee.
- Verify attendance displays shift allocation and shift template fields.
- Verify Odoo native attendance overlap rules still apply.
- Confirm menus/fields are hidden for users without the shift attendance group.

Additional checks:

- Confirm attendance records can be grouped by shift allocation or shift template.
- Confirm the linked shift information remains visible on list, form, and search views.
- Confirm the module can be removed without breaking the shift planning module.

## Related Pages

- [Suite Home](index.md)
- [Workforce Operations](workforce-operations.md)
- [Shift Planning](shift-planning.md)

## Future Extensions

Add automatic matching by check-in time, grace periods, late/early marking, missing checkout handling, and night-shift matching windows.

Future attendance logic should remain optional and separate so the current module stays small, predictable, and safe for Community use.
