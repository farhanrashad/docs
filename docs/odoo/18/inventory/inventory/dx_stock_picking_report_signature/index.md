---
id: index
title: "Dynamic Picking Report Signatures"
sidebar_label: "Dynamic Picking Report Signatures"
---

# Dynamic Picking Report Signatures

## Overview

Technical module: `dx_stock_picking_report_signature`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Dynamic Stock Picking Report Signatures for Odoo Inventory
### Dynamic Signatures,
### Picking Reports,
### One System
Add dynamic signature boxes to stock picking reports based on Operation Types. Configure specific signature lines for each Picking Type, ensuring every printed delivery, receipt, or transfer includes the appropriate signature placeholders at the bottom.
Explore Features Get Support
18 Odoo Version
1 Dependencies
Dynamic Signature Boxes
Operation Type - Live Delivery Orders Signature Lines Tab / Active
CONFIGURED
Labels 3 Boxes
Layout Dynamic
Status OK
Sequence 01-03
Grid Bootstrap
Mode Auto
Created By
01
Signature Line 1
Reviewed By
02
Signature Line 2
Approved By
03
Signature Line 3
O Operation Type
>
S Signatures
L Layout
P PDF Report
### What is this module?
### Dynamic Signature Boxes for Odoo Inventory
This module enhances Odoo's stock picking reports by adding configurable signature lines based on Operation Types. Signature placeholders are automatically appended to the Picking Operations report, ensuring proper document authorization workflows for deliveries, receipts, and internal transfers.
### 📋 Operation Type Configuration
Define custom signature labels uniquely for each Operation Type (e.g., Delivery Orders, Receipts, Internal Transfers) to match your warehouse workflows.
### 📐 Dynamic Formatting
Automatically sizes and arranges signature boxes in a horizontal row using Bootstrap grids based on the number of signatures configured.
### ✨ Zero Empty Spaces
If no signatures are configured for a particular Operation Type, no extra whitespace is added to the printed report.
### Key Capabilities
### Everything Built In
### Configurable Signatures
Define any number of signature labels (e.g., "Created By", "Reviewed By", "Approved By") directly on the Operation Type configuration.
### Dynamic Rendering
The picking report automatically adjusts the layout and column widths of the signature boxes based on how many are configured.
### No Empty Spaces
### Drag & Drop Ordering
Easily drag and drop signature labels within the configuration tab to change the exact order they will appear on the report.
### Universal Picking Types
Works seamlessly across all standard stock picking types, including Delivery Orders, Receipts, and Internal Transfers.
### Picking Operations Report
Seamlessly integrates with the standard Picking Operations report without requiring custom template modifications.
### Configurable via Picking Type
Easily manage signature lines directly from the Inventory Configuration under the dedicated Signature Lines tab on Operation Types.
### Odoo 18 Compatibility
Fully designed and tested for Odoo 18, ensuring native compatibility with the latest inventory and warehouse features.
### Seamless Printing Integration
Simply click the Print action menu on any stock transfer to generate PDFs with dynamically generated signature boxes at the bottom.
### Setup Workflow and Architecture
### Two Steps to Go Live
From operation type configuration to printed PDF reports — a clear, predictable workflow every step of the way.
Configure Operation Type Navigate to Inventory > Configuration > Operation Types . Open any operation type and go to the Signature Lines tab. Add your desired labels and drag to reorder.
Print Reports Go to Inventory > Operations > Transfers. Open a specific picking, click the Print action menu, select Picking Operations, and view the dynamically generated signature boxes at the bottom of the PDF.
Operation Type Form
Signature Lines Tab
Configure Labels & Order
Print Action
PDF Report with Signatures
Watch It in Action
### Full Module Demo
See the complete flow — from configuring operation type signature lines to printing picking operations with dynamic signature placeholders.
### Documentation and Guidance
### Everything You Need to Get Started
From installing the module to configuring operation type signature lines — complete guides for every step.
- Overview
- Installation
- Operation Type Setup
- Printing Reports
- Technical Details
- FAQ
The Dynamic Stock Picking Report Signatures module adds dynamic signature boxes to stock picking reports based on Operation Types.
It allows users to configure specific signature lines (e.g., "Created By", "Reviewed By", "Approved By") for each Operation Type (Picking Type).
This ensures that every printed delivery order, receipt, or internal transfer includes the appropriate signature placeholders at the bottom, with zero empty spaces if unconfigured.
### Step 1: Download the Module
Download the module folder `dx_stock_picking_signatures`.
### Step 2: Install the Module
- Place the module into your custom addons directory.
- Update the Apps List.
- Search for:
- Click Install .
### Step 3: Verify Dependencies
Ensure the following Odoo module is installed:
- Inventory (`stock`)
### Step 1: Open Operation Types
Navigate to:
### Step 2: Configure Signature Lines
Open any operation type you want to configure (e.g., Delivery Orders) and go to the Signature Lines tab.
Action
Description
Add Labels
Add your desired labels (e.g., "Created By", "Reviewed By", "Approved By")
Drag & Drop
Drag and drop the lines to change the order they will appear on the report
Once configured, signature lines will automatically appear on printed documents.
### Step 1: Open a Transfer
### Step 2: Print the Report
Open a specific stock picking and click the Print action menu. Select "Picking Operations".
### Step 3: View Signatures
Scroll to the bottom of the printed PDF to view the dynamically generated signature boxes.
Property
Value
Module Name
dx_stock_picking_signatures
Depends On
stock
Compatibility
Designed for Odoo 18
Universal Application
Automatically appends to standard report_picking
### Frequently Asked Questions
### Which reports are supported?
The module supports the standard Picking Operations report (`report_picking`).
### How are signature boxes sized?
They are dynamically sized using Bootstrap grids based on the number of signatures configured for the operation type.
### Can I configure different signatures for different operation types?
Yes, configuration is specific to each Operation Type. You can define unique signature labels for Delivery Orders, Receipts, and Internal Transfers.
### Does it add empty spaces if no signatures are configured?
No. If no signatures are configured for a particular Operation Type, no extra whitespace is added to the printed report.
### Do I need to modify existing report templates?
No, the signature lines automatically append to the standard picking report without requiring custom template modifications.
About Us
Dynexcel: Your trusted partner for cutting-edge ERP solutions. We specialize in seamless implementation and optimization services, helping businesses streamline operations and drive growth. Transform your business with us today.
Email Support support@dynexcel.com
Copy
WhatsApp wa.me/923000049390
Support Ticket https://www.dynexcel.com/helpdesk/customer-care-1
YouTube Channel youtube.com/@dynexcel
Documentation docs.dynexcel.com/dynamicstockpickingreportsignatures
🌐
Website https://www.dynexcel.com

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.1.0.1**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `stock`

Install the declared dependencies first, then install `Dynamic Picking Report Signatures` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Dynamic Picking Report Signatures` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

No explicit menu labels were detected by the static scan; inspect the module XML views and actions in the installed database.

## Technical notes and access review

- Static source files: 5 Python, 2 XML, and 1 CSV.
- Detected model names: `picking.type.signature.line`
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
