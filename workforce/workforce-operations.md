[Home](README.md) | [Next: Shift Planning](shift-planning.md)

# Workforce Operations

## Purpose and Users

`Workforce Operations` is the shared app for Odoo 18 Community. It provides the app tile, root menu, global Settings block, common security groups, and a stable menu/configuration framework for all workforce feature modules.

Target users are HR officers, workforce supervisors, and HR/workforce managers who need one central place for industrial workforce operations.

## Dependencies and Activation

- Depends on `hr` only.
- Installed as the only application module in the suite.
- Provides root menu `Workforce Operations`.
- Provides shared menus `Reports`, `Configuration`, and `Configuration > Settings`.

## Feature Flags and Groups

Core groups:

- `Workforce User`: base Workforce user.
- `Workforce Manager`: Workforce manager/admin; implies Workforce user and feature groups as modules install them.
- `Shift Planning Access`: enables the installed shift-planning feature.

Settings toggles:

- `Shift Planning`
- `Shift Attendance Link`
- `Employee Self Service`
- `Overtime Rules`
- `Leave Encashment`
- `Overtime Leave Balance`
- `Daily Wage / Piece Rate`
- `Loans, Advances & Deductions`
- `Contractor Labour Management`
- `Full & Final Settlement`

## Menus and Configuration

`Workforce Operations` is visible to Workforce users and managers. `Reports`, `Configuration`, and `Settings` are manager-only. Feature modules add their operational menus under the root menu and their setup menus under `Workforce Operations > Configuration`.

## Security Rules

The core module owns suite-level groups only. It does not grant broad access to feature models. Feature modules must define their own access CSV and record rules, usually read-only for feature users and full CRUD for Workforce managers.

## Community Boundary

The core module must not depend on `hr_attendance`, payroll, accounting, or feature modules. It should stay a lightweight foundation to avoid dependency cycles.

## Test Scenarios

- Install `Workforce Operations` alone.
- Confirm one app tile named `Workforce Operations` appears.
- Confirm Settings shows all feature toggles.
- Confirm Configuration and Settings menus are manager-only.
- Confirm no attendance, payroll, shift, wage, overtime, employee self-service, leave encashment, leave conversion, or deduction models are required by the core module.

## Related Pages

- [Suite Home](README.md)
- [Shift Planning](shift-planning.md)
- [Shift Attendance Link](shift-attendance-link.md)

## Future Extensions

Future modules should add a `module_*` toggle in core settings, define one feature group, add operational/configuration/report menus under the core app, and avoid changing core dependencies.
