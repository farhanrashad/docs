[← Back to Home](README.md)

# Workflow

This guide explains how attendance data moves from a ZKTeco biometric device into Odoo attendance records.

---

## Overview

The module uses a queue-based processing mechanism to ensure reliable attendance synchronization and prevent data loss.

Attendance records are first fetched from biometric devices, validated, stored in an intermediate table, and then processed into standard Odoo attendance records.

---

## Attendance Synchronization Flow

```text
ZKTeco Device
      │
      ▼
Fetch Attendance
      │
      ▼
Attendance Records
      │
      ▼
Queue Creation
      │
      ▼
Queue Processing
      │
      ▼
Odoo Attendance
```

---

## Step 1: Fetch Attendance

The system retrieves attendance punches directly from configured biometric devices.

During synchronization:

1. Device connectivity is verified.
2. Attendance logs are downloaded.
3. Employee mappings are validated.
4. Attendance records are created.

The fetched records are stored in the intermediate attendance table before processing.

---

## Step 2: Create Attendance Records

Each punch received from the biometric device is stored as a separate attendance entry.

Example:

| User ID | Date & Time | Attendance Mode |
|----------|------------|----------------|
| 1 | 08:00 | Check In |
| 1 | 12:00 | Check Out |
| 1 | 13:00 | Check In |
| 1 | 17:00 | Check Out |

At this stage, records are waiting for processing.

---

## Step 3: Queue Creation

After attendance records are created, the system automatically generates a processing queue.

The queue serves as a processing batch and keeps attendance synchronization organized and traceable.

Each synchronization operation creates:

- Queue Record
- Queue Lines
- Processing Logs

---

## Step 4: Queue Line Generation

Each attendance record generates a corresponding queue line.

Queue lines store processing information such as:

- Employee
- User ID
- Attendance Date
- Processing Message
- Processing Status

---

## Queue Line States

### Success

Indicates that the attendance record passed validation and is ready for processing.

Examples:

- Employee mapping found
- Attendance data valid

---

### Failed

Indicates that the attendance record could not be processed.

Examples:

- Employee mapping not found
- Invalid attendance data
- Missing employee

Failed queue lines are skipped during attendance processing.

---

## Step 5: Attendance Processing

A scheduled action processes queue records automatically.

Only queue lines with the following status are processed:

```text
Success
```

Failed queue lines are ignored until corrected.

---

## Attendance Conversion Logic

ZKTeco devices store punches individually.

Example:

| Time | Mode |
|--------|--------|
| 08:00 | Check In |
| 12:00 | Check Out |
| 13:00 | Check In |
| 17:00 | Check Out |

Odoo requires paired attendance records.

Therefore, the system converts them into:

| Check In | Check Out |
|-----------|------------|
| 08:00 | 12:00 |
| 13:00 | 17:00 |

Result:

```text
4 Punches → 2 Attendance Records
```

---

## Attendance Pairing Logic

Attendance records are grouped by employee and sorted chronologically.

```text
Attendance Date ASC
```

### Check In

The system stores the check-in punch temporarily.

### Check Out

The next check-out punch is paired with the previous check-in punch.

A new attendance record is then created in Odoo.

---

## Attendance States

Each attendance record can have one of the following states.

### Draft

The attendance has been fetched but has not yet been processed.

---

### Validated

The attendance was successfully converted and inserted into Odoo attendance records.

---

### Conflict

The attendance could not be processed due to a validation issue.

Common reasons include:

- Invalid attendance sequence
- Duplicate attendance
- Validation errors
- Missing attendance pair

---

## Conflict Management

When a conflict occurs:

1. The attendance remains available for review.
2. The state changes to **Conflict**.
3. The reason is recorded for troubleshooting.
4. Other attendance records continue processing normally.

This prevents a single issue from blocking the entire synchronization process.

---

## Queue Completion

A queue is automatically updated after processing.

### Done

The queue is marked as Done when all attendance records have been processed.

Attendance records may be:

- Validated
- Conflict

---

### Failed

The queue is marked as Failed if an unexpected system error occurs during processing.

---

## Automatic Processing

The module includes scheduled actions that automate attendance synchronization.

### Attendance Fetch Cron

Responsible for:

- Connecting to devices
- Downloading attendance logs
- Creating attendance records
- Creating processing queues

---

### Queue Processing Cron

Responsible for:

- Processing queue records
- Pairing attendance punches
- Creating Odoo attendance records
- Updating attendance states

---

## Error Recovery

The queue-based architecture provides safe error handling.

Benefits include:

- No attendance data loss
- Detailed processing logs
- Retry capability
- Conflict tracking
- Reliable synchronization

---

## Workflow Summary

```text
Device Attendance
        │
        ▼
Attendance Fetch
        │
        ▼
Attendance Records
        │
        ▼
Queue Creation
        │
        ▼
Queue Processing
        │
        ▼
Attendance Validation
        │
        ▼
Odoo Attendance
```

---

### Navigation

⬅️ Previous: [Configuration](configuration.md)

➡️ Next: [Architecture](architecture.md)