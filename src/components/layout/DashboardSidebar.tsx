"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  DollarSign,
  Settings,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const navLinks = [
  { icon: <LayoutDashboard size={20} />, name: "Dashboard", href: "/admin" },
  { icon: <Users size={20} />, name: "Users", href: "/admin?tab=users" },
  {
    icon: <Calendar size={20} />,
    name: "Tournaments",
    href: "/admin?tab=tournaments",
  },
  { icon: <FileText size={20} />, name: "Reports", href: "/admin?tab=reports" },
  {
    icon: <DollarSign size={20} />,
    name: "Payouts",
    href: "/admin?tab=payouts",
  },
  {
    icon: <Settings size={20} />,
    name: "Settings",
    href: "/admin?tab=settings",
  },
];

export default function DashboardSidebar({
  mobileOpen,
  onMobileClose,
}: {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}) {
  const pathname = usePathname();
  // Desktop sidebar
  return (
    <aside className="hidden md:flex md:flex-col w-[230px] min-h-[calc(100vh-56px)] border-r bg-white pt-6 sticky top-[56px]">
      <nav className="flex flex-col gap-1 px-6">
        {navLinks.map((link) => (
          <Link
            href={link.href}
            key={link.name}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium text-base ${
              pathname === link.href
                ? "bg-orange-100 text-orange-700"
                : "hover:bg-orange-50 text-gray-700"
            }`}
          >
            {link.icon}
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

// Mobile sidebar (Sheet in parent, opened by DashboardHeader hamburger)
export function DashboardSidebarMobile({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[220px] p-0">
        <nav className="flex flex-col gap-1 pt-6 px-4">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium text-base ${
                pathname === link.href
                  ? "bg-orange-100 text-orange-700"
                  : "hover:bg-orange-50 text-gray-700"
              }`}
              onClick={onClose}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
