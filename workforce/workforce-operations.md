[Home](README.md) | [Next: Shift Planning](shift-planning.md)

# Workforce Operations

## Overview

This is the core suite document for workforce management in Odoo 18 Community. It describes the shared application shell that all workforce-related features rely on.

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

The core module is intentionally broad in the settings list so the suite can expose feature switches without forcing each extension to duplicate its own global entry point. This keeps the user experience centralized for HR officers and workforce managers.

## Menus and Configuration

`Workforce Operations` is visible to Workforce users and managers. `Reports`, `Configuration`, and `Settings` are manager-only. Feature modules add their operational menus under the root menu and their setup menus under `Workforce Operations > Configuration`.

Menu structure expected by the suite:

- `Workforce Operations`
  - `Reports`
  - `Configuration`
    - `Settings`
    - feature-specific setup menus added by modules

Feature modules should keep their menus under this tree so users always return to the same root app.

## Security Rules

The core module owns suite-level groups only. It does not grant broad access to feature models. Feature modules must define their own access CSV and record rules, usually read-only for feature users and full CRUD for Workforce managers.

Expected access behavior:

- Workforce users get base access to the app shell.
- Workforce managers get configuration access.
- Feature modules decide their own read/write rules.
- The core module should not accidentally expose child models.

## Community Boundary

The core module must not depend on `hr_attendance`, payroll, accounting, or feature modules. It should stay a lightweight foundation to avoid dependency cycles.

This boundary matters because the core app must remain installable on its own. Feature-specific behavior should only appear when its own module is installed and the corresponding toggle is enabled.

## Test Scenarios

- Install `Workforce Operations` alone.
- Confirm one app tile named `Workforce Operations` appears.
- Confirm Settings shows all feature toggles.
- Confirm Configuration and Settings menus are manager-only.
- Confirm no attendance, payroll, shift, wage, overtime, employee self-service, leave encashment, leave conversion, or deduction models are required by the core module.

Additional checks:

- Confirm the root menu remains stable for all future workforce modules.
- Confirm feature modules can attach configuration menus under `Workforce Operations > Configuration`.
- Confirm disabling a feature toggle hides the related operational menu if the module is not installed.

## Related Pages

- [Suite Home](README.md)
- [Shift Planning](shift-planning.md)
- [Shift Attendance Link](shift-attendance-link.md)

## Future Extensions

Future modules should add a `module_*` toggle in core settings, define one feature group, add operational/configuration/report menus under the core app, and avoid changing core dependencies.

Examples of future suite modules include employee self service, overtime rules, leave encashment, daily wage or piece rate handling, contractor labour management, loans and deductions, and full and final settlement.
