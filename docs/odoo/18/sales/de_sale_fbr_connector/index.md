---
id: index
title: "Sales FBR Connector"
sidebar_label: "Sales FBR Connector"
---

# Sales FBR Connector

## Overview

Technical module: `de_sale_fbr_connector`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Sales FBR Integration for Odoo 18
### Automated Reporting,
### FBR E-Invoicing,
### Seamless Compliance
Integrate Odoo 18 Sales and Accounting with Pakistan's FBR e-invoicing system. Automatic fee handling, PCT code tracking, retry logic, and complete audit trails — out of the box.
Explore Features Get Support
18.0 Odoo Version
2 Dependencies
OPL-1 License
FBR Status - Live Sales Invoice INV/2024/001 Production Environment / Active
SUBMITTED
API Token Valid
PCT Codes Mapped
Submission OK
Last Sync Just Now
Retry Auto
Fee Line Added
INV/2024/001
10:15
Success
INV/2024/002
10:22
INV/2024/003
10:45
Retrying
S Sale Order
>
I Invoice
V Validate
F FBR API
### What is this module?
### FBR E-Invoicing for Odoo Sales
This module integrates Odoo 18 Sales and Accounting with Pakistan's Federal Board of Revenue (FBR) system. It automates invoice reporting from Sale Orders, handles FBR fees automatically, tracks PCT codes, and provides robust retry mechanisms with full audit trails.
### 🧾 Automated Submission
Invoices are submitted to FBR automatically upon confirmation or via manual resend actions, ensuring timely compliance without extra steps.
### ⚙️ Automatic Fee Handling
FBR fee lines are inserted automatically into invoices based on configuration, eliminating manual calculation errors and saving time.
### 🔄 Retry & Audit Logging
Failed submissions trigger automatic retries via cron. Complete audit trails track payloads, responses, and status history for every transaction.
### Key Capabilities
### Everything Built In
### FBR Fee Management
Automatically add FBR fee product lines to invoices based on configurable rules and amounts.
### PCT Code Tracking
Map Pakistan Customs Tariff (PCT) codes directly to products for accurate tax classification in FBR payloads.
### Smart Retry Logic
Failed API submissions are queued and retried automatically via scheduled actions or manually by managers.
### Complete Audit Trail
Every submission attempt is logged with payload details, FBR responses, timestamps, and user information.
### Manager-Safe Access
Restrict sensitive FBR configuration and detailed response logs to administrators while keeping sales users focused.
### Manual Resend Actions
Trigger manual resubmission directly from invoice forms or list views when immediate action is required.
### Flexible Configuration
Configure API URLs, tokens, environments, fee products, and auto-post settings directly from Sales settings.
### Shared Base Connector
Built on the shared FBR Connector Base, ensuring compatibility with POS FBR Connector in the same database.
### Company-Level Settings
All FBR configuration is applied at company level through sales-related settings views for multi-company support.
### Setup Workflow and Architecture
### Three Steps to Go Live
From installation to compliant invoicing — a clear, predictable pipeline every step of the way.
01
Install & Configure Install de_sale_fbr_connector and its dependency de_fbr_connector . Enter API URL, Token, and Fee Product in Sales Settings.
02
Map Products Assign PCT codes to saleable products. Enable automatic FBR charge toggle if fees should be added to invoices.
03
Confirm & Submit Create Sale Orders and confirm invoices. If auto-post is enabled, invoices submit to FBR automatically upon confirmation.
Sale Order Created
Invoice Generated
Invoice Confirmed
FBR API Submission
Audit Log & Status Update
Watch It in Action
### Full Module Demo
See the complete flow — from configuring the FBR connector, mapping PCT codes, creating a sale order, confirming an invoice, and viewing the FBR submission status and audit logs.
### Documentation and Guidance
### Everything You Need to Get Started
From installing dependencies to configuring API tokens and managing retries — complete guides for every step.
- Overview
- Installation
- Configuration
- Workflow
- Retry & Audit
- Security
- Automation
- FAQ
The Sales FBR Connector integrates Odoo 18 Sales and Accounting with Pakistan's Federal Board of Revenue (FBR) e-invoicing system.
It enables automated invoice reporting from Sale Orders, automatic FBR fee handling, PCT code tracking for products, and enhanced audit capabilities with retry mechanisms.
Key capabilities include:
- Automated invoice submission to FBR
- Automatic FBR fee line insertion
- Product-level PCT code mapping
- Submission retry and recovery mechanisms
- Complete audit logging for traceability
- Manager-safe access controls
### Prerequisites
Ensure your environment meets these requirements:
- Odoo 18.0
- sale module installed
- account module installed
- de_fbr_connector (Base) module installed
- Network access to FBR API endpoints
### Installation Steps
- Copy the de_sale_fbr_connector module to your Odoo addons path.
- Update the Apps List.
- Search for: Sales FBR Connector .
- Click Install .
### Post-Installation
Navigate to Sales Settings to configure the FBR integration parameters before going live.
All FBR settings are managed within the Sales Settings area at company level.
### Key Settings
Setting
Description
Master Toggle
Enable/Disable FBR integration globally
Environment
Select Production or Sandbox mode
API URL
FBR endpoint address
Auth Token
API key or authentication token
Terminal ID
POS or terminal identifier
Auto Charge
Enable automatic FBR fee application
Fee Product
Product used for FBR fee lines
Fee Amount
Amount for automatic fee line
Auto-Post
Submit to FBR on invoice confirmation
Retry Interval
Time between failed submission retries
### Product Setup
Ensure all saleable products have valid PCT codes assigned for correct tax classification.
The standard Sales workflow is enhanced with automatic FBR reporting steps.
### Sale Order to FBR Flow
### Invoice Output
Upon successful submission, the invoice displays:
- FBR Invoice Number / Reference
- Submission status indicator
- Access to detailed audit logs
Robust error handling ensures no transaction is lost and all activities are traceable.
### Submission Retry
If an FBR submission fails due to network issues or API errors:
- Transaction is flagged as pending
- Automatic retry cron attempts resubmission
- Managers can trigger manual resend from invoice form or list
### Audit Trail
Comprehensive logs capture:
- Original payload sent to FBR
- API response messages and codes
- Timestamps and user references
- Success/Failure status history
### Security & Access
Access controls ensure operational safety and data protection.
### User Roles
Role
Permissions
Sales User
View submission status relevant to their workflow
Manager / Admin
Access configuration, view detailed logs, manage retries, review payloads
### Data Protection
Sensitive API tokens and detailed FBR response payloads are restricted to authorized personnel only.
Background processes keep the integration running smoothly without manual intervention.
### Scheduled Actions (Crons)
- Retry Processing: Automatically resubmits failed transactions at configured intervals.
- Cleanup: Optional archiving of old audit logs.
### Server Actions
Manual server actions are available for administrators to force retries or reset stuck states from invoice forms or list views.
### Frequently Asked Questions
### Is this compatible with Odoo Community?
Yes, the module is designed for both Odoo 18 Community and Enterprise editions.
### Do I need the base connector?
Yes, de_fbr_connector is a mandatory dependency that provides shared PCT and API utilities.
### Can it coexist with POS FBR Connector?
Yes, both modules share the same base and are designed to work together in the same database.
### What happens if FBR API is down?

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.2.1.0**
- Installable: **Yes**
- Application module: **Yes**
- Dependencies: `sale`, `de_fbr_connector`

Install the declared dependencies first, then install `Sales FBR Connector` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Sales FBR Connector` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

No explicit menu labels were detected by the static scan; inspect the module XML views and actions in the installed database.

## Technical notes and access review

- Static source files: 13 Python, 7 XML, and 1 CSV.
- Detected model names: `move_id`, `sale.fbr.submission.log`
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

### Dynexcel Icon

![Dynexcel Icon](pathname:///odoo/18/de_sale_fbr_connector/screenshots/dynexcel-icon.png)

_Dynexcel Icon from the module static description assets._

### Dynexcel Logo

![Dynexcel Logo](pathname:///odoo/18/de_sale_fbr_connector/screenshots/dynexcel-logo.png)

_Dynexcel Logo from the module static description assets._

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
