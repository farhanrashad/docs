[Home](README.md) | [Previous: Contractor Labour](contractor.md) | [Next: Leave Encashment](leave-encashment.md)

# Final Settlement

## Overview

This module covers resignation and termination settlement control, including payable and recoverable items such as notice pay, leave encashment, gratuity, loans, advances, deductions, and clearance workflow.

## Purpose and Users

`dx_workforce_final_settlement` will manage resignation and termination settlements for Odoo 18 Community. It should calculate and track final payable or recoverable items such as notice pay, leave encashment, gratuity, unpaid loans, salary advances, deductions, and final approval workflow.

Target users are HR managers, HR finance officers, department heads, and Workforce managers.

## Dependencies and Activation

- Planned dependency: `dx_workforce_operations`.
- Optional soft integrations: `dx_workforce_deductions`, `dx_workforce_wage`, `dx_workforce_overtime`, and attendance modules if installed.
- Activation from core settings through `module_dx_workforce_final_settlement`.
- Planned feature group: `group_dx_workforce_final_settlement`; Workforce managers should imply it.

## Menus and Configuration

Planned operational menus:

- `Workforce Operations > Final Settlement > Settlement Cases`
- `Workforce Operations > Final Settlement > Clearance Checklist`
- `Workforce Operations > Reports > Final Settlement > Settlement Summary`

Planned configuration menus:

- `Workforce Operations > Configuration > Final Settlement > Settlement Rules`
- `Workforce Operations > Configuration > Final Settlement > Clearance Items`

## Main Models and Workflows

Planned models:

- `dx.workforce.final.settlement`: employee separation case, reason, dates, amounts, state workflow, and approval trail.
- `dx.workforce.final.settlement.line`: payable or recoverable components such as unpaid wage, notice pay, leave encashment, gratuity, loan balance, advance balance, fine, asset recovery, or other item.
- `dx.workforce.clearance.item`: configurable clearance requirement by department or role.
- `dx.workforce.clearance.line`: case-specific clearance status and responsible person.
- `dx.workforce.settlement.rule`: calculation policy for notice, gratuity, leave encashment, and deductions.

Workflow:

1. Create settlement case from resignation or termination.
2. Pull employee, contract, department, and separation details.
3. Generate settlement lines from configured rules and installed modules.
4. Complete clearance checklist.
5. Review payable and recoverable balances.
6. Approve, close, and export settlement summary.

## Security and Validation

Settlement users should read settlement cases and checklist lines. Workforce managers should create, calculate, approve, cancel, and close cases. Approved or closed cases must not be recalculated silently. Missing clearance items should block final approval if configured as mandatory.

## Community Boundary

The module should not require payroll salary computation or Enterprise payslips. It should create settlement control sheets and summaries for manual payment processing or future connectors.

## Test Scenarios

- Create resignation and termination settlement cases.
- Generate settlement lines from fixed or manual rules.
- Pull unpaid loan or advance balances when deductions module is installed.
- Validate notice pay and leave encashment calculations from configured rules.
- Block approval when mandatory clearance is pending.
- Confirm approved or closed settlements cannot be silently recalculated.
- Verify menus follow the final settlement feature group.

## Future Extensions

Add document templates, multi-level approvals, accounting or payment export, leave module integration, gratuity rule packs, and employee exit portal.
