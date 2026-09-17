# TechnoSys Admin Workspace Rules & Context
> This rule is automatically loaded by Antigravity for every conversation in this workspace.

## Key Directives:
1. **Branch**: Always work on branch `glorycode24/combined-features`.
2. **Context**: Refer to `PROJECT_MEMORY.md` in the project root for full design history, roles, and architecture.
3. **Modals**: Always render modals via React Portal at `document.body` with `z-[9999]` and `backdrop-blur-md` to avoid sticky header bleed.
4. **Tables**: Every paginated table must feature `table-fixed`, percentage column widths, and the standardized bottom pagination bar (`Showing X to Y of Z results` on left, `Prev / 1 2 3 / Next` on right).
5. **Audit Logging**: Any administrative update or override must call `logAdminActivity()` in `src/lib/auditLogger.ts`.
6. **Broadcaster**: The Universal Broadcaster component is mounted across CEO, HR, Field Coordinator, and Accountant roles with priority badges and edit attribution.
