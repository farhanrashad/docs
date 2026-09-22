---
id: index
title: "Bank Check Printing Designer"
sidebar_label: "Bank Check Printing Designer"
---

# Bank Check Printing Designer

## Overview

Technical module: `de_check_printing`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Advanced Cheque Printing for Odoo
### Bank-Specific,
### Visual Layouts,
### Zero Margins
Extend Odoo's native check printing with a visual designer for pre-printed or blank cheque stock. Configure millimetre-perfect positioning, dynamic paper sizes, and audit-ready snapshots — without modifying core code.
Explore Features Read Manual
Odoo 18 Community Edition
OWL Visual Designer
QWeb Dynamic Reports
Cheque Layout HBL Vendor Cheque 210mm x 90mm / Landscape
ACTIVE
Mode Pre-Printed
Date Format DD/MM/YYYY
Words Lang English
Payee Name
X: 45mm
Visible
Amount
X: 120mm
Date (Box Mode)
X: 150mm
1-Digit/Box
J Journal
>
L Layout
P Payment
PDF Report
### What is this module?
### Visual Cheque Layouts for Odoo Accounting
This module extends Odoo's native account_check_printing workflow by separating cheque data from positioning. Users configure reusable layouts per bank journal, position fields visually using an OWL drag-and-drop designer, and print payments using dynamic paper sizes tailored to each bank's cheque stock.
### 🎨 Visual Designer
Drag, drop, resize, and align fields on a cheque canvas with 1mm snapping. Preview sample values and test print before production use.
### 📏 Dynamic Paper Sizes
Define exact cheque dimensions in millimetres. The module creates custom Odoo paperformats automatically, ensuring zero-margin PDF output that matches physical stock.
### 🔒 Audit & Reprint Control
Every print captures a layout snapshot, timestamp, user, and print count. Reprinting requires explicit authorization via the 'Unmark Sent' action restricted to a security group.
### Key Capabilities
### Everything Built In
### Pre-Printed & Blank Stock
Supports both pre-printed cheque stock (field-only overlay) and full-background printing on blank paper. Toggle mode per layout.
### Date Box Mode
Special handling for banks with pre-printed date boxes. Places one digit per box with no separators, or uses normal text format for standard cheques.
### Amount in Words Locale
Select the language/locale for amount-in-words conversion. Supports multiple currencies and their specific unit/subunit labels configured in Odoo.
### Company Isolation
Layouts are isolated by company. Each bank journal can only select layouts belonging to its own company, preventing cross-company misconfiguration.
### Safe Field Palette
Fixed set of controlled fields including payee, amount, date, memo, references, and static text. No arbitrary Python expressions or unsafe field paths.
### Single & Batch Print
Print individual vendor payments or batch print multiple payments from the same bank journal. Mixed journals are rejected to ensure consistent layout usage.
### Layout Snapshot
Each printed payment stores a snapshot of the layout configuration at print time, ensuring auditability even if the layout is later modified.
### Reprint Protection
After printing, payments are marked as sent. Only users in the 'Authorized Check Reprint' group can unmark sent status for controlled reprinting.
### Setup Workflow and Architecture
### From Layout to Printed Cheque
A clear, step-by-step process from configuring bank-specific layouts to printing vendor payments with audit trails.
01
Create Cheque Layout Go to Accounting → Configuration → Cheque Layouts . Enter paper dimensions, upload background scan, and configure date/amount formats.
02
Design Layout Use the OWL visual designer to drag, drop, resize, and align fields. Test print to verify positioning on plain paper.
03
Assign to Journal Open the bank journal, enable outgoing Check payment method, and select the created layout. Save the journal.
04
Print Payment Create or open a vendor payment using the configured journal. Click Print Check to generate the PDF and mark the payment as sent.
Cheque Layout
Bank Journal
Vendor Payment
Print Check Action
Snapshot & Audit
Cheque PDF
Watch It in Action
### Full Module Demo
See the complete flow — from creating a cheque layout, designing fields visually, assigning to a bank journal, and printing vendor payments with audit snapshots.
### Documentation and Guidance
### Everything You Need to Get Started
From installing prerequisites to configuring layouts, designing fields, and troubleshooting common issues — complete guides for every step.
- Overview
- Installation
- Create Layout
- Visual Designer
- Journal Setup
- Print Cheque
- Reprint Control
- Troubleshooting
The Check Printing module is a standalone Odoo 18 Community addon for printing outgoing/vendor cheques on bank-specific cheque stock. It extends Odoo's native account_check_printing workflow and does not modify Odoo core.
The addon separates cheque data from cheque positioning. Users configure a reusable layout per bank journal, position approved fields visually, and print the payment using a dynamic cheque paper size.
Key capabilities include:
- OWL drag/drop layout designer with resize, zoom, 1mm snapping, and alignment controls
- Dynamic QWeb PDF report with zero margins and no external header/footer
- Pre-printed cheque stock or full-background printing on blank paper
- Date format selection including one-digit-per-box mode for pre-printed date boxes
- Amount-in-words language/locale selection
- Layout snapshot, print timestamp, printing user, and print count audit fields
- Authorized reprint control through 'Unmark Sent' security group
### Prerequisites
Before installing this module, ensure the following are in place:
- Odoo Accounting module installed
- Odoo's native account_check_printing module installed
- Bank journal configured for outgoing Check payments
- User has Accounting access (Check Layout Manager group required for layout creation/editing)
### Step 1: Install the Module
- Add the addon directory to the Odoo addons path.
- Update the Apps List.
- Search for:
- Click Install .
### Step 2: Verify Installation
After installation, verify that:
- Module installed successfully with no errors
- Cheque Layouts menu appears under Accounting → Configuration
- Security groups are available: Check Layout Manager, Authorized Check Reprint
Validated in Odoo 18 Community environment with focused tests passing (0 failed, 0 errors).
### Create a Bank Cheque Layout
Navigate to:
Fill in the following fields:
Field
Description
Layout Name
Unique name within the company, e.g., "HBL Vendor Cheque"
Company
Select the company that owns the layout
Cheque Background
Upload a cheque scan for positioning and preview
Print Background
Disable for pre-printed stock; enable for full-background printing on blank paper
Paper Width / Height
Physical cheque size in millimetres. Suggested from image DPI or aspect ratio if background uploaded.
Orientation
Portrait or Landscape
Date Format
Bank-required date format (e.g., DD/MM/YYYY)
Date Display
Normal date text or One digit per box for pre-printed date boxes
Amount Display
Amount without currency (default) or Amount with currency
Amount-in-Words Language
Locale used for amount words conversion
Save the form after entering paper details. The module will automatically create a custom report.paperformat based on the dimensions.
### Use the Layout Designer
The designer appears under Visual Layout Designer after saving the layout.
### Add Fields
Click a field in the left Fields list to add it to the canvas, or drag the field from the list onto the cheque canvas. The canvas shows sample values such as sample payee, amount, date, and cheque number.
### Move and Resize
Drag a field to move it. Drag the small bottom-right handle to resize it. All movements and resizes snap to a 1mm grid. Use the − and + buttons to zoom the canvas for detailed positioning.
### Edit a Selected Field
Select a field and use the right inspector to change:
- Label and static text
- X and Y position in millimetres
- Width and height
- Font family and size
- Line height multiplier (e.g., 1.25 or 1.3 for wrapped lines)
- Text alignment (left/center/right, top/middle/bottom)
- Text wrapping and visibility
### Date Boxes
When Date Display is set to One digit per box, select the Date field and position/resize it over the complete row of pre-printed boxes. The report removes separators and places one date digit in each equal-width slot.
### Save and Test
Click the normal Odoo Save button. Then click Test Print in the layout header to review a sample PDF on plain paper. For pre-printed stock, place the physical cheque over the field-only test output before production use.
### Assign Layout to Bank Journal
Perform the following steps:
- Confirm the journal type is Bank.
- Enable/select the outgoing native Check payment method.
- Select the required value in Check Printing Layout field.
- Save the journal.
Note: The layout field is visible only when outgoing check printing is active. The selected layout must belong to the same company as the journal.
### Print a Vendor Cheque
Create a vendor payment or open an existing one:
- Select the configured bank journal.
- Select the native outgoing Check payment method.
- Enter vendor, amount, date, memo, and payment reference.
- Click Print Check.
Odoo's native check flow posts a draft payment when necessary, assigns/uses the cheque number, and calls the configured cheque report. The addon then uses the journal layout, captures its snapshot, marks the payment as sent, and opens the cheque PDF.
### Batch Printing
For batch printing:
- Select payments that use the same bank journal.
- Confirm all payments use the outgoing check method.
- Print the batch through Odoo's native check-printing action.
Payments from different journals are rejected because they may require different cheque layouts and paper stock. Print separate batches for separate banks.
After a successful print, the payment is marked Sent and the normal user cannot print it again. If a reprint is genuinely required:
- Obtain the organization's authorization.
- Ask an administrator to assign the user the Authorized Check Reprint group.

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.1.0.12**
- Installable: **Yes**
- Application module: **Yes**
- Dependencies: `account_check_printing`

Install the declared dependencies first, then install `Bank Check Printing Designer` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Bank Check Printing Designer` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Cheque Layouts

## Technical notes and access review

- Static source files: 10 Python, 8 XML, and 1 CSV.
- Detected model names: `de.check.layout`, `de.check.layout.field`, `report.de_check_printing.report_check_layout_preview`, `report.de_check_printing.report_check_payment`
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
