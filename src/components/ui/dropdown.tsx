"use client";
import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuContent = React.forwardRef(
  (
    {
      className,
      ...props
    }: React.ComponentPropsWithRef<typeof DropdownMenuPrimitive.Content>,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        ref={ref}
        className={cn(
          "z-50 min-w-[180px] overflow-hidden rounded-md border border-gray-200 bg-white p-1 text-gray-950 shadow-md",
          className
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
);
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuLabel = DropdownMenuPrimitive.Label;
const DropdownMenuItem = DropdownMenuPrimitive.Item;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;
const DropdownMenuSeparator = DropdownMenuPrimitive.Separator;
export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
};
