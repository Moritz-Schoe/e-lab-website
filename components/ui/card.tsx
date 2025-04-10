import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@components/lib/utils";

const cardVariants = cva("rounded-xl border py-6 shadow-sm overflow-clip", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      glass:
        "border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white relative",
      "glass-light":
        "border-slate-200 bg-white/80 backdrop-blur-sm hover:border-purple-100 hover:shadow-md text-slate-900 relative",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {}

// Glass effect elements components (for internal use only)
const GlassHighlights = () => (
  <>
    {/* Glass-like top highlight */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/50 to-transparent"></div>
    {/* Glass-like left highlight */}
    <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-purple-300/50 to-transparent"></div>
  </>
);

const GlassHighlightsLight = () => (
  <>
    {/* Glass-like top highlight */}
    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-white/80 via-purple-100/50 to-white/80"></div>
    {/* Glass-like left highlight */}
    <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/80 via-purple-100/50 to-white/80"></div>
  </>
);

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, className }))}
      {...props}
    >
      {variant === "glass" && <GlassHighlights />}
      {variant === "glass-light" && <GlassHighlightsLight />}
      {props.children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("leading-none font-semibold", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
