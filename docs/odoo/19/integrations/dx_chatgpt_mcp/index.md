---
id: index
title: ChatGPT / Codex MCP for Odoo
sidebar_label: ChatGPT / Codex MCP
sidebar_position: 10
---

# ChatGPT / Codex MCP for Odoo

`dx_chatgpt_mcp` connects approved ChatGPT-, Codex-, and other
MCP-compatible clients to Odoo 19 Community through one native addon. Each
client is mapped to an internal Odoo user, so that user's ACLs, field access,
record rules, and allowed companies remain the final authorization layer.

## What this module does

- Exposes a JSON-RPC MCP endpoint for approved clients.
- Provides curated Project and Task tools for search, reading, creation,
  assignment, stage changes, comments, activities, subtasks, dependencies,
  dashboards, and supported timesheets.
- Provides generic model tools for installed persistent Odoo models when the
  mapped user is allowed to use them.
- Supports **User Access** mode and an optional **Model Access** mode with
  model and field allowlists.
- Tracks MCP sessions and writes immutable request audit logs.
- Uses Draft and Confirmed client states and one-time readable token dialogs.

The module does not expose arbitrary Odoo methods, SQL, or unrestricted
user-supplied domains through MCP.

## Who should use it

This module is intended for Odoo administrators, project managers, and
integration owners who need controlled AI-assisted access to Odoo data. Use a
dedicated internal Odoo user for each integration and grant only the business
permissions that the client actually needs.

## Requirements and dependencies

- Odoo 19 Community.
- The `dx_chatgpt_mcp` addon available in the server `addons_path`.
- Odoo `base_setup`, which is the module dependency declared by this addon.
- An internal Odoo user mapped to the MCP client.
- HTTPS for non-local connections.
- An MCP client that supports a JSON-RPC MCP endpoint and custom Bearer
  authorization headers.

Project and Task tools are advertised when the Odoo Project models are
installed and accessible. Generic model tools may still be available without
the Project application. Timesheet tools are conditional on the required
`account.analytic.line` model and fields being available.

## Installation

1. Add the repository containing `dx_chatgpt_mcp` to Odoo's `addons_path`.
2. Restart Odoo if the addon path was changed.
3. Enable developer mode.
4. Open **Settings → Technical → ChatGPT**.
5. Install **Odoo ChatGPT MCP**.

The administration menu is available to system administrators and users in
the module's **MCP Manager** group.

## Create and confirm a client

Open **Settings → Technical → ChatGPT → Clients** and create a client.

| Field | Recommended value |
| --- | --- |
| Client Name | A unique name such as `Operations ChatGPT` or `Project Codex`. |
| Client Type | ChatGPT, Codex, or Custom MCP Client. |
| Odoo User | A dedicated internal user with least-privilege access. |
| Access Mode | **User Access** to follow the mapped user's permissions, or **Model Access** for configured allowlists. |
| State | **Draft** while configuring; **Confirmed** when ready to connect. |

Then:

1. Save the client in Draft.
2. Select **Rotate Token**.
3. Copy the token shown in the **New MCP Token** dialog immediately.
4. Store it in the client's protected secret configuration.
5. Close the dialog and select **Confirm**.

Odoo stores a token hash, not the readable credential. Keep the token private;
do not place it in Git, documentation, or a shared public configuration file.
Rotating a token invalidates the previous token and revokes the client's
existing MCP sessions. Confirmed clients are locked against ordinary edits and
cannot be deleted while Confirmed.

