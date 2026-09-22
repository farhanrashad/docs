---
id: index
title: "Stock Report"
sidebar_label: "Stock Report"
---

# Stock Report

## Overview

Technical module: `de_stock_report`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

### Stock Report Module - User Guide
This module allows users to generate comprehensive stock reports including Opening Stock, Incoming Stock, Outgoing Stock, and Closing Stock based on warehouse and date filters.
### 📌 Report Menu Location
Navigate to the Inventory Reporting menu where the Stock Report wizard is located. From here users can generate PDF or Excel reports.
### ⚙ Report Parameter Wizard
### Filter Configuration
- Select Date From and Date To
- Choose Company
- Select Warehouse (Optional)
- Generate Report in PDF or Excel format
### 📊 Excel Report Output
### Excel Export Feature
The Excel report provides detailed stock summary information including product details, unit of measurement, cost, and movement quantities.
- Product Information
- Unit of Measurement
- Opening Stock
- Incoming Stock
- Outgoing Stock
- Closing Stock Calculation
### 📄 PDF Report Output
### PDF Report Preview
Users can generate printable PDF reports for management analysis and record keeping. Closing stock is automatically calculated using movement transactions.
### 📞 Contact Information
WhatsApp: +92 300 0049390
Email: info@dynexcel.com

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **0.5**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `stock`, `base`

Install the declared dependencies first, then install `Stock Report` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Stock Report` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- List
- Menu 1
- Menu 2
- Server to list
- Stock Report
- de_stock_valuation_report

## Technical notes and access review

- Static source files: 8 Python, 6 XML, and 1 CSV.
- Detected model names: `de_stock_valuation_report.de_stock_valuation_report`, `stock.report.wizard`
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

### Header

![Header](pathname:///odoo/18/de_stock_report/screenshots/header.png)

_Header from the module static description assets._

### 1

![1](pathname:///odoo/18/de_stock_report/screenshots/1.png)

_1 from the module static description assets._

### 2

![2](pathname:///odoo/18/de_stock_report/screenshots/2.png)

_2 from the module static description assets._

### 3

![3](pathname:///odoo/18/de_stock_report/screenshots/3.png)

_3 from the module static description assets._

### 4

![4](pathname:///odoo/18/de_stock_report/screenshots/4.png)

_4 from the module static description assets._

### Footer

![Footer](pathname:///odoo/18/de_stock_report/screenshots/footer.png)

_Footer from the module static description assets._

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
