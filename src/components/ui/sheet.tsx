import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";
import * as React from "react";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;

const SheetContent = React.forwardRef(
  (
    { side = "left", className, ...props }: any, // For brevity, type as needed
    ref: React.Ref<HTMLDivElement>
  ) => (
    <SheetPrimitive.Portal>
      <SheetPrimitive.Overlay className="fixed inset-0 z-50 bg-black/30 transition-all duration-300" />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-white shadow-xl outline-none transition-all duration-300 flex flex-col",
          side === "left" &&
            "top-0 left-0 h-full w-72 animate-in -translate-x-full data-[state=open]:translate-x-0",
          side === "right" &&
            "top-0 right-0 h-full w-72 animate-in translate-x-full data-[state=open]:translate-x-0",
          side === "top" &&
            "top-0 left-0 w-full h-72 animate-in -translate-y-full data-[state=open]:translate-y-0",
          side === "bottom" &&
            "bottom-0 left-0 w-full h-72 animate-in translate-y-full data-[state=open]:translate-y-0",
          className
        )}
        {...props}
      >
        {/* Visually hidden title for a11y */}
        <SheetPrimitive.Title className="sr-only">
          Sidebar navigation
        </SheetPrimitive.Title>
        {props.children}
      </SheetPrimitive.Content>
    </SheetPrimitive.Portal>
  )
);
SheetContent.displayName = "SheetContent";

export { Sheet, SheetTrigger, SheetContent };
