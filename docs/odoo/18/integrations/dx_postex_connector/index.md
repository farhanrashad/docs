---
id: index
title: PostEx Connector
sidebar_label: PostEx Connector
sidebar_position: 20
---

# PostEx Connector

`dx_postex_connector` is the Odoo 18 PostEx merchant COD connector built on
the shared PakShip shipment layer. It provides delivery-method configuration,
authentication, city and pickup-address synchronization, order types, booking,
tracking, cancellation, labels, payment status, shipper advice, and
reconciliation-ready records.

## Source details

| Item | Value |
| --- | --- |
| Technical module | `dx_postex_connector` |
| Version reviewed | `18.0.1.20.0` |
| Source folder | `DEApps/dx_postex_connector` |
| Category | Inventory / Delivery |
| License | Odoo Proprietary License v1.0 (`OPL-1`) |

## Dependencies and installation

The connector depends on `dx_pakship`, standard Odoo delivery and stock
components, `account`, `mail`, and `sale_stock`.

1. Install or upgrade `dx_pakship` first.
2. Install `dx_postex_connector`.
3. Create a delivery method under **Inventory → Configuration → Delivery
   Methods**.
4. Choose **PostEx** as the provider and assign the correct company.
5. Configure the environment and token before synchronizing provider masters.

`de_postex_connector_extend` is optional. It adds PostEx-specific columns,
correction tools, and filters to PakShip Shipment Items; it does not own generic
delivery validation.

## Configuration

On the PostEx tab of the delivery method:

- choose **Sandbox** or **Production**;
- enter the merchant token in **PostEx API Token**;
- use the default environment URL or a contract-approved custom API base URL;
- test the connection;
- synchronize operational cities, merchant pickup addresses, and order types;
- select the pickup address;
- configure automatic booking, tracking polling, booking batch size, labels,
  and COD matching options as required.

The connector sends the token in the `token` header. The current implementation
uses the PostEx integration host and the internal routes documented in the
DEApps `POSTEX_API_CONTRACT.md` guide. Account-specific merchant permissions
and production access remain provider-side prerequisites.

## Workflow

1. Confirm the outgoing Odoo delivery has a PostEx delivery method and a valid
   customer delivery address.
2. Validate the delivery through standard Odoo validation or use the PakShip
   **Validate Deliveries** action.
3. Queue **PostEx Booking**, or enable automatic booking after validation.
4. Let the background queue process each delivery as an individual order.
5. Review the saved tracking number and consignment record.
6. Refresh tracking and payment status manually or through the configured cron.
7. Print the airway bill/invoice or load sheet when the provider response is
   available.
8. Review failures on the delivery and retry after correcting the source data.

The connector supports operational city and pickup-address synchronization,
booking, tracking, cancellation, reverse/replacement order flows, labels,
payment-status synchronization, and reconciliation-ready order rows. Automatic
account-level settlement posting is not claimed without a current merchant
settlement-detail contract.

## API operation boundary

The implementation guide records these operations: operational cities,
merchant addresses, order types, create order, tracking, bulk tracking,
unbooked orders, order listing, load sheets, airway bills/invoices, shipper
advice, cancellation, payment status, and order statuses. Merchant write
operations such as address creation and shipper-advice updates require
account-specific UAT before production claims are made.

## Security and troubleshooting

Access is inherited through the PakShip and standard stock/account security
model. Keep merchant tokens out of screenshots, source control, and logs.

For a failed booking, check the delivery contact, city, mobile number, COD,
pickup address, environment, token, and API log. Confirm that the token belongs
to the selected sandbox or production host. A successful local unit test does
not prove that the merchant account is authorized to book in production.

## Video

The verified source video is a combined PakShip/PostEx demonstration:

[Watch “pakship postex” on YouTube](https://youtu.be/Z0aUzEzzzZg)

## Screenshots

The images below are copied unchanged from
`DEApps/dx_postex_connector/static/description/img/`.

### Delivery method configuration

![PostEx delivery method with provider and PakShip settings](pathname:///odoo/18/dx_postex_connector/screenshots/01_delivery-method-configuration.png)

_PostEx delivery method configuration and shared PakShip options._

### API configuration

![PostEx environment, API base URL, token, and synchronization controls](pathname:///odoo/18/dx_postex_connector/screenshots/02_postex-api-configuration.png)

_PostEx environment and API configuration._

### Operational cities

![PostEx operational city master synchronized for a delivery method](pathname:///odoo/18/dx_postex_connector/screenshots/03_postex-cities.png)

_Synchronized PostEx operational cities._

### Order types

![PostEx order types including normal, reverse, replacement, and overland](pathname:///odoo/18/dx_postex_connector/screenshots/04_postex-order-types.png)

_Provider order types available for shipment workflows._

### PostEx shipment

![Odoo delivery shipment with PostEx carrier and tracking information](pathname:///odoo/18/dx_postex_connector/screenshots/05_postex-shipment.png)

_PostEx delivery record with shipment and tracking fields._

### PostEx consignment

![PostEx consignment form with tracking, labels, payment, and operational actions](pathname:///odoo/18/dx_postex_connector/screenshots/06_postex-consignment.png)

_Consignment operations and financial summary._

## Related modules

- [PakShip](../dx_pakship/)
- [PostEx Shipment Item Enhancements](../de_postex_connector_extend/)
