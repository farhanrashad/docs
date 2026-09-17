---
id: index
title: Delivery and Courier Integrations
sidebar_label: Delivery and Courier Integrations
sidebar_position: 20
---

# Delivery and Courier Integrations

This section documents Dynexcel Odoo 18 Community delivery and courier addons
from the DEApps source repository. The pages distinguish the courier-neutral
PakShip workspace from provider-specific connectors and optional companion
addons.

## Modules

| Module | Purpose |
| --- | --- |
| [PakShip](dx_pakship/) | Shared delivery operations, shipment views, dashboard analytics, validation, and COD-ready records. |
| [PostEx Connector](dx_postex_connector/) | PostEx COD booking, tracking, labels, payment status, and operational master data. |
| [PostEx Shipment Item Enhancements](de_postex_connector_extend/) | Optional PostEx columns, correction tools, and shipment-item filters. |
| [TCS Connector](dx_tcs_connector/) | TCS authentication, delivery configuration, booking, tracking, labels, shipper advice, and reconciliation workflows. |

## Integration boundary

Install `dx_pakship` as the shared delivery workspace when a connector depends
on it. Provider credentials and API calls remain in the relevant connector.
The PostEx companion addon is optional and adds only PostEx-specific shipment
item enhancements.

These pages describe the current source checkout on the Odoo 18 branch. API
access, merchant permissions, sandbox credentials, production enablement, and
carrier-specific account limits still require confirmation with the relevant
provider.
