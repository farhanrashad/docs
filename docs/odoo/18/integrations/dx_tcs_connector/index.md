---
id: index
title: TCS Delivery
sidebar_label: TCS Delivery
sidebar_position: 40
---

# TCS Delivery

Use this guide to configure TCS delivery methods, prepare shipments, book
consignments, track deliveries, print labels, handle shipper advice, and
review COD settlement information.

## Before you begin

Ask your administrator to install PakShip and the TCS delivery integration.
Obtain the TCS account credentials, customer number, shipper contact, and
cost-center information needed for your company and pickup location.

## Configure a TCS delivery method

1. Open **Inventory → Configuration → Delivery Methods**.
2. Create or open a delivery method and select **TCS Courier**.
3. Select the company and choose **Development / Sandbox** or **Production**.
4. Select a TCS shipper contact.
5. Choose the authentication method provided by TCS:
   - **Static Bearer Token**, or
   - **Generate Bearer Token** with client credentials.
6. Enter the username and password required for the TCS account.
7. Select **Test Connection** before synchronizing data.

Keep sandbox and production credentials separate. When changing the environment,
synchronize the master data for the newly selected environment before booking.

## Synchronize setup information

From the TCS delivery method, run:

1. **Sync Master Data** for cities and other available location information.
2. **Import Cost Centers** for the pickup locations allowed by the account.
3. **Sync Delivery Statuses** so tracking updates can be understood in Odoo.

The shipper city must match the origin registered for the selected cost center.
If a required cost center is missing, ask the TCS account administrator to make
it available and import the list again.

## Prepare and book a delivery

Before booking, confirm:

- customer name and delivery address;
- delivery city available in the active TCS list;
- customer mobile in the required Pakistan format;
- shipper contact and shipper mobile;
- cost center and account information;
- product weight and description; and
- COD amount.

To book one delivery:

1. Open the completed delivery order.
2. Correct any issue shown on the delivery.
3. Select the TCS booking action or **Send to Shipper**.
4. Wait for the background queue to process the request.
5. Confirm that the TCS consignment number is saved as the tracking reference.

When automatic booking is enabled, Odoo queues the booking after delivery
validation. The browser does not need to remain open while the queue works.

## Bulk booking

Bulk booking creates internal batches to organize work. Each delivery is still
sent separately to TCS. Review the batch for pending, booked, failed, and
skipped lines. Use **Retry Failed** after correcting the relevant delivery.

## Tracking, labels, and shipper advice

- Use **Refresh Tracking** on a booked consignment for an immediate update.
- Enable tracking polling when regular background updates are required.
- Print a label after the TCS consignment number is available.
- Use reprint when a label has already been downloaded and stored.
- Use **Shipper Advice** for TCS requests such as address or phone corrections.
- Enter the requested correction and submit the advice, then confirm it is
  marked resolved.

## COD settlement

1. Configure the accounting accounts and journals with your administrator.
2. Open **Inventory → Operations → TCS → COD Reconciliation**.
3. Select the TCS delivery method and date range.
4. Import the settlement information.
5. Review rows matched to local consignments by consignment number.
6. Investigate short-paid, over-deducted, orphan, or returned rows.
7. Post the accounting entries only after the amounts are confirmed.

Booking COD is based on the amount still due when the sale is booked. A fully
paid order has zero COD; a partially paid order uses only the remaining amount.

## Common problems

| Message or symptom | What to check |
| --- | --- |
| Origin does not match cost center | Match the shipper city with the cost-center pickup city. |
| Account field is required | Confirm the TCS account and cost center with the account administrator. |
| Mobile validation fails | Use exactly 11 digits in the `03XXXXXXXXX` format. |
| City not found | Synchronize the active environment and select an available city. |
| No consignment number | Review the delivery status and ask an administrator to check the booking log. |
| Invalid weight | Enter a valid numeric delivery weight. |

## Important behavior

- **Pieces/Flyers** means the number of packages in one shipment. It is not a
  separate booking type.
- Bulk batches organize Odoo work; they do not mean that all deliveries are
  sent in one request.
- TCS account permissions, enabled services, cost centers, and production
  access must be confirmed with TCS.
- No TCS-specific screenshot or verified YouTube video was available in the
  reviewed materials, so this guide does not show an unverified image or link.

## Related guide

- [PakShip](../dx_pakship/)
