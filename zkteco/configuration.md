# Configuration

This guide explains how to configure ZKTeco biometric devices and employee mappings after installing the module.

---

## Device Configuration

To connect a biometric device with Odoo, navigate to:

```text
Attendance → Configuration → Devices
```

Create a new device and provide the required information.

### Device Fields

| Field | Description |
|---------|-------------|
| Name | Device name for identification |
| IP Address | Device IP address |
| Port | Communication port |
| Password | Device communication password |
| Protocol | TCP or UDP |
| Timeout | Connection timeout value |
| Omit Ping | Skip device ping validation |
| Attendance Mode | Attendance processing mode |
| State | Current device status |
| Last Sync | Last attendance synchronization time |

---

## Example Configuration

| Field | Value |
|---------|---------|
| Name | Main Office Device |
| IP Address | 192.168.1.100 |
| Port | 4370 |
| Protocol | TCP |
| Password | 0 |

---

## Test Connection

After entering the device information, click:

```text
Test Connection
```

The system will attempt to connect to the biometric device and verify communication settings.

### Successful Connection

If the connection is successful:

- Device status is updated
- Communication is verified
- Attendance fetching becomes available

### Failed Connection

Verify:

- Device IP Address
- Port Number
- Device Password
- Network Connectivity
- Firewall Rules

---

## Employee Mapping

Before attendance can be processed, biometric users must be linked with Odoo employees.

Navigate to:

```text
Attendance → Configuration → Employee Device Mapping
```

Create a mapping for each biometric user.

---

## Mapping Fields

| Field | Description |
|---------|-------------|
| Device | Selected biometric device |
| Employee | Odoo employee |
| Device User ID | User ID stored on the biometric device |

---

## Example Mapping

| Device User ID | Employee |
|----------------|----------|
| 1 | John Doe |
| 2 | Jane Smith |
| 3 | Michael Brown |

---

## Why Employee Mapping Is Required

Biometric devices store attendance using user IDs.

Example:

```text
User ID: 1
Punch Time: 2026-01-15 08:00:00
```

The system uses employee mappings to identify which Odoo employee belongs to the biometric user ID.

Without a valid mapping, attendance records cannot be processed.

---

## Attendance Fetch Configuration

Once devices and employee mappings are configured:

1. Verify device connectivity.
2. Verify employee mappings.
3. Run attendance synchronization.
4. Review fetched attendance records.

The system will automatically create attendance entries in the intermediate attendance table before processing them into Odoo attendance records.

---

## Configuration Checklist

Before proceeding, ensure the following items are completed:

- Device created
- Device connection tested
- Employee mappings created
- Network connectivity verified
- Scheduled actions enabled

---

## Next Step

Continue with the Workflow Guide:

➡️ [Workflow Guide](workflow.md)