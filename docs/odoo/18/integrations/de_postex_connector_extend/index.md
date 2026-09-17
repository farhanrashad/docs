---
id: index
title: PostEx Shipment Items
sidebar_label: PostEx Shipment Items
sidebar_position: 30
---

# PostEx Shipment Items

This optional guide explains the extra PostEx information available in the
PakShip Shipment Items screen: delivery city, mobile number, tracking details,
contact correction, and courier-specific filters.

## When to use this page

Use these features when your team needs to correct customer delivery details
before booking or quickly find PostEx items that still need a consignment or
have a delivery issue.

## Shipment item workflow

1. Open **PakShip → Operations → Shipment Items**.
2. Review the customer, city, mobile number, delivery method, tracking
   reference, scheduled date, and status.
3. Use **Open Items** to focus on unfinished items.
4. Use **To Consignment**, **Consignment Done**, or **Validation Errors** to
   focus on PostEx-specific work.
5. Correct the city or mobile number when required.
6. Select the relevant lines and choose **Actions → Validate Deliveries** when
   the delivery is ready for Odoo validation.

The validation action processes each linked Odoo delivery once, even when more
than one item from that delivery is selected. It does not book the PostEx
shipment; booking is handled from the PostEx delivery workflow.

## Correct a delivery contact

Use the correction action when the delivery city or mobile number is wrong:

1. Select the delivery item.
2. Open the correction action.
3. Choose the correct active city.
4. Enter the customer's mobile number in the required format.
5. Save the correction and review the delivery issue again.

If the correction option is not visible, ask your administrator to confirm that
the optional PostEx shipment-item features are enabled.

## Video

[Watch the PakShip/PostEx demonstration on YouTube](https://youtu.be/Z0aUzEzzzZg)

## Screenshot

![PakShip Shipment Items list with PostEx city, mobile, tracking, and issue fields](pathname:///odoo/18/de_postex_connector_extend/screenshots/02_postex-shipment-item-details.png)

_Review PostEx delivery details and correct contact information from the
Shipment Items workspace._

## Related guides

- [PakShip](../dx_pakship/)
- [PostEx Delivery](../dx_postex_connector/)
