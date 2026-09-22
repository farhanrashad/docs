---
id: index
title: "POS FBR Connector"
sidebar_label: "POS FBR Connector"
---

# POS FBR Connector

## Overview

Technical module: `de_pos_fbr_connector`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

POS FBR Integration for Odoo 18
### Real-Time Reporting,
### FBR E-Invoicing,
### One Connector
Integrate Odoo 18 Point of Sale with Pakistan's FBR e-invoicing system. Automatic levy handling, PCT code support, QR/barcode receipts, and robust retry logic — out of the box.
Explore Features Get Support
18.0 Odoo Version
2 Dependencies
OPL-1 License
FBR Status - Live POS Terminal 01 Production Environment / Active
CONNECTED
API Token Valid
PCT Codes Mapped
Submission OK
Last Sync Just Now
Retry Auto
Levy Enabled
Order #1024
12:05
Submitted
Order #1023
11:58
Order #1022
11:45
Retrying
P POS Order
>
V Validate
S Submit
R Receipt
### What is this module?
### FBR E-Invoicing for Odoo POS
This module integrates Odoo 18 Point of Sale with Pakistan's Federal Board of Revenue (FBR) system. It handles real-time invoice reporting, company-borne fee accounting, PCT code mapping, and generates compliant receipts with QR or barcode output.
### 🧾 Real-Time Submission
Orders are submitted to FBR immediately upon validation or payment. Receipts automatically include required QR codes or barcodes for compliance.
### ⚙️ Automatic Levy Handling
Company-borne FBR fees are tracked after successful submissions and posted through backend accounting at POS session close.
### 🔄 Retry & Audit Logging
Failed submissions trigger automatic retries via cron. Complete audit trails track payloads, responses, and status history for every transaction.
### Key Capabilities
### Everything Built In
### Company-Borne FBR Fee
Track the configured FBR fee in backend accounting without adding a fee line to the customer POS order.
### FBR Logo, QR & Barcode Receipts
Enhanced POS receipt templates support the default FBR logo plus QR codes or barcodes for FBR compliance verification.
### PCT Code Support
Map Pakistan Customs Tariff (PCT) codes directly to products for accurate tax classification and reporting.
### Smart Retry Logic
Failed API submissions are queued and retried automatically via scheduled actions or manually by managers.
### Manager-Safe Access
Restrict sensitive FBR configuration and detailed response logs to administrators while keeping POS users focused.
### Complete Audit Trail
Every submission attempt is logged with payload details, FBR responses, timestamps, and user information.
### Flexible Configuration
Configure API URLs, tokens, environments, and terminal IDs directly from the POS settings interface.
### Shared Base Connector
Built on the shared FBR Connector Base, ensuring compatibility with Sales FBR Connector in the same database.
### Community Compatible
Designed for Odoo 18 Community and Enterprise deployments requiring Pakistani fiscal compliance.
### Setup Workflow and Architecture
### Three Steps to Go Live
From installation to compliant POS receipts — a clear, predictable pipeline every step of the way.
01
Install & Configure Install de_pos_fbr_connector and its dependency de_fbr_connector . Enter API URL, Token, and Terminal ID in POS Settings.
02
Map Products Assign PCT codes to saleable products and configure company-borne FBR fee accounts where applicable.
03
Sell & Report Process POS orders normally. Upon payment, invoices are submitted to FBR automatically and receipts print with QR/Barcode.
POS Order Created
Payment / Validation
Payload Preparation
FBR API Submission
Audit Log & Retry Queue
Compliant Receipt Print
Watch It in Action
### Full Module Demo
See the complete flow — from configuring the FBR connector, mapping PCT codes, processing a POS order, and generating a compliant receipt with QR output.
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
The POS FBR Connector integrates Odoo 18 Point of Sale with Pakistan's Federal Board of Revenue (FBR) e-invoicing system.
It enables real-time POS invoice reporting, company-borne FBR fee accounting, PCT code support for products, and enhanced receipt output with QR or barcode elements.
Key capabilities include:
- Real-time invoice submission to FBR
- Automatic fee and levy calculation
- Product-level PCT code mapping
- Compliant receipt generation (QR/Barcode)
- Submission retry and recovery mechanisms
- Complete audit logging for traceability
### Prerequisites
Ensure your environment meets these requirements:
- Odoo 18.0
- point_of_sale module installed
- de_fbr_connector (Base) module installed
- Network access to FBR API endpoints
### Installation Steps
- Copy the de_pos_fbr_connector module to your Odoo addons path.
- Update the Apps List.
- Search for: POS FBR Connector .
- Click Install .
### Post-Installation
Navigate to POS Settings to configure the FBR integration parameters before going live.
All FBR settings are managed within the POS Configuration area.
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
Unique POS/terminal identifier
Company Fee
Enable company-borne FBR fee accounting
Receipt Logo
Print the attached FBR logo on receipts; clear the image to hide it
Retry Interval
Time between failed submission retries
### Product Setup
Ensure all saleable products have valid PCT codes assigned for correct tax classification.
The standard POS workflow is enhanced with automatic FBR reporting steps.
### Order to FBR Flow
### Receipt Output
Upon successful submission, the POS receipt automatically includes:
- FBR Invoice Number / Reference
- QR Code or Barcode for verification
- Applicable levy/tax breakdown
Robust error handling ensures no transaction is lost and all activities are traceable.
### Submission Retry
If an FBR submission fails due to network issues or API errors:
- Transaction is flagged as pending
- Automatic retry cron attempts resubmission
- Managers can trigger manual resend
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
POS User
View submission status relevant to their session
Manager / Admin
Access configuration, view detailed logs, manage retries
### Data Protection
Sensitive API tokens and detailed FBR response payloads are restricted to authorized personnel only.
Background processes keep the integration running smoothly without manual intervention.
### Scheduled Actions (Crons)
- Retry Processing: Automatically resubmits failed transactions at configured intervals.
- Cleanup: Optional archiving of old audit logs.
### Server Actions
Manual server actions are available for administrators to force retries or reset stuck states.
### Frequently Asked Questions
### Is this compatible with Odoo Community?
Yes, the module is designed for both Odoo 18 Community and Enterprise editions.
### Do I need the base connector?
Yes, de_fbr_connector is a mandatory dependency that provides shared PCT and API utilities.
### Can it coexist with Sales FBR Connector?
Yes, both modules share the same base and are designed to work together in the same database.
### What happens if FBR API is down?
Orders are still processed in POS. Submissions are queued and retried automatically when connectivity is restored.
### How are PCT codes managed?
PCT codes are assigned at the product level through standard product forms or import tools.
### Does it support multiple POS terminals?

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.3.0.0**
- Installable: **Yes**
- Application module: **Yes**
- Dependencies: `point_of_sale`, `de_fbr_connector`

Install the declared dependencies first, then install `POS FBR Connector` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `POS FBR Connector` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

No explicit menu labels were detected by the static scan; inspect the module XML views and actions in the installed database.

## Technical notes and access review

- Static source files: 21 Python, 17 XML, and 1 CSV.
- Detected model names: `fbr.submission.log`, `order_id`, `pos.order.fbr.log`
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

### Config

![Config](pathname:///odoo/18/de_pos_fbr_connector/screenshots/config.png)

_Config from the module static description assets._

### Dynexcel Icon

![Dynexcel Icon](pathname:///odoo/18/de_pos_fbr_connector/screenshots/dynexcel-icon.png)

_Dynexcel Icon from the module static description assets._

### Dynexcel Logo

![Dynexcel Logo](pathname:///odoo/18/de_pos_fbr_connector/screenshots/dynexcel-logo.png)

_Dynexcel Logo from the module static description assets._

### Order

![Order](pathname:///odoo/18/de_pos_fbr_connector/screenshots/order.png)

_Order from the module static description assets._

### Receipt

![Receipt](pathname:///odoo/18/de_pos_fbr_connector/screenshots/receipt.png)

_Receipt from the module static description assets._

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
