---
id: index
title: PostEx Delivery
sidebar_label: PostEx Delivery
sidebar_position: 20
---

# PostEx Delivery

Use this guide to configure PostEx delivery methods and manage COD shipments
from Odoo: booking, tracking, cancellation, labels, payment status, and
delivery follow-up.

## Before you begin

Ask your administrator to install PakShip and the PostEx integration. Obtain
the merchant token, the correct sandbox or production access, and a pickup
address from PostEx.

## Configure PostEx

1. Open **Inventory → Configuration → Delivery Methods**.
2. Create or open a delivery method.
3. Select **PostEx** as the provider.
4. Select the company and choose **Sandbox** or **Production**.
5. Enter the PostEx API token supplied for that environment.
6. Select **Test Connection**.
7. Synchronize operational cities, pickup addresses, and order types.
8. Select the pickup address used for shipments.
9. Configure automatic booking, tracking polling, booking batches, label
   printing, and COD matching according to your operating process.

Use a custom API address only when PostEx has supplied and approved it. Never
share the merchant token in screenshots or support messages.

## Book a shipment

1. Open the outgoing delivery order.
2. Confirm that the PostEx delivery method is selected.
3. Check the customer name, address, city, mobile number, products, weight,
   and COD amount.
4. Validate the delivery using the normal Odoo process or the PakShip
   **Validate Deliveries** action.
5. Select **Queue PostEx Booking**, or use automatic booking if enabled.
6. Open the consignment after processing and confirm the tracking number.

Each delivery is processed as an individual PostEx order. If a booking fails,
correct the delivery information and retry it from the delivery or queue.

## Track, cancel, and print

- Refresh tracking from the delivery or consignment when you need the latest
  courier status.
- Enable scheduled tracking when your team wants regular background updates.
- Use the consignment actions to print the airway bill/invoice or generate a
  load sheet.
- Cancel a shipment only according to your PostEx operating process.
- Use reverse or replacement order types when the shipment requires them.
- Review payment status after delivery so the COD record stays up to date.

## If booking fails

Check these items before retrying:

- the environment matches the token;
- the token is active and has booking permission;
- the pickup address and operational city are synchronized;
- the customer's city and mobile number are valid;
- the COD amount, weight, and delivery address are complete; and
- the delivery is not already booked or cancelled.

If the error continues, ask an administrator to review the delivery's API log
and confirm the merchant account permissions with PostEx.

## Video

[Watch the PakShip/PostEx demonstration on YouTube](https://youtu.be/Z0aUzEzzzZg)

## Screenshots

### Delivery method configuration

![PostEx delivery method configuration with the highlighted booking options](pathname:///odoo/18/dx_postex_connector/screenshots/07_delivery-method-configuration-annotated.png)

_Configure the delivery method and booking options._

### API configuration

![PostEx API configuration with the highlighted connection and synchronization controls](pathname:///odoo/18/dx_postex_connector/screenshots/08_postex-api-configuration-annotated.png)

_Test the connection and synchronize PostEx master data._

### Operational cities

![PostEx city master with the highlighted synchronized city list](pathname:///odoo/18/dx_postex_connector/screenshots/09_postex-cities-annotated.png)

_Review the synchronized PostEx city master._

### Order types

![PostEx order types with the highlighted available shipment types](pathname:///odoo/18/dx_postex_connector/screenshots/10_postex-order-types-annotated.png)

_Review the order types available for PostEx shipments._

### Shipment

![PostEx shipment with the highlighted tracking reference and order type](pathname:///odoo/18/dx_postex_connector/screenshots/11_postex-shipment-annotated.png)

_Review the shipment tracking reference and order type._

### Consignment

![PostEx consignment with the highlighted tracking, labels, and COD controls](pathname:///odoo/18/dx_postex_connector/screenshots/12_postex-consignment-annotated.png)

_Manage tracking, labels, and COD status from the consignment._

## Related guides

- [PakShip](../dx_pakship/)
- [PostEx Shipment Items](../de_postex_connector_extend/)
