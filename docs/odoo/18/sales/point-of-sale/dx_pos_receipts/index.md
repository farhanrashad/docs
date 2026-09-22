---
id: index
title: "POS Receipt Pro"
sidebar_label: "POS Receipt Pro"
---

# POS Receipt Pro

## Overview

Technical module: `dx_pos_receipts`

This Odoo 18 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Professional POS Receipt Design Studio for Odoo 18
### Custom POS Receipts with
### Logo, QR Code & Pricing
### Without Modifying Core Files
Create professional, clean, and print-friendly Point of Sale receipts with multiple layout designs. Custom POS logos, customer details, payment summaries, and optional invoice QR codes — all configurable from the POS settings.
Explore Features Get Support
3 Receipt Layouts
QR + URL Invoice Modes
18.0 Odoo Version
Module dx_pos_receipts v18.0.1.0.19 / de_pos_receipt_18
ACTIVE
Designs Retail Boxed
Modern Savings Compact Ledger
Logo POS-Specific
QR Invoice QR + URL
Pricing Strike-through
Assets point_of_sale._assets_pos
Customer Details
Name, Address, Phone, Email
Auto-hide Empty
Product Lines
Qty, Price, Tax, Disc., Total
Aligned Columns
Payment + Summary
Paid, Change, Subtotal, Tax, Total
Two-Column Layout
C Config
>
L Layout
R Render
P Print
### What is this module?
### Professional POS Receipt Design Studio
The dx_pos_receipts addon provides three professional receipt layouts for Odoo 18 Point of Sale without modifying any core files. Configure receipt design, upload a POS-specific logo, enable invoice QR codes, and display manual or pricelist price changes with strike-through original prices — all from the native POS Settings screen.
### 🎨 Multiple Receipt Designs
Choose from Retail Boxed, Modern Savings, or Compact Ledger layouts. Each design keeps a white background, dotted separators, and aligned columns optimized for both screen preview and physical receipt printers.
### ⚙️ Native POS Configuration
All settings are exposed through the native POS data loader in Point of Sale → Configuration → Settings. No custom controllers, public APIs, or separate backends required.
### 💰 Smart Pricing Display
When a manual or pricelist price differs from the original, the original price appears with a strikethrough above the active price. All calculations use the final POS line price.
### Key Capabilities
### Everything Built In
### Three Professional Layouts
Retail Boxed, Modern Savings, and Compact Ledger designs — each with white background, dotted separators, and print-friendly column alignment.
### POS-Specific Receipt Logo
Upload a unique logo per POS register. Falls back to the company logo automatically when no POS logo is set. Cannot be changed during an active session.
### Invoice QR Code Support
Follows Odoo's native Show QR Invoice on Receipt setting. Supports QR code only, URL only, or QR code + URL modes with portal link and unique access code.
### Customer Information Block
Displays customer name, address, phone, and email when available. Blank fields are omitted automatically. Long addresses and emails wrap safely without clipping.
### Strikethrough Original Price
Manual or pricelist price changes show the original reference price crossed out above the active price. Line totals always use the actual POS price for accurate calculations.
### Payment & Summary Section
Two-column layout showing Payment Details (paid, remaining balance, change, methods) alongside Summary (subtotal, discount, taxable amount, sales tax, total).
### Print-Friendly Output
Works correctly on both browser preview and target receipt printers. White background, proper spacing, and safe text wrapping ensure consistent output across devices.
### No Core Modifications
POS assets load through point_of_sale._assets_pos. Configuration fields expose via the native POS data loader. Zero core file changes, custom controllers, or separate QR backends needed.
### Setup Workflow and Architecture
### Three Steps to Go Live
From configuration to printed receipt — a clear, predictable workflow every step of the way.
01
Configure Receipt Design Navigate to Point of Sale → Configuration → Settings . Select your POS and choose a design under Professional Receipt Design : Retail Boxed, Modern Savings, or Compact Ledger. Save and reload the POS session.
02
Upload POS Logo & Enable QR Use POS Receipt Logo to upload a brand-specific logo. Enable Show QR Invoice on Receipt and select QR mode: QR code, URL, or both. Save and hard-refresh the browser.
03
Open Session & Print Open a new POS session. Process orders normally. The custom receipt renders automatically at checkout with customer details, product lines, payment summary, and optional invoice QR block.
POS Settings
Select Design + Upload Logo
Enable QR Invoice Setting
Save + Reload POS Session
Process Order
Custom Receipt Printed
Watch It in Action
### Full Module Demo
See the complete flow — from configuring receipt design and uploading a POS logo, to enabling invoice QR codes and printing a professional receipt at checkout.
### Documentation and Guidance
### Everything You Need to Get Started
From selecting a receipt design to configuring QR invoice modes — complete guidance for every setup step.
- Overview
- Configuration
- Receipt Designs
- Invoice QR
- Pricing Behavior
- Upgrade
- Validation Checklist
- FAQ
The POS Receipt Design Studio ( dx_pos_receipts ) addon delivers professional, print-friendly receipt layouts for Odoo 18 Point of Sale without modifying any core files. Three designs — Retail Boxed, Modern Savings, and Compact Ledger — keep a white background, dotted separators, aligned columns, and full customer, payment, and summary information.
Key capabilities include:
- Three selectable professional receipt designs
- POS-specific receipt logo with company logo fallback
- Customer name, address, phone, and email display
- Payment details and two-column summary totals
- Optional invoice QR code and URL support
- Strikethrough original price for manual/pricelist changes
- Safe text wrapping for long addresses and emails
- Compatible with browser preview and physical receipt printers
- No core modifications, custom controllers, or separate QR backend
### Live POS Checkout with Payment Confirmation and Receipt Preview
After validating a cash payment, the POS displays a payment success confirmation alongside the live receipt preview. The receipt shows the bill number, date, time, cashier, customer details, product lines with pricing, payment summary, and invoice QR block — all rendered in real time before printing.
### Receipt Customer Details, Product Lines, Payment Summary, and Invoice QR
The detailed receipt view highlights each section: customer information with icons, product rows with quantity/price/tax/discount/total columns, the two-column payment and summary area, and the invoice QR block at the bottom. Strikethrough pricing is visible where manual or pricelist discounts were applied.
### POS QR Setting, Receipt Logo Upload, and Design Selector
In Point of Sale → Configuration → Settings, administrators configure the native Show QR Invoice on Receipt checkbox, select the QR print mode (QR code, URL, or both), upload a POS-specific receipt logo, and choose among Retail Boxed, Modern Savings, or Compact Ledger designs. Changes take effect after saving and reloading the POS session.
### Step 1: Select Receipt Design
Navigate to:
Under Professional Receipt Design , select one of:
- Retail Boxed — boxed layout with clear section dividers
- Modern Savings — contemporary design emphasizing savings and discounts
- Compact Ledger — condensed layout for narrow receipt paper
Save the settings and reload the POS session before testing.
### Step 2: Upload POS Receipt Logo
Use the POS Receipt Logo field to upload a logo specific to the selected POS. If no POS logo is uploaded, the company logo is used automatically. The logo setting cannot be changed while the POS has an active session.
### Step 3: Enable Invoice QR
Enable Odoo's native Show QR Invoice on Receipt setting. Choose the print mode:
Mode
What Prints
QR Code
QR image, invoice guidance, unique code
URL
Invoice guidance, portal URL, unique code
QR Code + URL
QR image, portal URL, guidance, unique code
After changing the QR setting, save the configuration, close/reload the POS session, and perform a hard browser refresh.
Three professional layouts are available, each maintaining a white background, dotted separators, and properly aligned columns for readability on screen and paper.
### Retail Boxed
A structured, boxed layout with clearly defined sections. Ideal for retail environments where customers expect a traditional receipt format with distinct headers and dividers between customer info, products, payments, and totals.
### Modern Savings
A contemporary design that emphasizes savings, discounts, and value. Highlights the difference between original and discounted prices, making it ideal for promotional or sale-focused POS operations.
### Compact Ledger
A condensed layout optimized for narrow receipt paper rolls. Reduces vertical space usage while preserving all essential information — customer details, product lines, payment summary, and optional QR block.
### Invoice QR Code
The custom receipt follows Odoo's native Show QR Invoice on Receipt configuration. The QR block prints only when the native QR flag is enabled and the order is finalized.
### QR Payload
The QR code contains the native Odoo portal URL:
The QR code does not contain customer information, address, amount, or an access token. The customer uses the bill/ticket number, date, and unique code displayed on the receipt to request an invoice from the Odoo portal.
### Print Modes
Visible Elements
QR image, "Need an invoice?" guidance, unique code
Guidance text, portal URL, unique code (no QR image)
QR image, portal URL, guidance text, unique code
### Important Notes
- QR block appears only when the native QR flag is enabled AND the order is finalized
- After changing QR settings, save configuration, close/reload POS session, and hard-refresh browser
- No separate QR backend or custom controller is required
The receipt uses the final POS line price for all calculations. When a manual POS price or pricelist price is lower than the original price:
- The original/reference price is displayed with a strike-through
- The actual POS price is displayed below it
- Quantity totals and summary calculations use the actual POS price
### Example
An original price of 5,000 manually changed to 3,000 :
The same behavior applies to pricelist-driven price changes. The smaller UOM text appears below the quantity value.
From the Odoo 18 source directory, upgrade the addon for the target database:
Restart the normal Odoo service after the upgrade. Then reload the POS session and hard-refresh the browser so the updated JavaScript and SCSS assets are loaded.
### Technical Details
Property
Value
Odoo Version
18.0
Addon Name
dx_pos_receipts
Module Version
18.0.1.0.19
Target Branch
de_pos_receipt_18
Asset Loading
point_of_sale._assets_pos
Core Modifications
None
Verify each scenario after configuration and before going live:
Check
Expected Result
QR setting disabled
QR block hidden on receipt
QR mode: QR code
QR image and unique code visible
QR mode: URL
URL and code visible; QR image hidden
QR mode: QR + URL
QR image, URL, and code all visible

