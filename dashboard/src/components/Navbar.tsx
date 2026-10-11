"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Bell, Sparkles } from "lucide-react";
import { AlertsPopover } from "./AlertsPopover";
import { OperatorCopilotDrawer } from "./OperatorCopilotDrawer";
import { CopilotData } from "@/lib/data";

interface NavbarProps {
  copilotData?: CopilotData | null;
}

export function Navbar({ copilotData }: NavbarProps) {
  const pathname = usePathname();
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);

  const isLive = pathname === "/" || pathname === "/live";
  const isDecisions = pathname.startsWith("/decision");
  const isEvaluation = pathname === "/evaluation";
  const isTwin = pathname === "/twin";
  const isFlexibility = pathname === "/flexibility";
  const isTestDrive = pathname === "/testdrive";
  const isAbout = pathname === "/about";

  const navItems = [
    { label: "Live", href: "/live", active: isLive },
    { label: "Decisions", href: "/decisions", active: isDecisions },
    { label: "Evaluation", href: "/evaluation", active: isEvaluation },
    { label: "Twin", href: "/twin", active: isTwin },
    { label: "Flexibility", href: "/flexibility", active: isFlexibility },
    { label: "Test Drive", href: "/testdrive", active: isTestDrive },
    { label: "About", href: "/about", active: isAbout },
  ];

  return (
    <>
      <header className="relative z-50 w-full px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/live" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-11 h-11 flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-navy-800 drop-shadow-md stroke-slate-700/60 transition group-hover:stroke-nudge-gold/60"
              fill="currentColor"
              strokeWidth="3"
            >
              <polygon points="50 3, 93 25, 93 75, 50 97, 7 75, 7 25" />
            </svg>
            <Zap className="absolute w-5 h-5 text-nudge-gold fill-nudge-gold/80 transition transform group-hover:scale-110" />
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
              GridNudge
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                v2.0
              </span>
            </span>
          </div>
        </Link>

        {/* Segmented Navigation Tabs */}
        <nav className="hidden lg:flex items-center p-1 rounded-full bg-navy-800/90 border border-slate-700/50 backdrop-blur-md shadow-lg overflow-x-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                item.active
                  ? "bg-[#253952] text-white shadow-md font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Simulation status, Copilot & notifications */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Simulation Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-800/80 border border-slate-700/50 backdrop-blur-md text-[11px] font-mono tracking-wider text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SIMULATION · SAMPLE DATA</span>
          </div>

          {/* Copilot Launcher Button */}
          <button
            type="button"
            onClick={() => setIsCopilotOpen(true)}
            aria-label="Open Operator Copilot"
            title="Ask Copilot: Decision explainability & scenario injector"
            className="px-3 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Copilot</span>
          </button>

          {/* Alerts Bell */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsAlertsOpen(!isAlertsOpen)}
              aria-label="System notifications"
              className="relative w-9 h-9 rounded-full bg-navy-800/80 border border-slate-700/50 hover:border-slate-500 flex items-center justify-center text-slate-300 hover:text-white transition shadow-sm"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 ring-2 ring-navy-900" />
            </button>

            <AlertsPopover
              isOpen={isAlertsOpen}
              onClose={() => setIsAlertsOpen(false)}
            />
          </div>
        </div>
      </header>

      {/* Operator Copilot Drawer */}
      <OperatorCopilotDrawer
        isOpen={isCopilotOpen}
        onClose={() => setIsCopilotOpen(false)}
        copilotData={copilotData}
      />
    </>
  );
}
