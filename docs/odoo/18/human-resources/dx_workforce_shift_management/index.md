---
id: index
title: "Workforce Operations - Industrial Shift Management"
sidebar_label: "Workforce Operations - Industrial Shift Management"
---

# Workforce Operations - Industrial Shift Management

## Overview

Technical module: `dx_workforce_shift_management`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Shift Planning for Factory and Field Teams
### Shift Templates,
### Team Allocation,
### One Schedule
Manages shift templates, team allocation, dated allocations, weekly rotations, double shifts, and payroll-safe schedule generation for factory and field teams. A unified foundation for all your workforce scheduling needs.
Explore Features Get Support
3+ Core Features
Weekly Rotations
18 Odoo Version
Shift Planning - Active Main Factory Schedule Monday - Sunday / Weekly Rotation
ACTIVE
Shift Morning
Hours 08-16
Status OK
Team Alpha
Rotation Weekly
Mode Auto
Morning
Active
Team Beta
Night
Team Gamma
Double
T Templates
>
A Allocation
R Rotations
S Schedule
### What is this module?
### Comprehensive Shift Management for Odoo
This module provides a robust framework for managing shift templates, team allocations, and weekly rotations. It ensures non-overlapping schedules and supports night shifts and double shifts for factory and field teams.
### 📅 Shift Templates & Teams
Define precise shift templates with start/end times and assign them to specific factory or field teams for structured workforce management.
### 🔄 Rotation Plans & Allocations
Setup weekly rotation plans and dated allocations to ensure continuous operations and fair distribution of shifts among all team members.
### 🌙 Night-Shift & Non-Overlap Support
Built-in support for night shifts and automated non-overlap checks to prevent scheduling conflicts and ensure payroll-safe schedule generation.
### Key Capabilities
### Everything Built In
### Shift Templates
Create reusable shift templates with defined hours, breaks, and specific rules for different operational needs.
### Team Allocation
Assign workers to specific teams and link those teams directly to shift templates for structured management.
### Dated Allocations
Apply specific shift allocations for exact dates, handling exceptions and temporary schedule changes effortlessly.
Design and automate weekly rotation plans to ensure fair distribution of morning, evening, and night shifts across teams.
### Double Shifts
Full support for double shifts, allowing teams to cover extended operational hours without manual scheduling errors.
### Payroll-Safe Generation
Generate schedules that are strictly payroll-safe, ensuring accurate hour tracking and compliance with labor regulations.
### Non-Overlap Checks
Automated validation prevents overlapping shifts for the same employee, eliminating scheduling conflicts before they happen.
### Night-Shift Support
Dedicated logic for night shifts, correctly handling cross-midnight hours and specific night-shift allowances or rules.
### Factory & Field Teams
Tailored to handle the distinct scheduling requirements of both stationary factory workers and mobile field teams.
### Setup Workflow and Architecture
### Three Steps to Go Live
From defining templates to generating payroll-safe schedules — a clear, predictable pipeline every step of the way.
01
Configure Templates Create shift templates defining start/end times, breaks, and night-shift flags. Use Non-Overlap Checks to ensure validity before saving.
02
Allocate Teams Assign workers to specific teams and link those teams to your shift templates. Setup weekly rotation plans and dated allocations for continuous operations.
03
Generate Schedule Run the payroll-safe schedule generation engine. The system automatically applies rotations, checks for overlaps, and outputs clean schedules for factory and field teams.
Shift Template
Rotation Plan
Non-Overlap Check
Generated Schedule
Watch It in Action
### Full Module Demo
See the complete flow — from creating shift templates and allocating teams to generating payroll-safe schedules for factory and field workers.
### Documentation and Guidance
### Everything You Need to Get Started
From configuring shift templates to generating weekly rotations — complete guides for every step.
- Overview
- Installation
- Rotations
- Schedule Generation
- Dependencies
- FAQ
The Shift Planning module manages shift templates, team allocation, dated allocations, weekly rotations, double shifts, and payroll-safe schedule generation for factory and field teams.
It provides a comprehensive framework to handle complex scheduling requirements, ensuring non-overlapping shifts and proper support for night operations.
This approach ensures:
- Structured shift templates and team management
- Automated weekly rotations and dated allocations
- Support for double shifts and night-shift operations
- Payroll-safe schedule generation with non-overlap checks
### Step 1: Verify Odoo Version
Ensure you are running Odoo 18 Community, as this module is built specifically for this version.
### Step 2: Install the Module
- Copy the module into your custom addons directory.
- Update the Apps List.
- Search for:
- Click Install .
### Step 3: Verify Dependencies
Ensure the broader Workforce Operations suite is installed where applicable to unlock full functionality.
### Defining Shift Templates
Navigate to the Shift Planning configuration menu to create reusable shift templates.
Define precise start and end times, break durations, and specific rules such as night-shift flags. These templates form the foundation of all subsequent allocations and rotations.
Team allocation links your workforce to specific operational requirements.
### Assigning Teams
Assign workers to specific factory or field teams. Once teams are defined, link them directly to your configured shift templates to establish baseline schedules.
Manage continuous operations with flexible rotation plans.
### Weekly Rotations & Dated Allocations
Setup weekly rotation plans to ensure fair distribution of morning, evening, and night shifts across teams. Use dated allocations to handle specific exceptions or temporary schedule changes for exact dates.
Generate clean, conflict-free schedules automatically.
Run the schedule generation engine to apply rotations and allocations. The system performs strict non-overlap checks to prevent scheduling conflicts, ensuring the final output is payroll-safe and ready for execution.
This module is designed to work within the broader Workforce Operations ecosystem.
### Suite Dependencies
Depends on the Workforce Operations suite where applicable. Ensure all prerequisite modules from the suite are installed and active to leverage the full capabilities of the shared configuration hub and app shell.
### Frequently Asked Questions
### Which Odoo version is supported?
This module is built specifically for Odoo 18 Community .
### Does it support night shifts?
Yes, built-in night-shift support correctly handles cross-midnight hours and specific night-shift rules.
### Can it handle double shifts?
Yes, double shifts are fully supported to cover extended operational hours without manual errors.
### Are schedules payroll-safe?
Yes, generation is strictly payroll-safe with automated non-overlap checks to prevent conflicts.
### What license is it under?
It is licensed under LGPL-3 .
About Us
Dynexcel: Your trusted partner for cutting-edge ERP solutions. We specialize in seamless implementation and optimization services, helping businesses streamline operations and drive growth. Transform your business with us today.
Email Support support@dynexcel.com
Copy
WhatsApp wa.me/923000049390
Support Ticket https://www.dynexcel.com/helpdesk/customer-care-1
YouTube Channel youtube.com/@dynexcel
Documentation docs.dynexcel.com/shiftplanning
🌐
Website https://www.dynexcel.com

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.1.0.8**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `dx_workforce_operations`, `hr_contract`, `hr_work_entry_contract`

Install the declared dependencies first, then install `Workforce Operations - Industrial Shift Management` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Workforce Operations - Industrial Shift Management` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Allocations
- Regenerate Schedules
- Rotations
- Shift Allocation Report
- Shift Planning
- Shift Templates
- Teams

## Technical notes and access review

- Static source files: 15 Python, 10 XML, and 1 CSV.
- Detected model names: `dx.shift.allocation`, `dx.shift.rotation`, `dx.shift.rotation.generate.wizard`, `dx.shift.rotation.line`, `dx.shift.schedule.regenerate.wizard`, `dx.shift.setup`, `dx.shift.team`, `dx.shift.template`
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

No image files were supplied under static/description/img in this branch.

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
