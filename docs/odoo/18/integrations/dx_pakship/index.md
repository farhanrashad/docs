---
id: index
title: PakShip
sidebar_label: PakShip
sidebar_position: 10
---

# PakShip

`dx_pakship` is the courier-neutral Odoo 18 Community workspace for native
deliveries, returns, shipment items, consignments, booking batches, API logs,
dashboard analytics, and COD-reconciliation-ready records. It does not call a
courier API by itself.

## Source details

| Item | Value |
| --- | --- |
| Technical module | `dx_pakship` |
| Version reviewed | `18.0.1.40.0` |
| Source folder | `DEApps/dx_pakship` |
| Category | Inventory / Delivery |
| License | Odoo Proprietary License v1.0 (`OPL-1`) |

## Key features

- Dashboard KPIs with date, company, warehouse, carrier, status, city, and
  trend filters.
- Standalone Shipments and Shipment Items list/search views with operational
  filters such as Open Shipments, Open Items, To Consignment, Consignment Done,
  and Validation Errors.
- Consignments, booking batches, API logs, label-print history, and financial
  delivery fields.
- Provider-neutral **Validate Deliveries** action from Shipment Items.
- Delivery-contact correction support where the installed provider supplies
  the relevant city and mobile fields.
- Excel and PDF dashboard exports using the same newest-scheduled-date-first
  ordering shown in the dashboard.

## Dependencies and installation

The manifest depends on standard Odoo `base`, `stock`, `delivery`,
`stock_delivery`, `sale_stock`, `account`, `mail`, and `web` components.

1. Copy `dx_pakship` into the Odoo addons path.
2. Restart Odoo and update the Apps list.
3. Install **PakShip**.
4. Grant the appropriate PakShip user or manager group.
5. Install a provider connector separately when booking or tracking through a
   courier is required.

## Configuration

Open **PakShip → Configuration → Settings** to configure dashboard defaults,
booking-batch controls, connector installers, and **Shipment Item Validation**.
Courier credentials and provider API actions stay on their delivery-method
configuration pages.

## Main workflows

### Review delivery operations

Open **PakShip → Operations → Shipments** to review native Odoo deliveries.
Use the standalone search view to find open shipments, consignments, validation
errors, or completed operational records. The Shipment Items workspace provides
product, quantity, scheduled date, delivery method, tracking, and issue details.

### Validate deliveries from item lines

Enable **Shipment Item Validation** in PakShip settings, select item lines from
the Shipment Items workspace, then use **Actions → Validate Deliveries**. Lines
are grouped by their linked Odoo delivery and standard Odoo picking policies
are respected. The action is provider-neutral and does not call PostEx, TCS, or
another courier API.

### Review consignments and batches

Use **PakShip → Operations → Consignments** and **Booking Batches** to inspect
provider-created records, processing states, label history, failures, and
links back to the native delivery.

## Security and technical notes

The module provides PakShip user and manager groups. Manager-only menus include
settings, cities, and delivery methods. The dashboard and operational menus are
restricted to PakShip users. Multi-company records are scoped by the applicable
company rules and access configuration.

The dashboard's latest shipment table is ordered by Scheduled Date descending,
with record ID as a tie-breaker. Exports use the same ordering. Provider
connectors extend the shared models but own their own authentication and API
behavior.

## Video

The source module manifest and App Store description provide this verified
PakShip/PostEx demonstration:

[Watch “pakship postex” on YouTube](https://youtu.be/Z0aUzEzzzZg)

## Screenshots

The images below are copied unchanged from
`DEApps/dx_pakship/static/description/img/`.

### Dashboard overview

![PakShip dashboard with shipment KPIs, filters, and export actions](pathname:///odoo/18/dx_pakship/screenshots/01_dashboard-overview.png)

_PakShip dashboard with operational filters, refresh, Excel, and PDF actions._

### Shipment search and filters

![PakShip shipment search view with operational delivery filters](pathname:///odoo/18/dx_pakship/screenshots/02_shipment-search-filters.png)

_Shipment search view for operational delivery review._

### Shipment item validation

![PakShip shipment item list showing delivery validation information](pathname:///odoo/18/dx_pakship/screenshots/03_shipment-item-validation.png)

_Shipment Items view showing the delivery issue indicator used before validation._

### Delivery contact correction

![PakShip delivery contact correction dialog with city and mobile fields](pathname:///odoo/18/dx_pakship/screenshots/04_delivery-contact-correction.png)

_Provider-supported delivery contact correction workflow._

## Validation and limitations

- The module's own automated tests cover dashboard and label-related behavior;
  installing the addon in a live database is still required for deployment
  acceptance.
- PakShip does not provide courier booking without a compatible provider
  connector.
- A carrier's credentials, API contract, account permissions, and production
  behavior must be validated independently.

## Related modules

- [PostEx Connector](../dx_postex_connector/)
- [PostEx Shipment Item Enhancements](../de_postex_connector_extend/)
- [TCS Connector](../dx_tcs_connector/)
