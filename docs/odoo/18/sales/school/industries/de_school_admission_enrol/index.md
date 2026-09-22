---
id: index
title: "Openrol - Admission to Enrollment"
sidebar_label: "Openrol - Admission to Enrollment"
---

# Openrol - Admission to Enrollment

## Overview

Technical module: `de_school_admission_enrol`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

No static description page or module README was supplied in this branch.

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **0.1**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `de_school_admission`, `de_school_enrollment`

Install the declared dependencies first, then install `Openrol - Admission to Enrollment` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Openrol - Admission to Enrollment` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- My Enrollments

## Technical notes and access review

- Static source files: 15 Python, 7 XML, and 1 CSV.
- Detected model names: `oe.admission.enrol.student.wizard`, `report.enrol.order`
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
