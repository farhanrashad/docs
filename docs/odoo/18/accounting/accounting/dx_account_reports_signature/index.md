---
id: index
title: "Journal Report Signatures"
sidebar_label: "Journal Report Signatures"
---

# Journal Report Signatures

## Overview

Technical module: `dx_account_reports_signature`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Journal Report Signatures for Odoo Accounting
### Dynamic Signatures,
### Journal Reports,
### One System
Add dynamic signature boxes to accounting reports and journal entries. Configure specific signature lines for each Accounting Journal, ensuring every printed document includes the appropriate signature placeholders at the bottom.
Explore Features Get Support
18 Odoo Version
1 Dependencies
Dynamic Signature Boxes
Journal Configuration - Live Customer Invoices Journal Signature Lines Tab / Active
CONFIGURED
Labels 3 Boxes
Layout Dynamic
Status OK
Sequence 01-03
Grid Bootstrap
Mode Auto
Prepared By
01
Signature Line 1
Verified By
02
Signature Line 2
Approved By
03
Signature Line 3
J Journal
>
S Signatures
L Layout
P PDF Report
### What is this module?
### Dynamic Signature Boxes for Odoo Accounting
This module enhances Odoo's accounting reports by adding configurable signature lines to journal entries, invoices, and bills. Signature placeholders are automatically appended to standard account.move reports, ensuring proper document authorization workflows.
### 📝 Journal-Specific Configuration
Define custom signature labels uniquely for each Journal (e.g., Customer Invoices, Vendor Bills, Miscellaneous Operations) to match your approval workflows.
### 📐 Dynamic Formatting
Automatically sizes and arranges signature boxes in a horizontal row using Bootstrap grids based on the number of signatures configured.
### 📄 Universal Application
Signature lines automatically append to all standard account.move reports (Invoices, Vendor Bills) and the new Journal Entry report.
### Key Capabilities
### Everything Built In
### Custom Signature Labels
Define custom signature labels uniquely for each Accounting Journal to match your specific approval workflows.
### Dynamic Bootstrap Grids
Column widths automatically adapt based on the number of signatures configured, utilizing Bootstrap grids for perfect alignment.
### Journal Entry PDF Report
Introduces a dedicated "Print Journal Entry" PDF report specifically designed for Odoo 18.
### Universal account.move Support
Signature lines automatically append to all standard account.move reports, including Invoices and Vendor Bills.
### Sequence Control
Specify the exact sequence of your signature lines to control the display order on printed documents.
### Invoices & Vendor Bills
Seamlessly integrates with customer invoices and vendor bills without requiring custom template modifications.
### Configurable via Journal Form
Easily manage signature lines directly from the Journal configuration form under the dedicated Signature Lines tab.
### Odoo 18 Compatibility
Fully designed and tested for Odoo 18, ensuring native compatibility with the latest accounting features.
### Seamless Printing Integration
Simply click the Print action menu on any record to generate PDFs with dynamically generated signature boxes at the bottom.
### Setup Workflow and Architecture
### Two Steps to Go Live
From journal configuration to printed PDF reports — a clear, predictable workflow every step of the way.
Configure Journal Navigate to Invoicing/Accounting > Configuration > Journals . Open any journal and go to the Signature Lines tab. Add your desired labels and specify their sequence.
Print Reports Go to Customers > Invoices or Accounting > Journal Entries. Open a specific record, click the Print action menu, and view the dynamically generated signature boxes at the bottom of the PDF.
Journal Form
Signature Lines Tab
Configure Labels & Sequence
Print Action
PDF Report with Signatures
Watch It in Action
### Full Module Demo
See the complete flow — from configuring journal signature lines to printing invoices and journal entries with dynamic signature placeholders.
### Documentation and Guidance
### Everything You Need to Get Started
From installing the module to configuring journal signature lines — complete guides for every step.
- Overview
- Installation
- Journal Configuration
- Printing Reports
- Technical Details
- FAQ
The Journal Report Signatures module adds dynamic signature boxes to accounting reports and journal entries.
It allows users to configure specific signature lines (e.g., "Prepared By", "Checked By", "Approved By") for each Accounting Journal.
This ensures that every printed invoice, bill, or journal entry report includes the appropriate signature placeholders at the bottom.
### Step 1: Download the Module
Download the module folder `dx_account_reports_signature`.
### Step 2: Install the Module
- Place the module into your custom addons directory.
- Update the Apps List.
- Search for:
- Click Install .
### Step 3: Verify Dependencies
Ensure the following Odoo module is installed:
- Invoicing / Accounting (`account`)
### Step 1: Open Journals
Navigate to:
### Step 2: Configure Signature Lines
Open any journal you want to configure and go to the Signature Lines tab.
Action
Description
Add Labels
Add your desired labels (e.g., "Prepared by", "Verified by", "Authorized by")
Specify Sequence
Set the sequence to control the display order of the signature boxes
Once configured, signature lines will automatically appear on printed documents.
### Step 1: Open a Record
### Step 2: Print the Report
Open a specific record and click the Print action menu. Select the respective report (e.g., Invoices or the newly added Journal Entry).
### Step 3: View Signatures
Scroll to the bottom of the printed PDF to view the dynamically generated signature boxes.
Property
Value
Module Name
dx_account_reports_signature
Depends On
account
Compatibility
Designed for Odoo 18
Universal Application
Automatically appends to all standard account.move reports
### Frequently Asked Questions
### Which reports are supported?
The module supports Invoices, Vendor Bills, and the new Journal Entry report.
### How are signature boxes sized?
They are dynamically sized using Bootstrap grids based on the number of signatures configured for the journal.
### Can I configure different signatures for different journals?
Yes, configuration is journal-specific. You can define unique signature labels for Customer Invoices, Vendor Bills, and Miscellaneous Operations.
### Does it work with Odoo 18?
Yes, the module is specifically designed and tested for Odoo 18.
### Do I need to modify existing report templates?
No, the signature lines automatically append to all standard `account.move` reports without requiring custom template modifications.
About Us
Dynexcel: Your trusted partner for cutting-edge ERP solutions. We specialize in seamless implementation and optimization services, helping businesses streamline operations and drive growth. Transform your business with us today.
Email Support support@dynexcel.com
Copy
WhatsApp wa.me/923000049390
Support Ticket https://www.dynexcel.com/helpdesk/customer-care-1
YouTube Channel youtube.com/@dynexcel
Documentation docs.dynexcel.com/dx_account_reports_signature
🌐
Website https://www.dynexcel.com

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.1.0.0**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `account`

Install the declared dependencies first, then install `Journal Report Signatures` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Journal Report Signatures` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

No explicit menu labels were detected by the static scan; inspect the module XML views and actions in the installed database.

## Technical notes and access review

- Static source files: 5 Python, 3 XML, and 1 CSV.
- Detected model names: `account.journal`, `account.journal.signature.line`, `journal_id`
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