## Dependencies and prerequisites

- Odoo version: **18**
- Module version: **18.0.1.0.19**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `point_of_sale`

Install the declared dependencies first, then install `POS Receipt Pro` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `POS Receipt Pro` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

No explicit menu labels were detected by the static scan; inspect the module XML views and actions in the installed database.

## Technical notes and access review

- Static source files: 8 Python, 2 XML, and 0 CSV.
- Detected model names: No model names detected by the static scan.
- Review the module security files and installed user's Odoo groups before granting access. Static documentation cannot certify live ACLs or record rules.

## Screenshots

### 01 Pos Checkout Receipt

![01 Pos Checkout Receipt](pathname:///odoo/18/dx_pos_receipts/screenshots/01_pos_checkout_receipt.png)

_01 Pos Checkout Receipt from the module static description assets._

### 02 Receipt Details Payment Qr

![02 Receipt Details Payment Qr](pathname:///odoo/18/dx_pos_receipts/screenshots/02_receipt_details_payment_qr.png)

_02 Receipt Details Payment Qr from the module static description assets._

### 03 Pos Receipt Configuration

![03 Pos Receipt Configuration](pathname:///odoo/18/dx_pos_receipts/screenshots/03_pos_receipt_configuration.png)

_03 Pos Receipt Configuration from the module static description assets._

## Validation scenarios

- Install the module and confirm that all declared dependencies are available.
- Confirm the detected menus and primary workflow with a test user.
- Verify access with the intended user groups and a restricted user.
- Confirm reports, scheduled actions, integrations, or portal behavior only when those source components are present.

## Limitations

- This page documents branch source and description assets; it is not proof of a successful live installation or deployment.
- Feature availability can differ by Odoo version, dependencies, company configuration, and user access rules.
