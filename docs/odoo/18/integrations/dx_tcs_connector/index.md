---
id: index
title: TCS Connector
sidebar_label: TCS Connector
sidebar_position: 40
---

# TCS Connector

`dx_tcs_connector` provides the Odoo 18 TCS delivery integration foundation
and operational workflow. It covers authentication, delivery-method
configuration, master data, booking, tracking, labels, shipper advice, and
COD settlement/reconciliation records.

## Source details

| Item | Value |
| --- | --- |
| Technical module | `dx_tcs_connector` |
| Version reviewed | `18.0.1.2.89` |
| Source folder | `DEApps/dx_tcs_connector` |
| Category | Inventory / Delivery |
| License | LGPL-3 |

## Dependencies and installation

The module depends on `dx_pakship`, standard Odoo stock, delivery, sales,
accounting, and mail components.

1. Install or upgrade `dx_pakship`.
2. Install `dx_tcs_connector`.
3. Create a delivery method under **Inventory → Configuration → Delivery
   Methods**.
4. Select **TCS Courier**, the correct company, and the correct sandbox or
   production environment.
5. Configure a dedicated TCS shipper contact and credentials.
6. Test the connection before synchronizing master data.

## Authentication and environment

Authentication is stored per TCS delivery method. The connector supports:

- **Static Bearer Token**, using the configured bearer token;
- **Generate Bearer Token**, using the configured client ID and client secret;
- username/password authentication for the ECOM access token; and
- per-delivery-method cached tokens and expiry values.

The source guide identifies sandbox and production root hosts, then derives
the `/ecom` and `/tracking` operation paths. Tokens are masked in the UI and
redacted from API logs. When switching environments, synchronize the selected
environment's master data before booking.

## Master data setup

From the TCS delivery method, run **Sync Master Data**, **Import Cost Centers**,
and **Sync Delivery Statuses**. Cost centers are required for booking, and the
shipper/origin city must match the cost-center origin. City, route, country,
status, cost-center, company, and environment records are kept within the
connector's source-supported boundaries.

## Booking workflow

Before booking, confirm the delivery contact, TCS city, Pakistan-format mobile,
shipper contact, shipper city, cost center, account code, weight, and COD.
COD is based on the remaining amount due on the related sale order: fully paid
orders produce zero COD, while partially paid orders use the remaining balance.

For a single delivery, use the TCS booking action or **Send to Shipper**. The
connector queues the request, stores the returned consignment number as the
tracking reference, and retains a failure reason when the provider rejects the
booking. Automatic booking after validation is asynchronous.

Bulk booking creates internal Odoo batches; each delivery is still sent as an
individual TCS booking request. Failed lines can be retried without stopping
the remaining lines in a batch.

## Tracking, labels, and shipper advice

Booked consignments can refresh tracking manually or through the scheduled
polling flow. A TCS label PDF is downloaded and stored after a consignment
number exists; subsequent reprints use the stored attachment. Batch label PDFs
contain successful booked labels only.

Shipper Advice is used for TCS tickets such as delivery address or phone
corrections. Pending tickets can be synchronized, edited with the returned TCS
action/detail values, submitted, and marked resolved in Odoo.

## COD reconciliation and audit trail

Payment Detail rows are imported over the configured date range and matched to
local consignments by CN. Reconciliation classifies matched, short-paid,
over-deducted, orphan, and returned rows according to the source workflow.
Configured accounting accounts and journals can be used for COD clearing,
courier expense, input tax, withholding tax, and settlement entries.

Each consignment can retain multiple API logs. Review the request timestamp,
operation, endpoint, redacted payload, response, state, error, and trace ID
when diagnosing a failed booking or retry.

## Important limitations

- The connector uses the API's `pieces` booking value; a separate user-entered
  flyer field is not implemented.
- Internal bulk batches do not imply that TCS receives one multi-delivery HTTP
  request.
- Route availability depends on the selected TCS endpoint and account.
- Account-specific product access, cost-center permissions, and production
  enablement must be confirmed with TCS.
- No TCS-specific screenshot or verified YouTube video is present in the
  reviewed module source, so none is fabricated here.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Origin does not match cost center | Match the shipper city to the selected cost-center origin. |
| Account field is required | Import or configure a valid 3–12 character TCS account value. |
| Mobile validation fails | Use exactly `03XXXXXXXXX` with 11 digits. |
| City not found | Synchronize the correct environment and select an active TCS city. |
| No consignment number | Review the API Log request, response, and TCS trace ID. |
| Invalid weight | Ensure the delivery weight is a valid numeric decimal. |

## Detailed source guide

The source repository contains the complete workflow and API-boundary guide at
`DEApps/docs/TCS_CONNECTOR_WORKFLOW.md`, including the supplied TCS manuals and
Postman collection references. Those provider documents remain the contract
source for account-specific behavior.
