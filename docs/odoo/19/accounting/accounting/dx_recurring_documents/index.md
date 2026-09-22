---
id: index
title: "Recurring Invoices & Bills"
sidebar_label: "Recurring Invoices & Bills"
---

# Recurring Invoices & Bills

## Overview

Technical module: `dx_recurring_documents`

This Odoo 19 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

### Recurring Documents
Automate recurring customer invoices, vendor bills, credit notes, and refunds with flexible scheduling and generation history.
### See it in Action
Video Reference: https://youtu.be/_rqjNGNNy2k
### Key Capabilities
Everything you need to automate your recurring accounting documents efficiently and securely.
### Reusable Templates
Define reusable recurring document templates with configurable partners, journals, currencies, payment terms, fiscal positions, products, accounts, taxes, and analytic distributions.
### Flexible Recurrence
Support for daily, weekly, monthly, and yearly recurrence with flexible interval and anchor-day configuration, plus end date and maximum occurrence limits.
### Automated & Manual
Scheduled hourly generation through cron, or use the manual "Generate Now" functionality. Choose between draft or automatic posting generation modes.
### History & Tracking
Complete generation history and cycle tracking with duplicate-cycle protection. Includes failed generation tracking and manager-controlled retry.
### Full Traceability
Template-to-accounting-document traceability with generated, draft, posted, cancelled, and failed counters for complete visibility.
### Enterprise-Ready
Multi-company support with company-aware journals, accounts, taxes, and configuration. Includes user/manager security groups, chatter integration, and responsible-user assignment.
### Comprehensive Accounting Automation
Recurring Documents is an Odoo 19 accounting addon designed for automating the creation of recurring customer invoices, vendor bills, customer credit notes, and vendor refunds.
The addon is specifically designed for Odoo 19 Community and does not require any Odoo Enterprise dependency, making it a cost-effective and powerful solution for your accounting automation needs. It includes dedicated accounting menu, search filters, history, and failure-management views.
### Documentation & Support
For detailed setup instructions, configuration guides, and support, please visit our official documentation.
docs.dynexcel.com/dx_recurring_documents
© 2026 DynExcel. All rights reserved.

## Dependencies and prerequisites

- Odoo version: **19**
- Module version: **19.0.1.0.0**
- Installable: **Yes**
- Application module: **Yes**
- Dependencies: `account`, `mail`

Install the declared dependencies first, then install `Recurring Invoices & Bills` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Recurring Invoices & Bills` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Generation History
- Recurring Documents
- Recurring Templates

## Technical notes and access review

- Static source files: 9 Python, 7 XML, and 1 CSV.
- Detected model names: `dx.recurring.document.generation`, `dx.recurring.document.template`, `dx.recurring.document.template.line`, `name`
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
