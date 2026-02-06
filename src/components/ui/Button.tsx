import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D37B07] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1321] disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-[#D37B07] text-[#0D1321] hover:bg-[#E8920F] shadow-lg hover:shadow-xl": variant === "primary",
                        "bg-[#1A233B] text-[#FFFAF1] hover:bg-[#232F4B] border border-[#FFFAF1]/10": variant === "secondary",
                        "bg-transparent text-[#FFFAF1] hover:bg-[#FFFAF1]/10": variant === "ghost",
                        "bg-transparent text-[#FFFAF1] border border-[#FFFAF1]/20 hover:border-[#D37B07]/50 hover:bg-[#D37B07]/10": variant === "outline",
                    },
                    {
                        "h-9 px-4 text-sm rounded-lg": size === "sm",
                        "h-11 px-6 text-base rounded-xl": size === "md",
                        "h-14 px-8 text-lg rounded-2xl": size === "lg",
                    },
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
