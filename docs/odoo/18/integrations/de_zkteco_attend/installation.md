# Installation

This guide explains how to install and configure the ZKTeco Biometric Attendance Integration module in Odoo.

---

## Prerequisites

Before installing the module, ensure that the following requirements are met.

### Odoo Dependencies

The following Odoo modules must be installed:

- hr
- hr_attendance

---

## Python Dependency

This module requires the **pyzk** library to communicate with ZKTeco biometric devices.

Install the dependency using:

```bash
pip install pyzk
```

For Docker deployments, add the package to your requirements file and rebuild the container.

---

## Module Installation

### Step 1: Copy the Module

Place the module inside your Odoo custom addons directory.

Example:

```text
custom_addons/
└── zkteco_attendance
```

---

### Step 2: Update Apps List

Navigate to:

```text
Apps → Update Apps List
```

Refresh the application list so Odoo can detect the new module.

---

### Step 3: Install the Module

Search for:

```text
ZKTeco Biometric Attendance Integration
```

Click **Install**.

---

## Verify Installation

After successful installation, the following configuration menus will become available:

```text
Attendance
├── Configuration
│   ├── Devices
│   └── Employee Device Mapping
```

---

## Post Installation

After installing the module:

1. Configure one or more biometric devices.
2. Create employee-device mappings.
3. Test the device connection.
4. Configure scheduled actions if required.
5. Start fetching attendance records.

---

## Next Step

Continue with the Configuration Guide:

➡️ [Configuration Guide](configuration.md)