---
id: index
title: "Warranty / RMA Management"
sidebar_label: "Warranty / RMA Management"
---

# Warranty / RMA Management

## Overview

Technical module: `dx_warranty_rma`

This Odoo 19 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Complete Warranty & RMA Management
### Claims,
### Repairs,
### Refunds
Manage the entire warranty lifecycle in Odoo 19. From claim intake and policy checks to repairs, replacements, refunds, and vendor escalations — all linked natively to Stock, Repair, and Accounting.
Explore Features Read Manual
Odoo 19 Community Edition
QWeb PDF Reports
Native Integrations
Warranty Claim - Live RMA-DEMO-REPAIR Smart Hub Pro 2 / SHP2-DEMO-1001
IN REPAIR
Customer Northstar Electronics
Policy 12 Month Warranty
Status Under Warranty
Disposition Repair
Return Waiver Yes
Linked Docs RO/0001
Submitted
Jan 20
Done
Approved
Jan 21
In Repair
Jan 22
Active
C Claim
>
A Approve
D Dispose
N Native Doc
### What is this module?
### End-to-End Warranty Lifecycle in Odoo
This module provides a complete warranty and RMA management system for Odoo 19. It handles claim intake, policy validation, stage-based workflows, and seamless integration with native Odoo apps for repairs, stock returns, replacements, and accounting refunds.
### 📋 Policy Management
Define warranty rules by product, category, or vendor. Automatically calculate coverage dates and validate eligibility during claim creation.
### 🔗 Native Integrations
Create repair orders, stock returns, replacement deliveries, and credit notes directly from the claim. All documents remain linked via smart buttons.
### 🛡️ Audit & Control
Track every step with chatter, followers, and activity logs. Prevent duplicate claims for serialized items and require manager approval for return waivers.
### Key Capabilities
### Everything Built In
### Claim Intake
Capture customer issues, product details, and serial/lot numbers. Auto-link related sales, deliveries, and invoices for full traceability.
### Stage Workflow
Move claims through Draft, Submitted, Approved, In Repair, Received, and Closed stages. Track dates and actions at every step.
### Dispositions
Choose Repair, Replace, Refund, Reject, or Vendor RMA. Each disposition triggers specific native Odoo document creation flows.
### Vendor Escalation
Manage supplier-side RMAs with dedicated vendor return pickings. Track outbound shipments and inbound replacements from suppliers.
### Duplicate Prevention
Enforce one active open claim per serialized item. Prevents confusion and ensures clear history for each unique product unit.
### PDF Reports
Generate detailed claim reports showing status, workflow dates, linked documents, costs, and notes. Uses standard Odoo 19 external layout.
### Reporting Views
Analyze open claims by stage, turnaround time, disposition mix, rejection reasons, and vendor escalation aging.
### Manager Controls
Require manager approval for return waivers. Control claim closure based on completion of linked execution documents.
### Setup Workflow and Architecture
### From Claim to Resolution
A clear, step-by-step process from creating a warranty claim to resolving it via repair, replacement, refund, or vendor RMA.
01
Create Claim Go to Sales > Warranty / RMA > Claims . Enter customer, product, and serial/lot. Review auto-linked delivery and invoice details.
02
Review & Approve Check warranty policy coverage. Submit for review, inspect findings, and approve or reject the claim with a reason.
03
Choose Disposition Select Repair, Replace, Refund, Reject, or Vendor RMA. Create linked native documents like return transfers or repair orders.
04
Resolve & Close Complete the linked execution documents. Set closure reason, record costs, and close the claim. Print the final PDF report.
Warranty Claim
Policy Check
Approval
Disposition Action
Native Document
Closure & Report
Watch It in Action
### Full Module Demo
See the complete flow — from creating a warranty claim, checking policy coverage, approving the case, creating a repair order, and printing the final claim report.
### Documentation and Guidance
### Everything You Need to Get Started
From installing the module to configuring policies, processing claims, and troubleshooting common issues — complete guides for every step.
- Overview
- Installation
- Create Claim
- Workflow Steps
- Reports
- Practical Examples
- FAQ
The Warranty / RMA Management module helps your team manage customer claims, warranty checks, repairs, replacements, refunds, and vendor escalations in Odoo 19.
It provides a central record for every case, linking seamlessly to native Odoo documents like repair orders, stock pickings, and credit notes.
Key capabilities include:
- Policy rules by product, category, vendor, or company
- Stage-based claim workflow with approval control
- Serial and lot traceability with duplicate prevention
- Repair, replacement, refund, and vendor escalation flows
- Chatter, followers, and activity tracking
- Printable Warranty Claim QWeb PDF report
### Step 1: Install the Module
- Copy the module into your custom addons directory.
- Update the Apps List.
- Search for:
- Click Install .
### Step 2: Verify Dependencies
Ensure the following Odoo modules are installed:
- Sales
- Inventory
- Accounting
- Repair (if using repair disposition)
### Create a Claim
Navigate to:
Fill in the following fields:
Field
Description
Customer
The partner reporting the issue
Product
The claimed product
Serial / Lot
The traceable item reference
Symptom
The customer issue or defect description
The system will auto-link related delivery, sale, or invoice details where available. Review the warranty status and policy link before submitting.
Follow these steps to process a claim from start to finish:
- Create a Claim: Open Warranty > Claims and create a new record.
- Select Product: Choose the product and add serial/lot if available.
- Review Traceability: Check auto-linked delivery, sale, or invoice details.
- Check Coverage: Review warranty policy, dates, and eligibility result.
- Submit for Review: Move the claim from draft to submitted.
- Inspect Case: Record findings, notes, and attachments in the inspection stage.
- Approve or Reject: Approve if qualified, or reject with a valid reason.
- Choose Disposition: Select Repair, Replace, Refund, Reject, or Vendor RMA.
- Create Linked Docs: Generate native Odoo documents as needed.
- Complete Execution: Finish linked stock, repair, or accounting documents.
- Close Claim: Set closure reason, record costs, and close the claim.
### Claim Dispositions
Choose one of the following outcomes for an approved claim:
Disposition
Action
Repair
Create or link a native Odoo repair order
Replace
Create a replacement delivery with zero-price sales order
Refund
Create and track a credit note in Accounting
Reject
Close with a standard rejection reason
Vendor RMA
Track supplier-side escalation and returns
Each disposition may have specific requirements, such as completing a customer return before creating a replacement or refund.
### Reports and Printing
### Claim Report
Use Print Claim from a claim form or the claim Print menu. The PDF includes:
- Customer, product, serial or lot, and warranty status
- Approval outcome and disposition
- Current workflow stage and status badge
- Linked document references (delivery, repair, credit note, etc.)
- Claim lines, reported issue, costs, and internal notes
The report uses the Odoo 19 `web.html_container` and `web.external_layout` structure for reliable PDF rendering. Empty linked-document sections are omitted automatically.
Access various analytical views under Sales > Warranty / RMA > Reports:
- Open claims by stage
- Claims by warranty status
- Turnaround time analysis
- Repair versus replace versus refund mix
- Rejection reasons breakdown
- Vendor escalation aging
- Serial-wise claim history
### Scenario A: Warranty Repair
Northstar Electronics reports that serial `SHP2-DEMO-1001` does not power on. The service team approves a repair and sends the unit to the internal bench.
- Open `RMA-DEMO-REPAIR` claim.
- Confirm Under Warranty status and Repair disposition.
- Click Create Repair Order.
- Complete the repair and close the claim with "Repaired and Returned".
### Scenario B: Out-of-Warranty Decision
Serial `SHP2-DEMO-1002` was covered from January 15, 2024. The policy has expired, so the service team rejects the warranty request.
- Open `RMA-DEMO-REJECT` claim.
- Review Out of Warranty status.
- Confirm rejection reason "Invalid Claim".
### Scenario C: Customer Return and Vendor RMA
Serial `SHP2-DEMO-1003` has a repeated sensor fault. The claim qualifies for warranty, but the product must be returned and escalated to the vendor.
- Open `RMA-DEMO-VENDOR` claim.
- Create Return transfer and validate it.

## Dependencies and prerequisites

- Odoo version: **19**
- Module version: **19.0.1.0.13**
- Installable: **Yes**
- Application module: **Yes**
- Dependencies: `mail`, `stock`, `sale_stock`, `repair`, `account`

Install the declared dependencies first, then install `Warranty / RMA Management` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Warranty / RMA Management` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

Detected menu labels:

- Claims
- Policies
- Reasons
- Stages
- Vendor RMA Aging
- Warranty / RMA

## Technical notes and access review

- Static source files: 15 Python, 14 XML, and 1 CSV.
- Detected model names: `warranty.claim`, `warranty.claim.line`, `warranty.disposition.reason`, `warranty.policy`, `warranty.stage`
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
