# 🧠 TechnoSys Project Memory & Comprehensive Conversation History
> **Notice to Future Antigravity Agents**:  
> Read this document completely at the start of any new session or task. This file captures all design decisions, user preferences, historical changes, bug fixes, and architectural standards established across all previous development conversations.

---

## 🏢 1. Project Overview & Architecture
* **System Name**: TechnoSys HRIS & Field Operations System
* **Client / Company**: TechnoCycle Corporation (Commercial HVAC & Engineering Services)
* **Repositories**:
  * **Admin Web App**: `C:\Users\jhank\Projects\technosys-admin`
  * **Mobile App (Technicians)**: `C:\Users\jhank\Projects\technosys-mobile`
* **Active Git Branch**: `glorycode24/combined-features`
* **Git Remotes**:
  * `origin`: `https://github.com/glorycode24/technosys-admin.git` (and mobile equivalent)
  * `upstream`: `https://github.com/Azirielle/technosys-admin.git` (and mobile equivalent)
* **Tech Stack**:
  * Next.js 16.2 (App Router & Turbopack), React 19, TypeScript, Tailwind CSS v4, Lucide React
  * Leaflet & React-Leaflet for live GPS fleet tracking
  * Supabase PostgreSQL, Supabase Realtime Channels (`postgres_changes`), Supabase Auth & Storage

---

## 👥 2. Roles & Access Control
1. **Chief Executive Officer (CEO)**: System Overrides, Executive Telemetry, Company-wide Audit Activities, Universal Broadcaster.
2. **Human Resources (HR)**: 201 Files, Leave Approvals, Support Ticketing Canvas, Warnings, Universal Broadcaster.
3. **Field Operations Coordinator**: Live Fleet Tracking Map, Dispatch Board, Casual Helpers & Senior Crew Pairing, Equipment Vault, Universal Broadcaster.
4. **Accountant**: Attendance & DTR Audit Logs, Payroll Calculations (Zero Payroll Rule), Time-log Auditable Corrections, Universal Broadcaster.
5. **Field Technician (Mobile App)**: GPS Clock In/Out with Geofencing & Photo Overrides, Dispatches, Schedules, Tool Custody, Payslips, Support Chat, Announcements.

---

## 📐 3. Established Design System & UI Standards

### A. Uniform Modals & Blur Backdrops
* **Rule**: Modals must NEVER render inside parent layout containers that clip or bleed background elements.
* **Standard**: All major dialogs and confirmation modals use React Portals (`createPortal(..., document.body)`) rendered at `z-[9999]` with uniform `backdrop-blur-md` and `bg-slate-900/60` background.
* **Reason**: Prevents sticky table headers (`z-10`), floating pills, or search bars from poking through the blur overlay during actions like Logout or Deletion.

### B. Paginated Tables Standardization
* **Rule**: Every paginated table across ALL roles must strictly follow this exact layout:
  * Table format: `table-fixed` with percentage widths, `[scrollbar-gutter:stable]`, 34px row density.
  * Bottom pagination bar:
    * Left side: `Showing X to Y of Z results` in muted text.
    * Right side: `Prev`, active numerical page buttons (e.g. `1 2 3`), and `Next`.
* **Standardized Across**: HR 201 Files, Accountant Audit Logs, CEO Admin Activities, and HR Ticketing/Leaves.

### C. Dynamic Audit Logging (`src/lib/auditLogger.ts`)
* Every admin action MUST call `logAdminActivity()`.
* Time displays must NEVER be hardcoded static strings. All timestamps use dynamic relative time (`formatRelativeTime(isoString)`) backed by a 30-second interval ticker.

### D. Universal Broadcaster Module
* Available across all 4 admin roles at `/[role]/announcements`.
* Supports Priority Badges:
  * `🔴 Urgent Alert` (`urgent`)
  * `🔵 Policy Notice` (`policy`)
  * `🟢 General Notice` (`normal`)
* Includes edit transparency: When an admin edits a broadcast, it stores `is_edited = true`, `updated_at`, and `last_edited_by`, displaying an attributed tag: `✏️ Edited by [Name] ([Role])`.
* Provides delete confirmation modal with CEO audit logger integration.

---

## 📱 4. Mobile App Integration Standards
* **Two-Option Language Toggle**: English (🇺🇸 ENG) and Filipino / Tagalog (🇵🇭 FIL). **Japanese (`ja`) was explicitly removed per user request.**
* **Persistent Preferences**: Language and Theme are persisted in `AsyncStorage` and synced with Supabase `profiles.user_preferences`.
* **Notification Read Persistence**: When a user reads an announcement or clicks "Mark all read", the read IDs are stored in `AsyncStorage` (`@read_notification_ids` / `READ_NOTIFS_${userId}`). The red unread dot will **not** reappear after page refresh or re-login.
* **Realtime Sync**: Supabase Realtime Channel subscribes to `public:announcements` so newly broadcasted announcements appear instantly on mobile without requiring logout/login.
