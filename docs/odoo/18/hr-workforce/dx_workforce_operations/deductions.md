[Home](index.md) | [Previous: Wage](wage.md) | [Next: Contractor Labour](contractor.md)

# Deductions

## Overview

This module covers employee loans, salary advances, installments, recurring/manual deductions, fines, and deduction sheets.

## Purpose and Users

`dx_workforce_deductions` manages employee loans, salary advances, installments, recurring/manual deductions, fines, canteen deductions, hostel deductions, uniform recovery, union fees, and deduction sheets.

Target users are HR finance officers, payroll preparers, admin clerks, and Workforce managers.

## Dependencies and Activation

- Depends on `dx_workforce_operations`, `hr`, and `hr_contract`.
- Activated from core settings through `module_dx_workforce_deductions`.
- Defines `group_dx_workforce_deductions`; Workforce managers imply this group.

## Menus and Configuration

Operational menus:

- `Workforce Operations > Deductions > Deduction Sheets`
- `Workforce Operations > Deductions > Loans`
- `Workforce Operations > Deductions > Salary Advances`
- `Workforce Operations > Deductions > Deduction Entries`
- `Workforce Operations > Deductions > Generate Deduction Sheet`
- `Workforce Operations > Reports > Deductions > Deduction Summary`

Configuration menus:

- `Workforce Operations > Configuration > Deductions > Deduction Policies`

## Main Models and Workflows

Main models:

- `dx.workforce.deduction.policy`: loan/advance policy with model, domain, numeric field, amount limit mode, installment cap, and proof requirement.
- `dx.workforce.loan` and `dx.workforce.loan.installment`: salary-backed loan request, approval, installment schedule, and deduction tracking.
- `dx.workforce.advance`: short-term salary advance request and recovery entries.
- `dx.workforce.deduction.entry`: approved manual or generated deduction line.
- `dx.workforce.deduction.sheet`: period sheet that collects approved entries and due loan installments.
- `dx.workforce.deduction.sheet.generate.wizard`: date-range sheet generator.

Workflow:

1. Configure policies for loans or advances.
2. Use policy domain or field to derive limits from employee, contract, partner, company, or custom model records.
3. Submit and approve loans with proof documents when required.
4. Approve salary advances separately from loans.
5. Create manual deductions for fines, canteen, hostel, uniform, union fee, or other items.
6. Generate a deduction sheet for the period and approve it.

## Security and Validation

Deduction users can read policies, loans, advances, entries, and sheets. Workforce managers can create, approve, refuse, cancel, generate, and manage policies. Policies validate requested amount, installment count, and proof-document requirements.

## Community Boundary

The module does not post payslips or accounting entries. Deduction sheets are Community-safe control documents for manual payroll processing, export, or future connectors.

## Test Scenarios

- Create a loan policy using `hr.contract.wage` or another numeric field as the source value.
- Verify policy domain can target records related to employee, partner, company, or department.
- Submit loan without proof when proof is required and confirm it is blocked.
- Approve loan and verify installment schedule.
- Approve salary advance and verify recovery deduction entries.
- Generate monthly deduction sheet and verify loan, advance, and manual deductions are included.
- Approve sheet and verify linked entries or installments move to deducted state.

## Future Extensions

Add recurring deduction templates, document approval workflows, accounting export, repayment rescheduling, and employee self-service requests.
