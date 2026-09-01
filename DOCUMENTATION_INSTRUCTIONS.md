# Dynexcel Documentation Instructions

This document defines the standard workflow for adding or updating Dynexcel Odoo module documentation.

## Required Reference Information

For each documentation request, provide:

- Odoo version, for example `18` or `19`
- Technical Odoo module name from the module manifest
- Module source folder path
- Documentation/reference file or folder path
- Any required category, workflow, naming or publishing notes

The technical module name must be taken from the actual module source or manifest. Do not invent a technical name from a display title.

## Source Review

Before writing documentation:

1. Inspect the module manifest and confirm its technical name, display name, version and dependencies.
2. Review the module README, models, views, security files, data files, wizards, scheduled actions and workflows relevant to the documented behavior.
3. Read all supplied documentation/reference files completely. Preserve every substantive feature and add useful explanation where the source supports it.
4. Keep Odoo 18 and Odoo 19 content separate. Do not assume that a feature, menu, model or screenshot exists in another version.
5. Mark planned, optional, future or unavailable functionality clearly. Never document unsupported behavior as completed functionality.

## Versioned Location and URLs

Documentation is organized under the versioned portal paths:

```text
docs/odoo/18/<category>/<technical_module_name>/
docs/odoo/19/<category>/<technical_module_name>/
```

The module landing page is `index.md`. The canonical module URL is:

```text
/odoo/<version>/<category>/<technical_module_name>/
```

The left sidebar link text uses the module display name, while the URL uses the exact technical module name. Every module entry must be clickable and must open its module landing page. Sub-pages such as installation, configuration and workflow remain nested below that module.

Add the module to the sidebar for its own Odoo version only. Use the category and nested module structure already defined for that version; do not add a module to another version without source evidence.

## Screenshots and Images

The module's original source files must remain unchanged. For every module:

1. Recursively find every `.png` file under:

   ```text
   <module>/static/description/img/
   ```

2. Copy every PNG into:

   ```text
   assets/odoo/<version>/<technical_module_name>/screenshots/
   ```

3. Preserve the original filename and source ordering. Preserve nested relative folders if duplicate names require them.
4. Display every copied PNG in the relevant module documentation page. Do not copy screenshots without referencing them in Markdown.
5. Use meaningful alt text and a short caption or heading for each screenshot.
6. Use actual module screenshots only. Do not replace missing screenshots with AI-generated images or mockups.
7. Verify the source PNG count, copied PNG count and Markdown reference count before completion.

Recommended Markdown form:

```markdown
### Device configuration

![ZKTeco device configuration](pathname:///odoo/18/de_zkteco_attend/screenshots/1.png)

_Device configuration form in Odoo._
```

## Module Page Structure

Use only sections supported by the source, normally:

- Overview and purpose
- Key features
- Audience and user roles
- Dependencies and prerequisites
- Installation
- Configuration
- Step-by-step workflows
- Screenshots
- Security and access behavior
- Technical notes and data flow
- Troubleshooting and common errors
- Known limitations and Community/Enterprise boundaries
- Validation or test scenarios
- Related modules and future extensions

Keep instructions practical and explain the Odoo menu path, required values, expected result and relevant screenshot for each user workflow.

## Validation Checklist

Before reporting completion:

- Every sidebar module link opens the correct versioned module page.
- The URL contains the correct Odoo version, category and technical module name.
- Odoo 18 and Odoo 19 sidebars are independent.
- Every source PNG is copied and displayed.
- All Markdown links and image paths resolve.
- The documentation site builds successfully with `npm run build`.
- The rendered pages are checked for desktop and mobile layout issues.
- Existing legacy redirects continue to work where configured.
- Only requested documentation, assets, navigation and build files are changed.
- Unrelated working-tree changes are preserved.

## Change Report

The completion report must list:

- Documentation pages added or updated
- Technical module name and Odoo version
- Screenshot source path and number of PNGs copied
- Sidebar/category changes
- Build and link-validation results
- Any source gaps, missing screenshots or unverified behavior

Do not modify module source code unless the user separately requests an implementation change.
