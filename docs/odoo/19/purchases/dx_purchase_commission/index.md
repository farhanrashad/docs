---
id: index
title: "Purchase Commission"
sidebar_label: "Purchase Commission"
---

# Purchase Commission

## Overview

Technical module: `dx_purchase_commission`

This Odoo 19 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Automated Purchase Commission Engine
### Buyer Incentives,
### Broker Fees,
### Vendor Rebates
Automate complex commission calculations directly from your purchase workflow. Support internal buyer incentives, external broker fees, and vendor rebates with tiered rates, accumulation rules, and native accounting integration.
Explore Features Read Manual
Odoo 19 Community Edition
3 Modes Flexible Logic
Native Accounting
Commission Entry - Live COMM-2026-001 Vendor Bill Paid / Internal Buyer
APPROVED
Vendor Global Supplies Ltd
Source Amount $10,000.00
Commission $250.00
Rate Type Percentage
Rule Q3 Electronics
Status Ready to Settle
Purchase Order
Confirmed
Done
Vendor Bill
Posted/Paid
Commission Entry
Auto-Calc
Active
P Purchase
>
C Calculate
A Approve
S Settle
### What is this module?
### Flexible Commission Management for Purchasing
This module automates the calculation of commissions based on purchase transactions. It supports three distinct modes: Internal Buyer Incentives, External Agent/Broker fees, and Vendor Rebates. Configure complex rules with tiered percentages, accumulated thresholds, and caps, then settle them directly into Odoo Accounting.
### 📊 Three Commission Modes
Choose between Internal Buyer (incentive), External Agent (broker fee), or Vendor Rebate (claim back) per company policy.
### 📐 Advanced Rule Engine
Define rules by product, category, vendor, or agreement. Use fixed amounts, percentages, or tiered rates with accumulation frequencies (daily/monthly/yearly).
### 💰 Native Settlement
Generate draft journal entries or credit notes directly from approved commission entries. Supports bulk settlement for multiple brokers or vendors.
### Key Capabilities
### Everything Built In
### Flexible Triggers
Calculate commissions based on Purchase Order confirmation, Goods Receipt, Vendor Bill posting, or Vendor Bill payment.
### Accumulation Rules
Support accumulated amounts over daily, monthly, or yearly periods. Set minimum thresholds and maximum commission caps per period.
### Tiered Percentages
Define tiered rate structures where higher purchase volumes trigger higher commission percentages automatically.
Track vendor incentives as commission entries. Settle them as draft credit notes or claims against the vendor for easy accounting reconciliation.
### Approval Workflow
Require manager approval for commission entries before they can be settled. Ensure accuracy and prevent unauthorized payouts.
### Smart Buttons
Access commission history directly from Purchase Orders and Vendor Bills via smart buttons for full traceability.
### Reporting & Analysis
Analyze commission costs by vendor, product category, buyer, or period using built-in pivot and graph views.
### Return Handling
Automatically generate negative adjustment entries for returns and refunds to keep commission balances accurate.
### Setup Workflow and Architecture
### From Plan to Payment
A clear, step-by-step process from configuring commission plans to settling final accounting entries.
01
Configure Settings Go to Purchase → Configuration → Settings . Enable Purchase Commission and select the active mode (Internal, Broker, or Rebate).
02
Create Plan & Rules Define a Commission Plan with a settlement basis. Add Rules specifying products, categories, rates, and accumulation logic.
03
Process Purchases Confirm POs, receive goods, or post/pay bills. The system automatically generates commission entries based on your plan.
04
Approve & Settle Review entries in Commission → Entries . Approve them and use the Settlement action to create draft accounting documents.
Commission Plan
Commission Rules
Purchase Event
Auto Calculation
Manager Approval
Accounting Settlement
Watch It in Action
### Full Module Demo
See the complete flow — from setting up a commission plan, defining tiered rules, processing a vendor bill, and settling the resulting commission entry into accounting.
### Documentation and Guidance
### Everything You Need to Get Started
From enabling the module to configuring complex tiered rules and handling vendor rebates — complete guides for every step.
- Overview
- Configuration
- Plans & Rules
- Transaction Flow
- Settlement
- Analysis
- FAQ
The Purchase Commission module calculates commission entries from eligible purchase transactions. It supports one active commission mode per company:
- Internal Buyer Incentive: Rewards for your purchasing team.
- External Agent / Broker: Fees paid to third-party facilitators.
- Vendor Rebate: Incentives claimed back from suppliers based on volume.
The module excludes taxes, display lines, down payments, and cancelled purchase lines. Refunds and returned quantities create negative adjustment entries where applicable.
### Step 1: Enable Purchase Commission
Navigate to:
Enable Purchase Commission and select the active commission mode. Choose the settlement basis:
- Purchase Order Confirmed
- Goods Received
- Vendor Bill Posted
- Vendor Bill Paid
For broker or vendor rebate modes, configure a purchase journal and exactly one of a service commission product or commission account.
A Commission Plan is the policy framework. Navigate to Purchase → Configuration → Commission → Plans . It controls the company, mode, settlement basis, effective dates, and approval requirements.
### Commission Rule
Rules are the calculation logic inside a plan. Navigate to Purchase → Configuration → Commission → Rules . Each rule controls:
- Matching Scope: Vendor, product, category, buyer, or agreement.
- Rate Method: Fixed amount, percentage, or tiered percentage.
- Calculation Basis: Per transaction or accumulated amount.
- Thresholds: Minimum purchase amount and maximum commission cap.
Example: A monthly accumulated rule has a minimum purchase of $250, a rate of 10%, and a max commission of $100. Once $100 is reached in that month, no further commission is generated until the next period.
### Transaction Workflow
- Configure: Set company settings and create an active plan with rules.
- Purchase: Create or confirm a purchase order.
- Trigger: Complete the configured event (receipt, bill posting, or payment).
- Review: Open Commission → Entries to see generated entries.
- Approve: Approve entries if required by the plan.
- Settle: Use the settlement action to create draft accounting documents.
Multiple approved entries can be selected and settled together. The bulk action groups external-agent entries by broker and vendor-rebate entries by vendor.
A Vendor Rebate is a purchase incentive that a vendor gives back to your company after you reach an agreed purchase target. It is not a payment to a buyer or broker.
### Rebate Workflow
- Set company mode to Vendor Rebate .
- Create a plan with mode Vendor Rebate and select the settlement basis.
- Create rules scoped to the vendor, product, or category.
- Complete the purchase event (e.g., pay the vendor bill).
- Review the generated entry and approve it.
- Use the Settlement action to create a draft credit note or claim document for the vendor.
### Settlement & Analysis
For internal buyer mode, mark approved entries as settled for analysis. For broker or vendor rebate modes, the settlement action creates a draft journal entry or credit note. Different brokers or vendors create separate draft settlement documents.
### Review and Analysis
- Open a purchase order and use the commission smart button to view its entries.
- Open Purchase → Commission → Entries to review draft, approved, settled, or cancelled entries.
- Open Purchase → Reporting → Commission Analysis for pivot and graph analysis by vendor, category, and period.
### Important Notes
- The module uses the company currency for settlement calculations.
- Partial receipts and bills are calculated from their actual quantities.
- Returns and refunds are represented as negative adjustment entries.
- Cancelling a purchase order cancels open commission entries.
- Changing a plan or rule affects future events; existing entries are not recalculated automatically.
- If a bill was posted before the module was installed, use the Sync Purchase Commission button on the vendor bill to generate missing entries.
### Frequently Asked Questions
### Can I have multiple commission modes in one company?
No, only one active commission mode is allowed per company at a time. However, you can have multiple plans for different settlement bases (e.g., one for PO confirmation and one for Bill posting) within that same mode.
### How are tiered rates handled?
You can define tier thresholds in a rule. For example, 0-1000 units at 1%, 1001-5000 units at 2%. The system applies the correct rate based on the accumulated or per-transaction amount.
### What happens if I return a product?
The module automatically generates a negative commission entry to reverse the previously calculated commission for the returned quantity.
### Can I settle commissions for multiple brokers at once?
Yes. Select multiple approved entries in the Commission Entries list and use the bulk settlement action. The system will group them by broker and create separate draft accounting documents for each.
About Us
Dynexcel: Your trusted partner for cutting-edge ERP solutions. We specialize in seamless implementation and optimization services, helping businesses streamline operations and drive growth. Transform your business with us today.
Email Support support@dynexcel.com
Copy
WhatsApp wa.me/923000049390
Support Ticket https://www.dynexcel.com/helpdesk/customer-care-1
YouTube Channel youtube.com/@dynexcel
Documentation docs.dynexcel.com/purchasecommission
🌐
Website https://www.dynexcel.com

## Dependencies and prerequisites

- Odoo version: **19**
- Module version: **19.0.1.0.9**
- Installable: **Yes**
- Application module: **Yes**
- Dependencies: `purchase_stock`, `purchase_requisition`, `account`

Install the declared dependencies first, then install `Purchase Commission` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Purchase Commission` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Commission
- Commission Analysis
- Entries
- Plans
- Rules
- Settlements

## Technical notes and access review

- Static source files: 17 Python, 10 XML, and 1 CSV.
- Detected model names: `purchase.commission.entry`, `purchase.commission.entry.line`, `purchase.commission.plan`, `purchase.commission.rule`, `purchase.commission.settlement.wizard`, `purchase.commission.tier`
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
