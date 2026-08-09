# Workforce Operations Suite

<img src="../assets/dynexcel-logo-black.png" alt="Dynexcel" width="280" />

The Workforce Operations suite is the central documentation hub for the industrial HR stack in Odoo 18 Community. It covers the shared framework, shift planning, and shift attendance linkage in one maintained documentation set.

This suite is designed to keep the core foundation lightweight while letting feature modules extend the app in a controlled way. The documentation below follows the same structure used by the feature packets: purpose, dependencies, menus, models, workflows, security, boundaries, and test coverage.

## Suite at a Glance

| Module | Purpose | Page |
|--------|---------|------|
| Workforce Operations | Lightweight shared app shell, settings, and suite-level groups | [Open](workforce-operations.md) |
| Shift Planning | Shift templates, teams, allocations, rotations, and schedules | [Open](shift-planning.md) |
| Shift Attendance Link | Optional attendance-to-shift matching extension | [Open](shift-attendance-link.md) |
| Overtime | Overtime rules, caps, approvals, and attendance-based calculation | [Open](overtime.md) |
| Wage | Daily wage, piece-rate wage, top-up, and deduction sheets | [Open](wage.md) |
| Deductions | Loans, advances, installment recovery, and deduction sheets | [Open](deductions.md) |
| Contractor Labour | Contractor workers, gate passes, attendance, and billing sheets | [Open](contractor.md) |
| Final Settlement | Exit settlement, clearance checklist, and settlement control sheets | [Open](final-settlement.md) |
| Leave Encashment | Leave balance encashment rules and requests | [Open](leave-encashment.md) |
| Overtime Leave Balance | Overtime-to-leave conversion and credit register | [Open](overtime-leave-balance.md) |
| Employee Self Service | Employee portal requests and self-service access | [Open](employee-self-service.md) |

## Documentation Flow

1. Start with [Workforce Operations](workforce-operations.md)
2. Continue to [Shift Planning](shift-planning.md)
3. Finish with [Shift Attendance Link](shift-attendance-link.md)
4. Review Overtime, Wage, Deductions, Contractor Labour, Final Settlement, Leave Encashment, Overtime Leave Balance, and Employee Self Service as needed

## Quick Navigation

- [Home](../README.md)
- [ZKTeco Documentation](../zkteco/README.md)

## What This Suite Covers

- A shared app shell for workforce modules
- A central configuration hub with feature toggles
- Shift planning for factory and field teams
- Attendance linkage for confirmed shift allocations
- A suite structure that stays modular and Community-safe
- Overtime and wage control documents
- Deduction and contractor billing control documents
- Settlement, leave encashment, compensatory leave, and employee portal coverage

## Documentation Structure

Every page in this suite includes:

- Purpose and users
- Dependencies and activation
- Menus and configuration
- Main models and workflows
- Security and validation
- Community boundary
- Test scenarios
- Future extensions

## Maintenance Notes

- This section is maintained in the `docs` repository.
- Each page includes home, previous, and next links for easy navigation.
- Content is organized to stay aligned with the ZKTeco documentation style.
- The docs reflect the feature packets for the current workforce suite.
- Planned modules are documented as feature packets so the suite stays complete even when a module is not yet fully shipped.
