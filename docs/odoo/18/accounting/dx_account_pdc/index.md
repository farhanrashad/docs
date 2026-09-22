---
id: index
title: "Accounting - Post Dated Cheques"
sidebar_label: "Accounting - Post Dated Cheques"
---

# Accounting - Post Dated Cheques

## Overview

Technical module: `dx_account_pdc`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Post-Dated Cheque Management for Odoo Accounting
### PDC Lifecycle,
### Audit Trails,
### One System
Manage post-dated cheques in Odoo 18 with a complete lifecycle engine. Supports received and issued cheques, deposits, endorsements, clearing, bounces, and an OWL-based PDC Position drill-down report.
Explore Features Get Support
18 Odoo Version
1 Dependencies
10+ Lifecycle States
PDC Instrument - Live RCV-1001 Received On Hand / Active
ACTIVE
Kind Received
Counterparty Customer
Amount $1,000
Maturity 10 Days
Holder Company
Mode Auto
Receive
01
Operation 1
Deposit
02
Operation 2
Collect
03
Operation 3
P Payment
>
I Instrument
O Operation
J Journal Entry
### What is this module?
### Comprehensive PDC Management for Odoo Accounting
This module manages post-dated cheques in Odoo 18, supporting bank and cash journals, received customer cheques, company-issued cheques, and full lifecycle events. It uses two strict audit objects: PDC Instrument and PDC Operation, ensuring no manual creation and a complete audit trail.
### 📝 Strict Audit Objects
PDC Instrument and PDC Operation are generated automatically from payments, preventing manual entries and ensuring absolute audit integrity.
### 🔄 Full Lifecycle Support
Handles receive, deposit, collect, endorse, return, issue, present, clear, bounce, and void operations with corresponding automated journal entries.
### 📊 OWL PDC Position Report
Dedicated live OWL report with drill-down capabilities to track on-hand, in-collection, endorsed, and issued cheques by company currency.
### Key Capabilities
### Everything Built In
### Configurable Payment Methods
PDC Receive, Issue, Deposit, Endorse, and Return methods are added automatically to your bank and cash journals upon installation.
### Amount Synchronization
Cheque-line amount and payment amount remain strictly synchronized. Server-side validation prevents mismatches during posting.
### Three Holding Accounts
Configurable PDC Receivable On Hand, In Collection, and Payable Issued accounts in Accounting Settings for precise financial tracking.
### Automated Journal Entries
Every lifecycle operation automatically generates the correct posted journal entry and updates the instrument state seamlessly.
### OWL Drill-Down Report
Live PDC Position report refreshes totals directly from instruments and opens filtered drill-downs for every bucket and partner.
### Bounce & Void Controls
Strict state-machine controls ensure voiding is only allowed in safe pre-clearance states, with proper automated reversal entries.
### Foreign Currency Support
Instruments keep their original currency while manual clearing/bounce entries and report totals use standard company currency rules.
### Zero-Value Entry Repair
Built-in tool to repair historical zero-value clear/collect entries while retaining the original move for complete audit compliance.
### Odoo 18 Compatibility
Fully designed and tested for Odoo 18, ensuring native compatibility with the latest accounting features and payment methods.
### Setup Workflow and Architecture
### Three Steps to Go Live
From holding account configuration to automated journal entries — a clear, predictable workflow every step of the way.
Configure Holding Accounts Navigate to Accounting > Configuration > Settings . Configure PDC Receivable On Hand, PDC Receivable In Collection, and PDC Payable Issued accounts for the active company.
Create PDC Payment Open the standard Payments list. Select a bank/cash journal and a PDC payment method. Add cheque details in the Post-Dated Cheque section and post the payment.
Manage Lifecycle Use instrument header actions for Present, Clear, Bounce, or Void. Create new standard payments for Deposit, Endorse, or Return operations.
Accounting Settings
Payment Form
PDC Instrument
PDC Operation
Journal Entry
Watch It in Action
### Full Module Demo
See the complete flow — from configuring holding accounts and creating PDC payments to managing lifecycle operations and viewing the OWL PDC Position report.
### Documentation and Guidance
### Everything You Need to Get Started
From installing the module to managing complex cheque lifecycles — complete guides for every step.
- Overview
- Installation
- Account Setup
- Payment Methods
- Lifecycle Operations
- PDC Position Report
- Technical Details
- FAQ
The DX Account PDC module manages post-dated cheques in Odoo 18.
It supports bank and cash journals, received customer cheques, company-issued cheques, and a full range of lifecycle events including deposit, endorsement, clearing, and bounce.
It uses two strict audit objects: PDC Instrument and PDC Operation. Neither can be created manually, ensuring a complete audit trail linked directly to payments and journal entries.
### Step 1: Download the Module
Download the module folder `dx_account_pdc`.
### Step 2: Install the Module
- Place the module into your custom addons directory.
- Update the Apps List.
- Search for:
- Click Install .
### Step 3: Verify Dependencies
Ensure the following Odoo module is installed:
- Invoicing / Accounting (`account`)
### Step 1: Open Accounting Settings
Navigate to:
### Step 2: Configure Holding Accounts
Configure the three required PDC holding accounts for the active company:
Setting
Recommended Type
Purpose
PDC Receivable On Hand
Current Asset
Customer cheque physically held by the company
PDC Receivable In Collection
Cheque deposited with bank but not collected
PDC Payable Issued
Current Liability
Company cheque issued to supplier but not cleared
Do not use the actual bank account for either receivable holding account.
Create PDC transactions from the normal Odoo payment form. Select a bank or cash journal first, then select one of these methods:
Payment Method
Result After Posting
PDC Receive New Cheque
Creates a received instrument in Received On Hand
PDC Issue Own Cheque
Creates an issued instrument in Issued Unpresented
PDC Deposit Existing Cheque
Moves existing instrument to Received In Collection
PDC Endorse Existing Cheque
Moves existing instrument to Received Endorsed
PDC Return Endorsed Cheque
Records a return and reopens the supplier payable
This release supports one cheque per payment. The selected or entered cheque amount must equal the payment amount.
For presentation, collection, clearance, bounce, or void, open the generated instrument and use the available header action.
The module creates an operation record and, where required, a posted journal entry automatically.
### Audit Trail
Open the Operations smart button on the instrument to inspect the full trail and linked move.
`PDC Operations` is an audit log, so its New button is intentionally unavailable. `PDC Instruments` is also generated from payments and is not a manual entry screen.
Open Accounting → Reporting → PDC Position .
This is a dedicated live OWL report. It refreshes lifecycle totals directly from PDC instruments and opens a filtered instrument drill-down for every row.
### Report Buckets
- Received PDC On Hand (Not Due / Due)
- Received PDC In Collection (Uncollected)
- Received PDC Endorsed to Suppliers
- Issued PDC (Not Due / Unpresented / Cleared)
### Drill Down
Click Drill Down on any bucket to open only the matching instruments. Use Odoo filters and grouping by partner, current journal, bank, holder, maturity month, state, or company.
Property
Value
Module Name
dx_account_pdc
Depends On
account
Compatibility
Designed for Odoo 18
Data Models
account.pdc.instrument, account.pdc.operation
### Frequently Asked Questions
### Can I create PDC Instruments manually?
No. They are generated automatically when a PDC payment is posted. This prevents cheques without payments or audit trails.
### What happens if cheque amount differs from payment amount?
The server validates and rejects it. The cheque amount and payment amount must be exactly equal.
### How do I clear an issued cheque?
Open the instrument and click Mark Presented when the supplier presents it. Then click Mark Cleared when actual bank/cash clearance is confirmed.
### Does it support foreign currency?
Yes. Instruments keep their original currency, while manual clearing/bounce entries and report totals use company currency rules.
### How do I fix a zero-value historical entry?
Upgrade to version 18.0.1.2.1, open the instrument, and use the Repair Zero-Value Entry action. This posts a correct replacement move and retains the original for audit.
About Us
Dynexcel: Your trusted partner for cutting-edge ERP solutions. We specialize in seamless implementation and optimization services, helping businesses streamline operations and drive growth. Transform your business with us today.
Email Support support@dynexcel.com
Copy
WhatsApp wa.me/923000049390
Support Ticket https://www.dynexcel.com/helpdesk/customer-care-1
YouTube Channel youtube.com/@dynexcel
Documentation docs.dynexcel.com/dx_account_pdc
🌐
Website https://www.dynexcel.com

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.1.2.4**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `account`, `mail`

Install the declared dependencies first, then install `Accounting - Post Dated Cheques` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Accounting - Post Dated Cheques` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Instruments
- Operations
- PDC Position
- Post Dated Checks

## Technical notes and access review

- Static source files: 14 Python, 8 XML, and 1 CSV.
- Detected model names: `account.pdc.instrument`, `account.pdc.operation`, `account.pdc.position`
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
