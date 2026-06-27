[← Back to Home](README.md)

# Architecture

This document explains the technical architecture, data flow, processing components, and scheduling mechanisms used by the ZKTeco Biometric Attendance Integration module.

---

## Architecture Overview

The module follows a queue-based architecture to ensure reliable attendance synchronization between ZKTeco biometric devices and Odoo.

Instead of directly creating attendance records inside Odoo, attendance data passes through multiple validation and processing stages.

This approach provides:

- Improved reliability
- Better error handling
- Duplicate prevention
- Processing traceability
- Attendance conflict management

---

## High-Level Architecture

```text
ZKTeco Device
      │
      ▼
Attendance Fetch
      │
      ▼
hr.zktecho.attendance
      │
      ▼
hr.zktecho.queue
      │
      ▼
hr.zktecho.queue.line
      │
      ▼
Queue Processing
      │
      ▼
hr.attendance
```

---

## Core Components

The module consists of four primary components.

### Device Management

Responsible for:

- Device registration
- Connectivity management
- TCP communication
- UDP communication
- Attendance retrieval

Model:

```text
hr.zktecho.device
```

---

### Attendance Storage

Stores raw attendance punches received from biometric devices.

Each punch is stored independently before attendance pairing begins.

Model:

```text
hr.zktecho.attendance
```

Responsibilities:

- Store raw attendance logs
- Validate employee mappings
- Prevent duplicate imports
- Track attendance state

---

### Queue Management

Queues are used to process attendance records safely.

Every synchronization operation creates a queue batch.

Model:

```text
hr.zktecho.queue
```

Responsibilities:

- Group attendance records
- Track processing status
- Support error recovery
- Monitor synchronization progress

---

### Queue Line Management

Each attendance record generates an individual queue line.

Model:

```text
hr.zktecho.queue.line
```

Responsibilities:

- Store processing results
- Track validation status
- Record success messages
- Record failure messages

---

## Data Flow

Attendance synchronization follows a multi-stage process.

### Stage 1: Device Communication

The system connects to the biometric device using:

- TCP Protocol
- UDP Protocol

The configured device is queried for attendance logs.

---

### Stage 2: Attendance Retrieval

Attendance punches are downloaded from the biometric device.

Example:

```text
User ID: 1
Timestamp: 2026-01-15 08:00:00
Type: Check In
```

Each punch is stored in the attendance table.

---

### Stage 3: Employee Validation

The system attempts to identify the employee using:

```text
Device User ID
```

and

```text
Employee Mapping
```

If no employee mapping exists:

- Attendance remains unprocessed
- Queue line status becomes Failed

---

### Stage 4: Queue Generation

After attendance records are stored:

1. A queue is created.
2. Queue lines are generated.
3. Processing logs are recorded.

This separates data collection from attendance processing.

---

### Stage 5: Queue Processing

A scheduled action processes all pending queues.

Only queue lines marked as:

```text
Success
```

are processed.

Failed records are skipped.

---

### Stage 6: Attendance Pairing

Attendance punches are grouped by employee.

Records are sorted by:

```text
Attendance Date ASC
```

The system then pairs:

```text
Check In
        +
Check Out
```

to create standard Odoo attendance records.

---

### Stage 7: Odoo Attendance Creation

Validated attendance pairs are inserted into:

```text
hr.attendance
```

This creates standard Odoo attendance records visible within the Attendance application.

---

## Database Models

### hr.zktecho.device

Stores biometric device information.

Key Information:

- Name
- IP Address
- Port
- Protocol
- Password
- Connection State
- Last Sync

---

### hr.employee.device.map

Stores employee mapping information.

Key Information:

- Employee
- Device
- Device User ID

---

### hr.zktecho.attendance

Stores raw attendance punches.

Key Information:

- Employee
- User ID
- Attendance Date
- Attendance Mode
- State
- Reason

---

### hr.zktecho.queue

Stores synchronization batches.

Queue States:

- Draft
- In Progress
- Done
- Failed
- Cancelled

---

### hr.zktecho.queue.line

Stores attendance processing logs.

Queue Line States:

- Success
- Failed

---

## Scheduled Actions

The module uses automated scheduled actions to minimize manual intervention.

---

### Attendance Fetch Cron

Purpose:

- Connect to devices
- Download attendance punches
- Create attendance records
- Create processing queues

Flow:

```text
Device
   │
   ▼
Attendance Records
   │
   ▼
Queue
```

---

### Queue Processing Cron

Purpose:

- Process pending queues
- Pair attendance punches
- Create Odoo attendance
- Update attendance states

Flow:

```text
Queue
   │
   ▼
Queue Lines
   │
   ▼
Attendance Validation
   │
   ▼
hr.attendance
```

---

## State Management

The architecture uses multiple state mechanisms to track progress.

### Attendance States

| State | Description |
|---------|-------------|
| Draft | Waiting for processing |
| Validated | Successfully processed |
| Conflict | Processing issue detected |

---

### Queue States

| State | Description |
|---------|-------------|
| Draft | Waiting for execution |
| In Progress | Currently processing |
| Done | Processing completed |
| Failed | Unexpected processing error |
| Cancelled | Processing cancelled |

---

### Queue Line States

| State | Description |
|---------|-------------|
| Success | Ready for processing |
| Failed | Validation failure |

---

## Error Handling

The architecture includes built-in error management.

Supported scenarios:

- Missing employee mappings
- Invalid attendance sequences
- Duplicate attendance records
- Device communication issues
- Odoo validation errors

Errors are logged without interrupting the processing of valid attendance records.

---

## Benefits of Queue-Based Processing

Compared to direct attendance creation, the queue architecture provides:

- Reliable synchronization
- Detailed logging
- Better performance
- Easier troubleshooting
- Conflict management
- Retry capability
- Data integrity protection

---

## Complete System Flow

```text
ZKTeco Device
      │
      ▼
Fetch Attendance
      │
      ▼
Employee Validation
      │
      ▼
hr.zktecho.attendance
      │
      ▼
Create Queue
      │
      ▼
hr.zktecho.queue
      │
      ▼
hr.zktecho.queue.line
      │
      ▼
Queue Processing Cron
      │
      ▼
Attendance Pairing
      │
      ▼
hr.attendance
```

---

### Navigation

⬅️ Previous: [Workflow](workflow.md)

➡️ Back to: [Home](README.md)