---
id: index
title: PostEx Shipment Item Enhancements
sidebar_label: PostEx Shipment Item Enhancements
sidebar_position: 30
---

# PostEx Shipment Item Enhancements

`de_postex_connector_extend` is an optional Odoo 18 companion addon for
PostEx-specific information in the PakShip Shipment Items workspace. It adds
delivery city and mobile columns, a quick delivery-contact correction action,
and PostEx-specific consignment and validation filters.

## Source details

| Item | Value |
| --- | --- |
| Technical module | `de_postex_connector_extend` |
| Version reviewed | `18.0.1.2.1` |
| Source folder | `DEApps/de_postex_connector_extend` |
| Category | Inventory / Delivery |
| License | Odoo Proprietary License v1.0 (`OPL-1`) |

## Dependencies and installation

Install these modules first:

- `dx_pakship` for the shared shipment workspace and generic validation;
- `dx_postex_connector` for PostEx delivery fields and booking state; and
- Odoo `sale_stock` for sales-delivery relationships.

Then install `de_postex_connector_extend`, restart Odoo, and refresh browser
assets after the upgrade. Existing PostEx booking, tracking, cancellation,
labels, payment status, and reconciliation-ready workflows remain in
`dx_postex_connector`.

## User workflow

Open **PakShip → Operations → Shipment Items**. The companion addon adds
PostEx-specific filters beneath the shared **Open Items** filter:

- **To Consignment**;
- **Consignment Done**; and
- **Validation Errors**.

The list can show the PostEx delivery city, mobile number, delivery method,
tracking reference, and the shared delivery issue indicator. Use the correction
action to select an active PostEx city and update the delivery mobile number.
Generic **Actions → Validate Deliveries** remains owned by `dx_pakship`; it
groups selected item lines by native Odoo delivery and does not call the PostEx
API.

## Scope boundary

This addon does not provide a second validation engine or a separate validation
setting. Enable **Shipment Item Validation** in PakShip settings when the
generic item-line validation action is required. PostEx credentials, booking,
tracking, and API operations remain on the PostEx delivery method and
`dx_postex_connector`.

## Video

The verified source video demonstrates the shared PakShip/PostEx workflow:

[Watch “pakship postex” on YouTube](https://youtu.be/Z0aUzEzzzZg)

## Screenshot

The image below is copied unchanged from
`DEApps/de_postex_connector_extend/static/description/img/`.

### Shipment item details and correction affordance

![PakShip Shipment Items list with PostEx city, mobile, tracking, and issue fields](pathname:///odoo/18/de_postex_connector_extend/screenshots/02_postex-shipment-item-details.png)

_PostEx-specific shipment item details layered onto the PakShip workspace._

## Related modules

- [PakShip](../dx_pakship/)
- [PostEx Connector](../dx_postex_connector/)
