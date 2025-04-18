"use client";
import Link from "next/link";
import { useAuth } from "../../lib/authContext";
import { useState } from "react";
import { Menu, User, LogOut, Settings, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown";

export default function DashboardHeader({
  onMenuClick,
}: {
  onMenuClick?: () => void;
}) {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full z-20 flex items-center justify-between border-b bg-white px-4 py-2 shadow-sm sticky top-0">
      {/* Left: Logo/Website Title */}
      <div className="flex items-center gap-2">
        {onMenuClick && (
          <button
            className="mr-2 flex md:hidden rounded p-2 hover:bg-orange-50 focus:outline-none"
            aria-label="Open Menu"
            onClick={onMenuClick}
          >
            <Menu size={24} className="text-orange-500" />
          </button>
        )}
        <Link
          href="/"
          className="font-extrabold text-orange-500 text-xl tracking-tight select-none"
        >
          Mythic Arena
        </Link>
      </div>
      {/* Right: Profile Dropdown */}
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="focus:outline-none">
          <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold text-lg">
            {user?.name ? (
              user.name.charAt(0).toUpperCase()
            ) : (
              <User size={22} />
            )}
            <ChevronDown
              size={16}
              className="absolute -right-4 top-1/2 -translate-y-1/2 text-gray-400 md:hidden"
            />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuLabel className="font-semibold">
            {user?.name || "User"}
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center text-center w-full gap-2">
              <User className="mr-2 w-4 h-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center text-center w-full gap-2">
              <Settings className="mr-2 w-4 h-4" /> Account Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={logout}
              className="flex items-center text-center w-full gap-2 text-red-500 focus:text-red-600"
            >
              <LogOut className="mr-2 w-4 h-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
