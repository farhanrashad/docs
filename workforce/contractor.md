[Home](README.md) | [Previous: Deductions](deductions.md) | [Next: Final Settlement](final-settlement.md)

# Contractor Labour

## Overview

This module documents contractor labour operations for the workforce suite. It covers contractor companies, workers, gate passes, attendance reconciliation, and billing sheets.

## Purpose and Users

`dx_workforce_contractor` will manage contractor labour operations for Odoo 18 Community: contractor companies, contractor workers, gate passes, attendance review, billing reconciliation, and contractor payroll or billing sheets.

Target users are contractor coordinators, gate or security staff, HR operations, admin finance teams, and Workforce managers.

## Dependencies and Activation

- Planned dependency: `dx_workforce_operations`.
- Optional dependency or companion connector: `hr_attendance` if contractor attendance needs native attendance records.
- Activation from core settings through `module_dx_workforce_contractor`.
- Planned feature group: `group_dx_workforce_contractor`; Workforce managers should imply it.

## Menus and Configuration

Planned operational menus:

- `Workforce Operations > Contractors > Contractor Companies`
- `Workforce Operations > Contractors > Contractor Workers`
- `Workforce Operations > Contractors > Gate Passes`
- `Workforce Operations > Contractors > Attendance Reconciliation`
- `Workforce Operations > Contractors > Billing Sheets`
- `Workforce Operations > Reports > Contractors > Contractor Billing Summary`

Planned configuration menus:

- `Workforce Operations > Configuration > Contractors > Contractor Types`
- `Workforce Operations > Configuration > Contractors > Billing Rules`

## Main Models and Workflows

Planned models:

- `dx.workforce.contractor.company`: contractor or vendor profile, contacts, agreement dates, and billing terms.
- `dx.workforce.contractor.worker`: worker identity, contractor, department or site, skill, active status, and linked employee or partner where needed.
- `dx.workforce.contractor.gate.pass`: worker access pass, validity period, status, and document proof.
- `dx.workforce.contractor.attendance`: contractor attendance or reconciliation line.
- `dx.workforce.contractor.billing.rule`: rate setup by contractor, worker category, shift, day type, or attendance basis.
- `dx.workforce.contractor.billing.sheet`: date-range sheet for payable contractor labour.

Workflow:

1. Register contractor companies and workers.
2. Issue gate passes with validity and document proof.
3. Capture or reconcile worker attendance.
4. Apply billing rules to create contractor billing sheet lines.
5. Review, confirm, approve, and export contractor billing sheets.

## Security and Validation

Contractor users should read contractor records and operational sheets. Workforce managers should manage setup, approvals, and cancellation. Gate pass validity, duplicate active worker identity, and billing-period lock checks should be enforced.

## Community Boundary

The module should not require accounting, purchase, payroll, or Enterprise apps. Billing sheets should remain operational documents unless a future connector exports to vendor bills or accounting.

## Test Scenarios

- Create contractor company and workers.
- Issue valid and expired gate passes.
- Record or reconcile contractor attendance for a date range.
- Configure billing rules and generate a billing sheet.
- Verify duplicate active gate pass or duplicate worker identity is blocked.
- Confirm approved billing sheets are not silently regenerated.
- Verify menus follow the contractor feature group.

## Future Extensions

Add purchase or vendor bill export, biometric device import, safety induction tracking, document expiry alerts, and contractor compliance dashboards.