![Annotated Odoo MCP client configuration form](pathname:///odoo/19/dx_chatgpt_mcp/screenshots/01_client-configuration.png)

_Configure the client type, mapped Odoo user, access mode, lifecycle controls,
sessions, and audit history._

## Connect the MCP client

Use the following endpoint and header in the approved MCP client:

```text
MCP URL: https://YOUR-ODOO/dx_chatgpt_mcp/mcp
Authorization: Bearer dxmcp_REPLACE_WITH_PRIVATE_TOKEN
```

For a client using JSON configuration:

```json
{
  "mcpServers": {
    "odoo-projects": {
      "url": "https://YOUR-ODOO/dx_chatgpt_mcp/mcp",
      "headers": {
        "Authorization": "Bearer dxmcp_REPLACE_WITH_PRIVATE_TOKEN"
      }
    }
  }
}
```

The client should call `initialize`, save the returned `Mcp-Session-Id`
header, send `notifications/initialized`, call `tools/list`, and start with a
safe read through `tools/call`. Sessions expire eight hours after creation.

For an unauthenticated service check:

```text
GET https://YOUR-ODOO/dx_chatgpt_mcp/health
```

The health response reports `status: "ok"` when the Odoo route is available;
it does not replace an authenticated MCP handshake test.

Some hosted ChatGPT connector deployments require OAuth for remote MCP
servers. Bearer headers alone do not satisfy an OAuth-only deployment; that
case requires a separately implemented OAuth feature.

## Access modes

### User Access

This is the recommended starting mode. Generic model discovery follows the
mapped user's normal Odoo ACLs, field access, record rules, and allowed
companies. The client cannot elevate those permissions.

### Model Access

Use this mode when the client must be restricted to an explicit set of models
and fields. Open **Settings → Technical → ChatGPT → Model Policies** and create
one active policy per installed persistent model.

Configure the allowed operations and technical field names:

- Read fields returned by record reads.
- Search fields accepted by safe searches.
- Create fields accepted for record creation.
- Write fields accepted for updates.
- Optional unlink permission, which is disabled by default.

For example: `id,display_name,name,company_id`.

Model policies can narrow access but never bypass the mapped user's ACLs,
field access, record rules, or company restrictions.

## Available tools

The exact tools returned by `tools/list` depend on installed Odoo features and
the mapped user's permissions.

### Project and Task

| Tool | Purpose |
| --- | --- |
| `list_projects` / `get_project` | Find and read accessible projects. |
| `search_tasks` / `get_task` | Search and read accessible tasks with safe fixed filters. |
| `create_project` / `create_task` | Create projects and tasks when Odoo permissions allow it. |
| `update_task_stage` | Move a task to an accessible stage. |
| `assign_task` | Replace task assignees. |
| `update_task_fields` | Update supported task fields, including priority, deadline, and tags. |
| `add_task_comment` / `create_activity` | Add chatter follow-up and schedule activities. |
| `list_subtasks` / `create_subtask` | Review and create task subtasks. |
| `list_dependencies` / `update_dependencies` | Read and update task dependencies. |
| `project_dashboard` / `task_dashboard` | Return project and task summaries. |

### Timesheets

| Tool | Purpose |
| --- | --- |
| `list_timesheets` | Read timesheets by task or project. |
| `log_timesheet` | Add a positive timesheet entry, up to 24 hours per call. |

These tools are hidden when the required timesheet model or fields are not
available.

### Generic Odoo models

| Tool | Purpose |
| --- | --- |
| `list_models` | List installed persistent models available to the mapped user. |
| `search_records` | Search an allowed model using safe filters. |
| `get_record` | Read one accessible record. |
| `create_record` / `update_record` | Create or update records with typed permitted values. |
| `delete_record` | Delete only with unlink permission and explicit confirmation. |

Tool inputs reject unknown arguments, technical model names are validated, and
list limits are capped at 100 records per call.

## Administration and audit review

Use the client smart buttons or **Settings → Technical → ChatGPT → Audit Logs**
to review requests. Audit entries record the client, mapped user/company, MCP
method, tool name, status, request id, duration, and bounded request/response
summaries. Audit logs are append-only and cannot be edited or deleted through
the model.

![Annotated Odoo MCP active sessions list](pathname:///odoo/19/dx_chatgpt_mcp/screenshots/02_active-sessions.png)

_Review session state, expiry, and last-seen time._

![Annotated Odoo MCP audit trail](pathname:///odoo/19/dx_chatgpt_mcp/screenshots/03_audit-trail.png)

_Review successful and failed MCP methods, tool names, and request duration._

![Annotated Odoo ChatGPT administration menu](pathname:///odoo/19/dx_chatgpt_mcp/screenshots/04_chatgpt-administration.png)

_Open Clients, Model Policies, Audit Logs, and related technical views._

## Recommended rollout

1. Create a dedicated internal user with read-only business access.
2. Connect over HTTPS and verify `health`, `initialize`, and `tools/list`.
3. Read one known project, task, or approved model record.
4. Confirm the matching Audit Log entry.
5. Enable only the required write permissions.
6. Test one controlled create/update operation in a non-production database.
7. Verify the resulting Odoo record and audit entry before production use.

![Example ChatGPT/Codex conversation with Odoo](pathname:///odoo/19/dx_chatgpt_mcp/screenshots/05_chatgpt-odoo-conversation.png)

_Example interaction showing Odoo data retrieval, task creation, and a project
summary. Actual results depend on the mapped user's permissions and database._

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `401` invalid token | Confirm the client is active and Confirmed, and use the latest token after rotation. |
| `401` invalid session | Run `initialize` again and send the new `Mcp-Session-Id`. |
| Project tools are missing | Confirm Odoo Project is installed and the mapped user can access `project.project` and `project.task`. |
| Generic tools are missing | Confirm the mapped user can access at least one persistent model, or activate a valid Model Access policy. |
| A write is forbidden | Check ACLs, field access, record rules, company access, and the Model Access policy. |
| A field is rejected | Use the technical field name and confirm it is a supported stored writable field for create/write. |
| Timesheet tools are missing | Confirm `account.analytic.line` exposes task, project, and unit amount fields. |
| Hosted ChatGPT cannot connect | Check whether the deployment requires OAuth-only remote MCP. |

## Known limitations and validation

- Bearer-token authentication is implemented; OAuth authorization-server
  support is not included in this module.
- Timesheet tools are conditional on the target database's installed models and
  fields.
- Generic access always remains subject to the mapped user's Odoo security.
- A successful AI response is not proof of a business write; verify the record
  in Odoo and review its audit entry.
- Production rollout requires installation/upgrade, HTTPS, MCP handshake,
  read/write, permission, and audit tests against the real target database.

## Related documentation

- [Odoo 19 Integrations](../)
- [Odoo 19 Home](../../)
