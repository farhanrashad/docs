[Home](README.md) | [Previous: Overtime Leave Balance](overtime-leave-balance.md)

# Employee Self Service

## Overview

This module covers employee-facing self-service requests and portal access to selected workforce information.

## Purpose and Users

`Employee Self Service` provides employee-facing self-service features for Odoo 18 Community. It combines a portal request system with access to profile, contract, attendance, and leave information through configuration-driven toggles.

Target users are employees, HR officers, and Workforce managers who need a secure self-service portal.

## Dependencies and Activation

- Depends on `Workforce Operations`, `hr`, `portal`, `mail`, `hr_attendance`, and `hr_holidays`.
- Activation from core settings through the `Employee Self Service` feature toggle.
- Planned feature group: `Employee Self Service`; Workforce managers should imply it.

## Menus and Configuration

Planned operational menus:

- `Workforce Operations > Employee Self Service > Requests`
- `Workforce Operations > Employee Self Service > All Requests`
- `Workforce Operations > Employee Self Service > My Portal`

Planned configuration menus:

- `Workforce Operations > Configuration > Employee Self Service > Requisition Types`
- `Workforce Operations > Configuration > Employee Self Service > Portal Options`

## Main Models and Workflows

Main models:

- `hr.employee.requisition.type`: configurable request categories such as resignation, loan, vehicle request, and leave request.
- `hr.employee.requisition`: employee request with state workflow, subject, type, description, and company scope.
- `res.company` portal flags: profile, contract, attendance, and leaves visibility.
- `res.config.settings` portal toggles for feature activation.

Workflow:

1. HR configures request types and portal visibility toggles.
2. Employee uses portal home to open My Requests and raise a new requisition.
3. HR reviews the request in backend, then submits, approves, closes, or cancels it.
4. Employees can optionally access profile, contract, attendance, and leave pages based on the enabled toggles.
5. HR can create portal users in bulk or from employee form actions.

## Security and Validation

Portal users can only see their own requisitions. HR users can see all requests and manage request types. Portal actions should not allow employees to bypass state workflow or access other employees' records.

## Community Boundary

The module relies on Community portal and HR apps. Contract and leave pages should not expose compensation data beyond safe informational fields.

## Test Scenarios

- Create a requisition as a portal employee and verify it appears in My Requests.
- Approve and close a request from the backend and confirm the portal state updates.
- Toggle profile, contract, attendance, and leaves pages from Settings.
- Create portal users in bulk from the employee list.
- Confirm a portal user sees only their own requests.

## Future Extensions

Add request approval routing, portal attachments, notifications, request analytics, and more portal self-service pages such as documents, certificates, and assets.
