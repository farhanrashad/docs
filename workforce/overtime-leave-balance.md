[Home](README.md) | [Previous: Leave Encashment](leave-encashment.md) | [Next: Employee Self Service](employee-self-service.md)

# Overtime Leave Balance

## Overview

This module covers overtime-to-leave conversion, credit ratios, conversion requests, and leave credit tracking.

## Purpose and Users

`dx_workforce_overtime_leave_balance` converts approved overtime into compensatory leave balance instead of cash payment. It is useful where policy allows overtime credit to be taken as leave.

Target users are HR officers, attendance supervisors, department approvers, and Workforce managers.

## Dependencies and Activation

- Depends on `dx_workforce_operations`.
- Optional soft integration with `dx_workforce_overtime` and attendance modules if installed.
- Activation from core settings through `module_dx_workforce_overtime_leave_balance`.
- Planned feature group: `group_dx_workforce_overtime_leave_balance`; Workforce managers should imply it.

## Menus and Configuration

Planned operational menus:

- `Workforce Operations > Overtime Leave Balance > Conversion Requests`
- `Workforce Operations > Overtime Leave Balance > Leave Credit Register`
- `Workforce Operations > Reports > Overtime Leave Balance > Overtime Leave Summary`

Planned configuration menus:

- `Workforce Operations > Configuration > Overtime Leave Balance > Conversion Rules`
- `Workforce Operations > Configuration > Overtime Leave Balance > Credit Ratios`

## Main Models and Workflows

Planned models:

- `dx.workforce.overtime.leave.rule`: conversion ratio, eligible overtime types, caps, and approval policy.
- `dx.workforce.overtime.leave.request`: overtime-to-leave conversion case.
- `dx.workforce.overtime.leave.line`: overtime hours, converted leave hours or days, and balance details.
- `dx.workforce.overtime.leave.generate.wizard`: helper to convert selected overtime periods into leave credit.

Workflow:

1. Configure overtime-to-leave conversion rules.
2. Select approved overtime entries eligible for conversion.
3. Compute credited leave balance from overtime hours.
4. Review, approve, and confirm the conversion request.
5. Use the leave credit register for tracking and reporting.

## Security and Validation

Overtime leave balance users should read conversion requests and rules. Workforce managers should create, calculate, approve, cancel, and manage rules. Approved conversions must not be silently recalculated.

## Community Boundary

The module should not post payroll or accounting entries. It should remain a compensatory-leave control layer and allow future payroll or leave connectors.

## Test Scenarios

- Configure a conversion ratio for overtime-to-leave.
- Select approved overtime entries for an employee.
- Verify overtime hours convert into leave balance correctly.
- Approve a conversion request and confirm the credited leave is tracked.
- Confirm menus are controlled by the overtime leave balance feature group.

## Future Extensions

Add leave accrual integration, approval routing, cash-vs-leave policy choice, attendance impact rules, and settlement linkage.
