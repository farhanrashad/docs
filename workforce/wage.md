[Home](README.md) | [Previous: Overtime](overtime.md) | [Next: Deductions](deductions.md)

# Wage

## Overview

This module covers daily wage, contract worker wage, piece-rate wage, minimum wage top-up, and absent day deduction sheets.

## Purpose and Users

`dx_workforce_wage` manages Community-safe daily wage, contract worker wage, piece-rate production wage, minimum wage top-up, and absent day deduction sheets.

Target users are HR payroll preparers, production supervisors, wage clerks, and Workforce managers.

## Dependencies and Activation

- Depends on `dx_workforce_operations` and `hr_attendance`.
- Activated from core settings through `module_dx_workforce_wage`.
- Defines `group_dx_workforce_wage`; Workforce managers imply this group.

## Menus and Configuration

Operational menus:

- `Workforce Operations > Wages > Wage Sheets`
- `Workforce Operations > Wages > Piece Work`
- `Workforce Operations > Wages > Generate Wage Sheet`
- `Workforce Operations > Reports > Wages > Wage Summary`

Configuration menus:

- `Workforce Operations > Configuration > Wages > Wage Profiles`

## Main Models and Workflows

Main models:

- `dx.workforce.wage.profile`: daily/hourly/piece-rate wage setup, minimum wage top-up and absence settings.
- `dx.workforce.piece.work`: production piece entries for employee/date/product or activity.
- `dx.workforce.wage.sheet` and `dx.workforce.wage.line`: date-range wage calculation sheet and employee line results.
- `dx.workforce.wage.sheet.generate.wizard`: creates sheets for a period and employee set.

Workflow:

1. Configure wage profiles per worker category.
2. Record attendance and piece-work entries.
3. Generate a wage sheet for the period.
4. Review daily wage, piece-rate totals, top-up, and absence deductions.
5. Confirm or approve the sheet for reporting/export.

## Security and Validation

Wage users can read wage data. Workforce managers can configure profiles, create piece-work, generate sheets, and approve wage sheets. Approved sheet values should not be silently rewritten.

## Community Boundary

This module does not create payslips or accounting entries. It produces Community-safe wage sheets for review, manual payroll entry, export, or future connectors.

## Test Scenarios

- Configure daily wage and piece-rate profiles.
- Create attendance and piece-work records for the same period.
- Generate wage sheet lines for selected employees.
- Verify absence deduction and minimum wage top-up calculations.
- Confirm or approve a sheet and verify read-only behavior where applicable.
- Confirm menus are controlled by the wage feature group.

## Future Extensions

Add production order integration, contractor billing export, statutory wage rules, approval routing, and XLSX/PDF wage sheet reports.
