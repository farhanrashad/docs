---
id: index
title: "Stock Gatepass Management"
sidebar_label: "Stock Gatepass Management"
---

# Stock Gatepass Management

## Overview

Technical module: `de_stock_gatepass`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

### Smart Stock GatePass System
Manage warehouse entry & exit with full tracking, approval, and audit control inside Odoo.
Logistics Ready Secure Fast Workflow
Dynexcel | Professional Odoo Inventory Solutions
### Key Features
### Create GatePass
Generate inbound/outbound gate passes easily.
### Stock Integration
Directly linked with Odoo stock pickings.
### Approval Flow
Confirm, validate and track each movement.
### Workflow
### 1. Create
Select partner & picking type
### 2. Add Products
System fetches stock moves
### 3. Validate
Manager approval required
### 4. Print
Generate GatePass PDF
### Screenshots
### GatePass Form
Create and manage gate passes easily
### Print Report
Professional printable GatePass report
### Live Demo
### GatePass Demo
Watch how warehouse movement is controlled in real time.
### FAQ
### Support
### Services
Odoo customization, deployment, and integration support.
### Contact
📧 info@dynexcel.com
📱 WhatsApp Support Available
Dynexcel | Odoo Development Experts
© All Rights Reserved

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **2.5**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `stock`

Install the declared dependencies first, then install `Stock Gatepass Management` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Stock Gatepass Management` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Gatepass

## Technical notes and access review

- Static source files: 9 Python, 7 XML, and 1 CSV.
- Detected model names: `report.de_stock_gatepass.stock_gatepass_report`, `report.de_stock_gatepass.stock_gatepass_report_customer`, `report.de_stock_gatepass.stock_gatepass_report_gate`, `stock.gatepass`, `stock.gatepass.line`
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

### Dynexcel Logo

![Dynexcel Logo](pathname:///odoo/18/de_stock_gatepass/screenshots/dynexcel-logo.png)

_Dynexcel Logo from the module static description assets._

### 1

![1](pathname:///odoo/18/de_stock_gatepass/screenshots/1.png)

_1 from the module static description assets._

### 2

![2](pathname:///odoo/18/de_stock_gatepass/screenshots/2.png)

_2 from the module static description assets._

### Dynexcel Icon

![Dynexcel Icon](pathname:///odoo/18/de_stock_gatepass/screenshots/dynexcel-icon.png)

_Dynexcel Icon from the module static description assets._

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
