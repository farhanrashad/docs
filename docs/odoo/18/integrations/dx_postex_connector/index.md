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

![PostEx delivery method with provider and PakShip settings](pathname:///odoo/18/dx_postex_connector/screenshots/01_delivery-method-configuration.png)

_Configure the PostEx delivery method and booking options._

### API configuration

![PostEx environment, API base URL, token, and synchronization controls](pathname:///odoo/18/dx_postex_connector/screenshots/02_postex-api-configuration.png)

_Choose the environment, enter the approved credentials, and synchronize data._

### Operational cities

![PostEx operational city list](pathname:///odoo/18/dx_postex_connector/screenshots/03_postex-cities.png)

_Review the cities available for delivery addresses._

### Order types

![PostEx order types including normal, reverse, replacement, and overland](pathname:///odoo/18/dx_postex_connector/screenshots/04_postex-order-types.png)

_Choose the appropriate order type for the shipment._

### Shipment

![Odoo delivery shipment with PostEx carrier and tracking information](pathname:///odoo/18/dx_postex_connector/screenshots/05_postex-shipment.png)

_Review the PostEx carrier, shipment, and tracking information._

### Consignment

![PostEx consignment form with tracking, labels, payment, and operational actions](pathname:///odoo/18/dx_postex_connector/screenshots/06_postex-consignment.png)

_Use the consignment page for tracking, labels, payment status, and follow-up._

## Related guides

- [PakShip](../dx_pakship/)
- [PostEx Shipment Items](../de_postex_connector_extend/)
