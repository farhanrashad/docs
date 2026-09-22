---
id: index
title: "Bank Transfer"
sidebar_label: "Bank Transfer"
---

# Bank Transfer

## Overview

Technical module: `de_bank_transfer`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

### Account Bank Transfer - User Guide
Welcome to the user guide for the Account Bank Transfer module. This guide will help you understand how to use the module efficiently.
### 1. Overview
Account Bank Transfer module enables transferring amounts between different bank journals while maintaining a record of transactions.
### 2. Features
- Transfer funds between banks
- Automatic payment creation
- Multi-currency support
- Secure access control
### 3. How to Use
### Step 1: Navigate to the Module
Go to the Accounting module and find the Bank Transfers menu.
### Step 2: Create a New Transfer
Click on the 'Create' button and enter the required details like amount, journals, and memo.
### Step 3: Confirm the Transfer
Click on 'Post' to finalize the transfer. This will generate payments automatically.
### Need assistance with our module?
Create a support ticket when you need personalized assistance with module-related issues for a tailored and efficient solution.
### If you need any assistance or have questions, please feel free to reach out to us.

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **0.1**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `base`, `account_payment`

Install the declared dependencies first, then install `Bank Transfer` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Bank Transfer` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Bank Transfer

## Technical notes and access review

- Static source files: 6 Python, 4 XML, and 1 CSV.
- Detected model names: `account.bank.transfer`
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

### Header

![Header](pathname:///odoo/18/de_bank_transfer/screenshots/header.png)

_Header from the module static description assets._

### 1

![1](pathname:///odoo/18/de_bank_transfer/screenshots/1.png)

_1 from the module static description assets._

### 2

![2](pathname:///odoo/18/de_bank_transfer/screenshots/2.png)

_2 from the module static description assets._

### 3

![3](pathname:///odoo/18/de_bank_transfer/screenshots/3.png)

_3 from the module static description assets._

### 4

![4](pathname:///odoo/18/de_bank_transfer/screenshots/4.png)

_4 from the module static description assets._

### Footer

![Footer](pathname:///odoo/18/de_bank_transfer/screenshots/footer.png)

_Footer from the module static description assets._

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
