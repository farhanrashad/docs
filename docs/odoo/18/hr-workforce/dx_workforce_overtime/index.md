[HR & Workforce](../) | [Odoo 18 Home](/odoo/18/)

# Overtime

## Overview

This module covers overtime rules, caps, approvals, and attendance-based overtime calculation for the workforce suite.

## Purpose and Users

`dx_workforce_overtime` manages overtime rules, caps, approval workflows, and attendance-based overtime calculation for Odoo 18 Community.

Target users are HR officers, attendance supervisors, department approvers, and Workforce managers.

## Dependencies and Activation

- Depends on `dx_workforce_operations`, `hr_attendance`, and `hr_contract`.
- Activated from core settings through `module_dx_workforce_overtime`.
- Defines `group_dx_workforce_overtime`; Workforce managers imply this group.

## Menus and Configuration

Operational menus:

- `Workforce Operations > Overtime > Overtime Entries`
- `Workforce Operations > Overtime > Generate Overtime`
- `Workforce Operations > Reports > Overtime > Overtime Summary`

Configuration menus:

- `Workforce Operations > Configuration > Overtime > Overtime Rules`

## Main Models and Workflows

Main models:

- `dx.workforce.overtime.rule`: overtime type, multiplier, caps, approval requirements, and calculation policy.
- `dx.workforce.overtime.entry`: employee overtime requests/calculations with state workflow and source attendance.
- `dx.workforce.overtime.generate.wizard`: date-range generator from attendance.
- Extension fields on `hr.attendance` for overtime review linkage.

Workflow:

1. Configure overtime rules for normal, double, holiday, night, or department-specific overtime.
2. Generate overtime entries from attendance for a date range or create entries manually.
3. Review caps, calculated hours, rates, and approval requirements.
4. Confirm, approve, or reject overtime entries.
5. Use Overtime Summary for review and export.

## Security and Validation

Overtime users can read overtime rules and entries. Workforce managers can create, generate, approve, reject, and manage rules. Department-wise approvals should be enforced by rule configuration or a later approval extension.

## Community Boundary

The module calculates and approves overtime records but does not post payslips. Results remain available for manual payroll processing, export, or a future payroll connector.

## Test Scenarios

- Configure normal, double, holiday, and night overtime rules.
- Generate overtime from attendance for employees with contracts.
- Verify legal cap warnings or blocking behavior according to rule setup.
- Verify approval states and manager-only approval buttons.
- Confirm Overtime Summary reports approved entries.
- Confirm attendance records can show linked overtime status where implemented.

## Future Extensions

Add multi-level department approval, statutory rule packs by country, public holiday calendar integration, and export connectors.
