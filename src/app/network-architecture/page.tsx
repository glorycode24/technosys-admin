'use client';

import React from 'react';
import Link from 'next/link';
import {
  Smartphone,
  Monitor,
  Globe,
  Lock,
  ShieldCheck,
  Layers,
  Cpu,
  Radio,
  Database,
  HardDrive,
  MapPin,
  KeyRound,
  Network,
  ArrowDown,
  Printer,
  ChevronLeft,
  Zap,
  FileCheck,
  ShieldAlert,
  Activity,
  Compass,
} from 'lucide-react';

export default function NetworkArchitecturePage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-blue-600 selection:text-white pb-20">
      {/* Background Engineering Dot Matrix Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle, #475569 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Presentation Bar (Hidden during print) */}
      <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition"
          >
            <ChevronLeft className="w-4 h-4" />
            Return to Portal
          </Link>
          <div className="h-4 w-px bg-zinc-700" />
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h1 className="text-sm font-bold tracking-wider uppercase text-zinc-200">
                TechnoSys Network Topology
              </h1>
            </div>
            <p className="text-xs text-zinc-400">
              Commercial HVAC & Field Operations System Architecture
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 text-[11px] font-mono text-zinc-400 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800">
            <span className="text-emerald-400">TLS 1.3</span>
            <span>•</span>
            <span className="text-cyan-400">WSS:443</span>
            <span>•</span>
            <span className="text-amber-400">PostgreSQL 15 RLS</span>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Print / Save to PDF
          </button>
        </div>
      </header>

      {/* Main Diagram Container */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* Title Header Banner */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" /> High-Level System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            TechnoSys Distributed Network Architecture
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-400 max-w-3xl mx-auto">
            End-to-end communication topology illustrating client runtimes, transport security,
            microservice gateways, real-time WebSocket conduits, and database Row Level Security.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* ZONE 1: CLIENT EDGE & DEVICES */}
        {/* ========================================================================= */}
        <section className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 shadow-xl mb-6 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 text-xs font-bold font-mono">
                01
              </span>
              <h3 className="text-base font-bold text-zinc-200 tracking-wide uppercase">
                Zone 1: Client Edge & User Endpoints
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
              Untrusted Public WAN Perimeter
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mobile Client Card */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-5 hover:border-zinc-700 transition relative group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Technician Mobile App</h4>
                    <p className="text-xs text-zinc-400 font-mono">Expo React Native (Android / iOS)</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800">
                  FIELD ACTIVE
                </span>
              </div>

              <div className="mt-4 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-zinc-400" />
                  <span><strong>Hardware Sensors:</strong> High-Accuracy GPS Radio & Camera Sensor</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-zinc-400" />
                  <span><strong>Security:</strong> Secure Keyring / AsyncStorage Token Persistence</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-zinc-400" />
                  <span><strong>Capabilities:</strong> Geofenced Attendance, Dispatch Logs, Offline Caching</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Egress Protocol:</span>
                <span className="text-emerald-400">HTTPS / TLS 1.3 & WSS</span>
              </div>
            </div>

            {/* Admin Web Client Card */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-5 hover:border-zinc-700 transition relative group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Monitor className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Admin Management Portal</h4>
                    <p className="text-xs text-zinc-400 font-mono">Next.js 16 Client Runtime (React 19)</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800">
                  OFFICE WORKSTATION
                </span>
              </div>

              <div className="mt-4 space-y-2 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span><strong>Role Tenancy:</strong> CEO, HR Manager, Ops Coordinator, Accountant</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span><strong>Telemetry UI:</strong> Interactive Leaflet GIS Fleet Tracking & Geofences</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span><strong>Operations:</strong> DTR Corrections, Payroll Audit, Universal Broadcaster</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Egress Protocol:</span>
                <span className="text-emerald-400">HTTPS / TLS 1.3 & WSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSIT CONDUIT CONNECTOR 1 -> 2 */}
        <div className="flex justify-center my-2">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-md text-xs font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Lock className="w-3.5 h-3.5" /> HTTPS / TLS 1.3 (Port 443)
            </span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Radio className="w-3.5 h-3.5" /> WSS Secure WebSockets
            </span>
            <ArrowDown className="w-4 h-4 text-zinc-400" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ZONE 2: INGRESS, EDGE GATEWAY & GIS */}
        {/* ========================================================================= */}
        <section className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 shadow-xl mb-6 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 text-xs font-bold font-mono">
                02
              </span>
              <h3 className="text-base font-bold text-zinc-200 tracking-wide uppercase">
                Zone 2: Ingress, Edge Gateway & External Services
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
              Edge Demilitarized Zone (DMZ)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vercel Edge Proxy */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-5 hover:border-zinc-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Edge CDN & Reverse Proxy</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">Vercel Anycast Network</p>
                </div>
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                <li>Automated TLS 1.3 Termination</li>
                <li>DDoS Mitigation & Edge Caching</li>
                <li>Dynamic App Router Routing</li>
                <li>Asset Optimization & Minification</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] font-mono text-purple-400 flex items-center justify-between">
                <span>Ingress:</span>
                <span>Port 443 (Anycast)</span>
              </div>
            </div>

            {/* Next.js Server Runtime (BFF) */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-5 hover:border-zinc-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Next.js Server Runtime</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">Backend-for-Frontend (BFF)</p>
                </div>
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                <li>Server Actions & Route Handlers</li>
                <li>Server-Side Rendering (SSR)</li>
                <li>Service Role Privileged Operations</li>
                <li>Secure Cookie & Session Interceptor</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] font-mono text-blue-400 flex items-center justify-between">
                <span>Runtime:</span>
                <span>Node.js / Edge Worker</span>
              </div>
            </div>

            {/* GIS Tile Server CDN */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-5 hover:border-zinc-700 transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Geospatial Tile Services</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">OpenStreetMap / CartoDB CDN</p>
                </div>
              </div>
              <ul className="text-xs text-zinc-300 space-y-1.5 list-disc list-inside">
                <li>Map Tile Slippy Cache Delivery</li>
                <li>Base Map Rendering for Leaflet</li>
                <li>Coordinate Projection (EPSG:3857)</li>
                <li>High-availability Tile Delivery</li>
              </ul>
              <div className="mt-4 pt-3 border-t border-zinc-900 text-[11px] font-mono text-teal-400 flex items-center justify-between">
                <span>Protocol:</span>
                <span>HTTPS REST / Tile Cache</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRANSIT CONDUIT CONNECTOR 2 -> 3 */}
        <div className="flex justify-center my-2">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-md text-xs font-mono">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <KeyRound className="w-3.5 h-3.5" /> Bearer JWT Claims Injection
            </span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1.5 text-purple-400 font-bold">
              <Network className="w-3.5 h-3.5" /> Direct RESTful PostgREST
            </span>
            <ArrowDown className="w-4 h-4 text-zinc-400" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ZONE 3: SUPABASE CLOUD APPLICATION SERVICES */}
        {/* ========================================================================= */}
        <section className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 shadow-xl mb-6 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 text-xs font-bold font-mono">
                03
              </span>
              <h3 className="text-base font-bold text-zinc-200 tracking-wide uppercase">
                Zone 3: Application Services & Microservices
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-800/60">
              Supabase Managed Engine (PaaS Perimeter)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* GoTrue Auth Daemon */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-4 hover:border-zinc-700 transition">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <KeyRound className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">GoTrue Auth Daemon</h4>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 mb-2">Endpoint: /auth/v1</p>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• Asymmetric JWT Signing</li>
                <li>• Refresh Token Rotation</li>
                <li>• Role Metadata Injection</li>
                <li>• Multi-Role Session Vault</li>
              </ul>
            </div>

            {/* PostgREST Gateway */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-4 hover:border-zinc-700 transition">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Network className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">PostgREST Gateway</h4>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 mb-2">Endpoint: /rest/v1</p>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• REST-to-SQL Dynamic Compiler</li>
                <li>• Zero-ORM JSON Serialization</li>
                <li>• Atomic ACID Transactions</li>
                <li>• Built-in Schema Inspection</li>
              </ul>
            </div>

            {/* Realtime Engine */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-4 hover:border-zinc-700 transition">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Radio className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Realtime Engine</h4>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 mb-2">Endpoint: /realtime/v1 (Elixir)</p>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• postgres_changes Publisher</li>
                <li>• Urgent Broadcast Channel</li>
                <li>• Live GPS Telemetry Sync</li>
                <li>• Multi-Tenant Channel Isolation</li>
              </ul>
            </div>

            {/* S3 Object Storage */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-4 hover:border-zinc-700 transition">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <HardDrive className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">S3 Object Storage</h4>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 mb-2">Endpoint: /storage/v1</p>
              <ul className="text-xs text-zinc-300 space-y-1">
                <li>• Multipart Binary Ingestion</li>
                <li>• Presigned Upload URLs</li>
                <li>• CDN Edge Cached Delivery</li>
                <li>• Strict MIME Type Validation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TRANSIT CONDUIT CONNECTOR 3 -> 4 */}
        <div className="flex justify-center my-2">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-md text-xs font-mono">
            <span className="flex items-center gap-1.5 text-red-400 font-bold">
              <ShieldAlert className="w-3.5 h-3.5" /> Row-Level Security (RLS) Filter
            </span>
            <span className="text-zinc-600">|</span>
            <span className="flex items-center gap-1.5 text-zinc-300 font-bold">
              <Database className="w-3.5 h-3.5" /> PgBouncer Pooled Wire Protocol
            </span>
            <ArrowDown className="w-4 h-4 text-zinc-400" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ZONE 4: DATA PERSISTENCE & SECURITY BOUNDARY */}
        {/* ========================================================================= */}
        <section className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 shadow-xl mb-10 backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-zinc-800/80">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold font-mono">
                04
              </span>
              <h3 className="text-base font-bold text-zinc-200 tracking-wide uppercase">
                Zone 4: Data Persistence & Security Boundary
              </h3>
            </div>
            <span className="text-xs font-mono text-red-400 bg-red-950/40 px-2.5 py-1 rounded-md border border-red-800/60 flex items-center gap-1">
              <Lock className="w-3 h-3" /> Strict Protected Perimeter
            </span>
          </div>

          {/* RLS Security Guard Banner */}
          <div className="mb-6 rounded-xl bg-gradient-to-r from-red-950/40 via-zinc-950 to-zinc-950 border border-red-900/40 p-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  PostgreSQL Row-Level Security (RLS) Gatekeeper
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-900/50 text-red-300 border border-red-700">
                    ZERO TRUST POLICY
                  </span>
                </h4>
                <p className="mt-1 text-xs text-zinc-300 leading-relaxed">
                  Every incoming query carries the authenticated user&apos;s JWT with their verified role claim 
                  (<code className="text-amber-300 bg-zinc-900 px-1 py-0.5 rounded">auth.jwt() -&gt; &apos;user_role&apos;</code>). 
                  Database policies evaluate each operation dynamically, guaranteeing that Field Technicians only see their dispatches, 
                  HR manages employee records, Accountants calculate audited payroll, and the CEO oversees universal operations.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Relational Database Core */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-5 hover:border-zinc-700 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">PostgreSQL 15 Relational Engine</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">WAL Replication & Transaction Logs</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800 text-zinc-300">
                  <span className="text-blue-400 font-semibold">• profiles</span>
                  <p className="text-[10px] text-zinc-400 font-sans">Role, Auth ID, Language, Theme</p>
                </div>
                <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800 text-zinc-300">
                  <span className="text-blue-400 font-semibold">• attendance_logs</span>
                  <p className="text-[10px] text-zinc-400 font-sans">GPS Geofence, Time-in/out, Selfie</p>
                </div>
                <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800 text-zinc-300">
                  <span className="text-blue-400 font-semibold">• announcements</span>
                  <p className="text-[10px] text-zinc-400 font-sans">Universal Broadcaster, Priority</p>
                </div>
                <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800 text-zinc-300">
                  <span className="text-blue-400 font-semibold">• dispatches</span>
                  <p className="text-[10px] text-zinc-400 font-sans">Crew Pairing, Tool Custody, Status</p>
                </div>
                <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800 text-zinc-300">
                  <span className="text-blue-400 font-semibold">• audit_logs</span>
                  <p className="text-[10px] text-zinc-400 font-sans">Immutable CEO Telemetry & DTR Edits</p>
                </div>
                <div className="bg-zinc-900/80 p-2 rounded border border-zinc-800 text-zinc-300">
                  <span className="text-blue-400 font-semibold">• payroll_records</span>
                  <p className="text-[10px] text-zinc-400 font-sans">Zero Payroll Rules, Calculations</p>
                </div>
              </div>
            </div>

            {/* Object Storage Buckets */}
            <div className="rounded-xl bg-zinc-950/80 border border-zinc-800/90 p-5 hover:border-zinc-700 transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">S3 Object Storage Buckets</h4>
                  <p className="text-[11px] text-zinc-400 font-mono">Encrypted Persistent Blobs</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-purple-300 font-bold">bucket: attendance_proofs/</span>
                    <span className="text-[10px] text-zinc-400">Strict RLS</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 font-sans">
                    Captured field selfies verifying technician physical presence for geofence override requests.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-purple-300 font-bold">bucket: avatars/</span>
                    <span className="text-[10px] text-zinc-400">Public Read</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 font-sans">
                    User profile pictures rendered across the admin workstation headers and mobile app drawer.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-purple-300 font-bold">bucket: ticket_attachments/</span>
                    <span className="text-[10px] text-zinc-400">Restricted HR</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 font-sans">
                    Photos, PDFs, and incident reports uploaded during support ticketing and grievance handling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PROTOCOL CONDUIT & STREAM LEGEND */}
        {/* ========================================================================= */}
        <section className="rounded-2xl bg-zinc-900/40 border border-zinc-800/80 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-blue-400" />
            <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider">
              Network Protocol & Conduit Legend
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/80 border border-emerald-900/40">
              <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              <div>
                <p className="text-xs font-bold text-emerald-400 font-mono">HTTPS (Port 443)</p>
                <p className="text-[10px] text-zinc-400">RESTful CRUD & Auth Calls</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/80 border border-cyan-900/40">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              <div>
                <p className="text-xs font-bold text-cyan-400 font-mono">WSS (Port 443)</p>
                <p className="text-[10px] text-zinc-400">Realtime GPS & Alerts</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/80 border border-amber-900/40">
              <span className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_8px_#f59e0b]" />
              <div>
                <p className="text-xs font-bold text-amber-400 font-mono">Bearer JWT</p>
                <p className="text-[10px] text-zinc-400">RS256 Signature & Claims</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/80 border border-purple-900/40">
              <span className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
              <div>
                <p className="text-xs font-bold text-purple-400 font-mono">S3 Binary I/O</p>
                <p className="text-[10px] text-zinc-400">Photo Proofs & Avatars</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-950/80 border border-red-900/40">
              <span className="w-3 h-3 rounded-full bg-red-400 shadow-[0_0_8px_#f87171]" />
              <div>
                <p className="text-xs font-bold text-red-400 font-mono">RLS Boundary</p>
                <p className="text-[10px] text-zinc-400">Role Tenancy Isolation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer info */}
        <footer className="mt-8 text-center text-xs text-zinc-400 font-mono">
          TechnoCycle Corporation • TechnoSys Operational Telemetry & Infrastructure Architecture
        </footer>
      </main>

      {/* Print-specific style adjustments */}
      <style jsx global>{`
        @media print {
          @page {
            size: landscape;
            margin: 0.5cm;
          }
          body {
            background-color: #09090b !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          header, button {
            display: none !important;
          }
          main {
            padding-top: 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
