[Home](index.md) | [Previous: Final Settlement](final-settlement.md) | [Next: Overtime Leave Balance](overtime-leave-balance.md)

# Leave Encashment

## Overview

This module covers leave balance encashment, including rules, eligibility, requests, and summary tracking.

## Purpose and Users

`dx_workforce_leave_encashment` manages leave balance encashment for Odoo 18 Community. It allows eligible leave balances to be converted into payable cash instead of leaving them unused.

Target users are HR managers, payroll preparers, HR finance officers, and Workforce managers.

## Dependencies and Activation

- Depends on `dx_workforce_operations`.
- Optional soft integration with attendance or leave-related modules if installed.
- Activation from core settings through `module_dx_workforce_leave_encashment`.
- Planned feature group: `group_dx_workforce_leave_encashment`; Workforce managers should imply it.

## Menus and Configuration

Planned operational menus:

- `Workforce Operations > Leave Encashment > Encashment Requests`
- `Workforce Operations > Leave Encashment > Encashment Register`
- `Workforce Operations > Reports > Leave Encashment > Leave Encashment Summary`

Planned configuration menus:

- `Workforce Operations > Configuration > Leave Encashment > Encashment Rules`
- `Workforce Operations > Configuration > Leave Encashment > Eligibility Rules`

## Main Models and Workflows

Planned models:

- `dx.workforce.leave.encashment.rule`: encashment ratio, eligible leave types, caps, and approval policy.
- `dx.workforce.leave.encashment.request`: employee request or system-generated encashment case.
- `dx.workforce.leave.encashment.line`: computed leave balance, encashable balance, rate, and payable amount.
- `dx.workforce.leave.encashment.generate.wizard`: period or employee-based generation helper.

Workflow:

1. Configure encashment rules and eligibility checks.
2. Select eligible employee leave balance for encashment.
3. Compute payable amount from approved leave balance.
4. Review, approve, and confirm encashment request.
5. Export or forward the final payable value for manual payroll processing.

## Security and Validation

Leave encashment users should read requests and rules. Workforce managers should create, calculate, approve, cancel, and manage rules. Approved requests must not be silently recalculated.

## Community Boundary

The module should not post payslips or accounting entries. It should remain a control layer for leave-balance-to-cash settlement and future payroll connectors.

## Test Scenarios

- Configure an encashment rule with eligible leave types.
- Create a request for an employee with sufficient leave balance.
- Verify the system calculates payable amount from leave balance.
- Approve a request and confirm it becomes read-only where applicable.
- Confirm menus are controlled by the leave encashment feature group.

## Future Extensions

Add leave accrual integration, expiry handling, statutory encashment rules, accounting export, and batch settlement processing.
