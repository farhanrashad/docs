---
id: index
title: "Digital Invoicing"
sidebar_label: "Digital Invoicing"
---

# Digital Invoicing

## Overview

Technical module: `de_digital_invoicing`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

### Digital Invoicing Integration
Seamless Odoo integration with Pakistan FBR Digital Invoicing (IRIS) system for automated invoice reporting.
Secure API IRIS Integration Easy Setup
Dynexcel delivers professional Odoo solutions worldwide.
### Key Features
### IRIS Integration
Automatically submit invoices to FBR IRIS Digital Invoicing system.
### Secure Token Authentication
Token-based secure authentication for sandbox and production environments.
### Master Data Synchronization
Import required master data like HS Codes, UOM, Document Types and SRO schedules.
### Configuration Setup
### settings Environment Configuration
- Sandbox Token URL configuration
- Production Token URL configuration
- API authentication setup
- Environment selection (Sandbox / Production)
Switch easily between sandbox testing and live production environment.
### Master Data Import
### Document Types
Import FBR supported document types for digital invoices.
### UOM & HS Codes
Import Unit of Measures and HS Codes used for product classification.
### SRO & Sandbox Scenarios
Import SRO schedules and sandbox testing scenarios used for submissions.
### Product Configuration
### Product Setup
- Select HS Code for product classification
- Assign appropriate Unit of Measure
- Configure applicable FBR tax code
- Ensure compliance with digital invoicing requirements
### Invoice Submission Workflow
### Invoice Creation
Generate invoice inside Odoo Accounting.
### Submission to IRIS
Invoice data automatically sent to IRIS digital invoicing API.
### Journal Entry Posted
Production journal entry generated and synced with IRIS database.
### Watch Demo
### Digital Invoicing Demo
### Help & FAQ
Does this module support sandbox testing? Yes, sandbox environment can be configured for testing before production.
Can master data be imported automatically? Yes, document types, HS codes, UOM and SRO schedules can be imported.
How are invoices submitted? Invoices are submitted automatically when posted in Odoo.
Is IRIS integration secure? Yes, API token authentication ensures secure communication.
### Support & Odoo Services
### Odoo Services
Implementation End-to-end Odoo setup for your business.
Custom Development Tailored Odoo modules & features.
Hosting & Support Managed servers & long-term support.
### Support
+923000049390
info@dynexcel.com
90 Days Free Support Included
© Dynexcel - All Rights Reserved

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **1.14**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `account`, `product`

Install the declared dependencies first, then install `Digital Invoicing` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Digital Invoicing` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Applicable Scenarios
- Digital Invoicing
- Document Type
- HS Code
- Log
- SRO / Schedules
- SRO Item
- Sale Type
- Scenarios
- Tax Rates
- Transaction Code
- Transaction Type
- UOM

## Technical notes and access review

- Static source files: 27 Python, 33 XML, and 2 CSV.
- Detected model names: `complete_name`, `display_name`, `fbr.api.log`, `fbr.applicable.scenario`, `fbr.document.type`, `fbr.product.hscode`, `fbr.product.trans.code`, `fbr.product.uom`, `fbr.sale.type`, `fbr.scenario`, `fbr.sro.item`, `fbr.sro.schedule`, `fbr.tax.rate`, `fbr.test.scenario.wizard`, `fbr.trans.type.code`, `name`
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

### Dynexcel Logo

![Dynexcel Logo](pathname:///odoo/18/de_digital_invoicing/screenshots/dynexcel-logo.png)

_Dynexcel Logo from the module static description assets._

### Dynexcel Icon

![Dynexcel Icon](pathname:///odoo/18/de_digital_invoicing/screenshots/dynexcel-icon.png)

_Dynexcel Icon from the module static description assets._

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
