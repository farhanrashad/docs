---
id: index
title: "Sales Planning Stock"
sidebar_label: "Sales Planning Stock"
---

# Sales Planning Stock

## Overview

Technical module: `dx_sale_planning_stock`

This Odoo 19 manual is derived from the module manifest, source files, and the module App Store description. Verify the exact installed build before production use.

## Source-backed description

Modular Sales Planning Suite
### Define Targets,
### Approve Plans,
### Track Actuals
A modular Odoo 19 solution for defining sales targets, approving plans, tracking confirmed sales, and identifying CRM, inventory, purchasing, and manufacturing gaps. Install only what you need.
Explore Features Get Support
5 Independent Addons
4 Period Types
19 Odoo Version
Plan Header - Preview Q3 Sales Target 2026 Monthly / Quarterly / Yearly / Custom
DRAFT
Company My Company
Currency USD
Version v1.0
Date From 07/01/2026
Date To 09/30/2026
Owner Sales Mgr
D Draft
>
S Submitted
R Review
A Approved
O Ongoing
### What is this module?
### Modular Sales Planning Architecture
The suite is delivered as five independent addons. Install only the integrations required by the customer. The core addon extends the Sales app with Planning, targets, approvals, revisions, actual sales, and reporting.
### 📊 Core Planning
Plans, targets, approvals, revisions, actual sales, and reporting. The foundation of the suite extending the Sales app.
### 🤝 CRM Integration
Opportunity linking and pipeline confidence. Analysis only; does not replace sales-order actuals.
### 📦 Inventory & MRP
Inventory readiness, shortage visibility, and BOM-based manufacturing suggestions creating draft MOs.
### Key Capabilities
### Everything Built In
### Plan Workflow
Comprehensive state management from Draft to Ongoing, with built-in approval routing and locking mechanisms.
### Revision History
Revise approved plans into new versions while retaining the old plan for audit. Superseded tracking included.
### Actual Sales Tracking
Core actuals are calculated dynamically from confirmed sale.order.line records matching target dimensions.
### Automatic Planned Amount
Planned amounts are automatically calculated from product sales price multiplied by planned quantity.
### Smart Reporting
Plan vs Actual client report with live type-ahead filtering, keyboard selection, and clickable targets.
### Opportunity Linking
Link CRM opportunities to plan lines to review open pipeline, weighted pipeline, and coverage indicators.
### Inventory Shortage
Review on-hand, free, forecast, incoming, outgoing, and projected shortage visibility per target line.
### Draft RFQs & MOs
Generate draft Request for Quotations and Manufacturing Orders directly from planning gaps.
### Security & Access
Granular access control with Planning User, Manager, and Administrator groups and company checks.
### Setup Workflow and Architecture
### Three Steps to Go Live
From core installation to parallel integrations — a clear, predictable deployment path.
01
Install Core Addon Install dx_sale_planning . This provides plans, targets, approvals, actual sales, and reporting.
02
Optional Integrations Optionally install dx_sale_planning_crm and dx_sale_planning_stock .
03
Parallel Integrations Install Purchase and MRP addons only after Stock. They are parallel and do not depend on each other.
dx_sale_planning (Core)
dx_sale_planning_crm
dx_sale_planning_stock
dx_sale_planning_purchase
dx_sale_planning_mrp
Watch It in Action
### Full Module Demo
See the complete flow — from defining targets and approving plans, to tracking actuals and identifying inventory gaps.
### Documentation and Guidance
### Everything You Need to Get Started
From module maps and installation orders to plan workflows and reporting — complete guides for every step.
- Overview
- Module Map
- Revision Workflow
- Reporting
- Integrations
- Security
- FAQ
The Sales Planning Suite is a modular Odoo 19 solution for defining sales targets, approving plans, tracking confirmed sales, and identifying operational gaps.
This approach ensures:
- Target definition across multiple dimensions
- Structured approval workflows
- Actual sales tracking from confirmed orders
- CRM pipeline confidence analysis
- Inventory shortage visibility
- Draft RFQ and MO generation
### Independent Addons
The suite consists of five modules. Purchase and Manufacturing are parallel integrations and do not depend on each other.
Addon
Purpose
Dependencies
dx_sale_planning
Core planning and sales-order actuals
sale_management, sales_team, mail
Opportunity linking and pipeline confidence
dx_sale_planning, crm
Inventory readiness and shortage visibility
dx_sale_planning, stock
Vendor-based purchasing suggestions
dx_sale_planning_stock, purchase_stock
BOM-based manufacturing suggestions
dx_sale_planning_stock, mrp
### Installation Order
- Install dx_sale_planning .
- Optionally install dx_sale_planning_crm .
- Optionally install dx_sale_planning_stock .
- Install dx_sale_planning_purchase only after stock.
- Install dx_sale_planning_mrp only after stock.
Plans move through a structured lifecycle to ensure proper review and locking of targets.
### Standard States
### State Behaviors
- Draft: Owner can edit header and add/modify lines.
- Submitted: Sent for review. Header and values are locked.
- Under Review: Approval process is active. All assigned approvers must approve.
- Approved: Plan is approved but not live. Moves to Ongoing on Date From (or manually).
- Ongoing: Plan is live. Actuals recompute dynamically. Direct edits blocked.
- Completed: Period closed. Preserved for reporting.
### Terminal States
Additional states include Rejected , Cancelled , and Superseded .
Approved, Ongoing, Completed, or Superseded plans can be revised to adjust targets mid-cycle.
### Step 1: Initiate Revision
Open the target plan and click Revise Plan .
### Step 2: Edit New Version
The system copies the plan and lines into a new Draft version with the next version number.
### Step 3: Approve and Supersede
Edit, submit, review, and approve the new version. The old plan is retained for audit and becomes Superseded after full approval.
The standard Plan vs Actual action provides list, form, pivot, and graph views.
### Sales Planning Client Report
- Plan, state, date range, team, salesperson, product, and customer filters.
- Live type-ahead filtering with a compact sorted result menu.
- Keyboard selection with Arrow Up, Down, Enter, and Escape.
- Planned and Actual quantity/amount totals with achievement percentage.
- Clickable target names to open plan lines.
- Clickable actual amounts to open matching confirmed sales orders.
### CRM Workflow
Link opportunities from the CRM form. Review open pipeline, weighted pipeline, won/lost revenue, and coverage on the plan line Forecast tab.
### Inventory Workflow
Select a warehouse to review on-hand, free, forecast, incoming, outgoing, and projected shortage.
### Purchase & MRP Workflows
Set preferred vendors or ensure normal BOMs. Click Create Draft RFQ or Create Draft MO to generate suggestions for buyer/planner review.
### Security & Boundaries
### Security Groups
- Planning User: Read, create, edit plans/lines. Cannot delete.
- Planning Manager: Manage plans, approvals, channels, territories.
- Planning Administrator: Full core access.
### Current V1 Boundaries
- Actuals use confirmed sales orders, not invoices.
- Return and credit-note treatment is not a separate finance workflow.
- Core does not create Sales Order territory/channel fields.
- Stock readiness uses current Odoo product quantities.
- Purchase and Manufacturing create draft suggestions only.
- Report loads up to 5,000 target lines per client action.
### Frequently Asked Questions
### How are actual sales calculated?
Core actuals are calculated from sale.order.line records in sale or done state. Cancelled lines are ignored, and amounts use untaxed price_subtotal.
### Can I select multiple products on a single plan line?
No. Product targeting is exclusive. You must select exactly one of Product, Product Template, or Product Category.
### Do Purchase and MRP addons automatically confirm documents?
No. Neither integration automatically approves, confirms, sends, or completes an operational document. They only create drafts for review.
### What happens if Auto Start is enabled?
A scheduled action moves approved plans to the Ongoing state automatically when the Date From is reached.
### Where is the report located?
The report is available under Sales > Reporting > Sales Planning .
About Us
Dynexcel: Your trusted partner for cutting-edge ERP solutions. We specialize in seamless implementation and optimization services, helping businesses streamline operations and drive growth. Transform your business with us today.
Email Support support@dynexcel.com
Copy
WhatsApp wa.me/923000049390
Support Ticket https://www.dynexcel.com/helpdesk/customer-care-1
YouTube Channel youtube.com/@dynexcel
Documentation docs.dynexcel.com/salesplanningsuite
🌐
Website https://www.dynexcel.com

## Dependencies and prerequisites

- Odoo version: **19**
- Module version: **19.0.1.0.2**
- Installable: **Yes**
- Application module: **No**
- Dependencies: `dx_sale_planning`, `stock`

Install the declared dependencies first, then install `Sales Planning Stock` from Odoo Apps. Do not assume a dependency is available in another Odoo version.

## Installation and configuration

1. Place the module in an addons path for the matching Odoo version.
2. Update the Apps list and install the declared dependencies.
3. Install `Sales Planning Stock` and follow the source-backed menus and workflows below.
4. Test the primary workflow with a non-production record before enabling it for users.

## Source-backed workflows

No explicit menu labels were detected by the static scan; inspect the module XML views and actions in the installed database.

## Technical notes and access review

- Static source files: 6 Python, 1 XML, and 0 CSV.
- Detected model names: No model names detected by the static scan.
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
