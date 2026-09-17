---
id: index
title: PakShip
sidebar_label: PakShip
sidebar_position: 10
---

# PakShip

PakShip gives delivery teams one place to review Odoo deliveries, shipment
items, consignments, booking batches, dashboard figures, and delivery issues.

## What you can do

- See delivery KPIs by date, company, warehouse, courier, status, city, and
  trend.
- Find open shipments and shipment items with ready-made filters.
- Review tracking references, consignment status, COD figures, and label
  history.
- Check delivery issues before processing selected shipment items.
- Validate selected deliveries together from the Shipment Items screen.
- Export dashboard results to Excel or PDF.

## Before you begin

Your administrator should install PakShip and configure the delivery methods
you use. If you book through a courier, that courier's integration must also be
configured with a valid merchant account.

## First-time setup

1. Open **PakShip → Configuration → Settings**.
2. Set the dashboard defaults used by your team.
3. Configure booking-batch options if your team processes deliveries in
   groups.
4. Enable **Shipment Item Validation** if operators should validate deliveries
   from the Shipment Items screen.
5. Configure courier credentials from the relevant delivery method, not from
   the PakShip dashboard.

## Daily workflow

### Review the dashboard

Open **PakShip → Dashboard**. Choose the date range, company, warehouse,
courier, status, city, and trend view, then select **Apply Filters**. Use the
dashboard table to open the underlying delivery records. The newest scheduled
deliveries appear first.

### Review shipments

Open **PakShip → Operations → Shipments**. Use search and filters to find open
shipments, deliveries waiting for a consignment, completed consignments, or
deliveries with validation issues.

### Review shipment items

Open **PakShip → Operations → Shipment Items**. Review the product, quantity,
delivery address, courier, tracking reference, scheduled date, and status. Use
**Open Items** when you only want unfinished delivery items.

### Validate selected deliveries

1. Enable **Shipment Item Validation** in PakShip settings.
2. Select the required shipment items.
3. Choose **Actions → Validate Deliveries**.
4. Review any issue shown on the delivery and correct the source information.

Selected lines belonging to the same delivery are processed together. This is
a standard Odoo delivery action and does not book a courier shipment by itself.

### Review consignments and batches

Open **PakShip → Operations → Consignments** or **Booking Batches** to review
booking progress, failed deliveries, tracking numbers, label history, and
links back to the original delivery.

## Common checks

- A courier booking requires a configured delivery method and valid courier
  credentials.
- Correct customer address, city, phone, weight, and COD information before
  retrying a failed booking.
- Use the courier guide for provider-specific booking and tracking steps.
- Your administrator controls settings and delivery-method configuration;
  operators normally work from the dashboard and operations screens.

## Video

[Watch the PakShip/PostEx demonstration on YouTube](https://youtu.be/Z0aUzEzzzZg)

## Screenshots

### Dashboard overview

![PakShip dashboard filters with the highlighted view controls](pathname:///odoo/18/dx_pakship/screenshots/05_dashboard-filters-annotated.png)

_Set the dashboard filters, then apply the selected view._

### Shipment search and filters

![PakShip shipment search filters with the highlighted operational filters](pathname:///odoo/18/dx_pakship/screenshots/06_shipment-search-filters-annotated.png)

_Use operational filters to find the required shipments._

### Shipment item validation

![PakShip shipment item validation dialog with the highlighted delivery issue](pathname:///odoo/18/dx_pakship/screenshots/07_shipment-item-validation-annotated.png)

_Review the delivery issue before validating the selected item._

### Delivery contact correction

![PakShip delivery contact correction dialog with the highlighted city and mobile fields](pathname:///odoo/18/dx_pakship/screenshots/08_delivery-contact-correction-annotated.png)

_Correct the city and mobile details from the delivery dialog._

## Related guides

- [PostEx Delivery](../dx_postex_connector/)
- [PostEx Shipment Items](../de_postex_connector_extend/)
- [TCS Delivery](../dx_tcs_connector/)
