import React from 'react';
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ children, variant = 'primary', size = 'md', className, ...props }, ref) => {
    const baseClasses = "relative group cursor-pointer overflow-hidden rounded-md flex justify-center items-center font-extrabold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantClasses = {
      primary: "text-sky-50 bg-sky-800 hover:bg-sky-700 focus:ring-sky-500",
      secondary: "text-slate-50 bg-slate-800 hover:bg-slate-700 focus:ring-slate-500",
      outline: "text-sky-800 bg-transparent border-2 border-sky-800 hover:bg-sky-50 focus:ring-sky-500"
    };
    
    const sizeClasses = {
      sm: "h-12 w-48 text-sm px-4",
      md: "h-16 w-64 text-base px-6",
      lg: "h-20 w-80 text-lg px-8"
    };

    const circleClasses = {
      primary: {
        outer: "bg-sky-900",
        mid1: "bg-sky-800", 
        mid2: "bg-sky-700",
        inner: "bg-sky-600"
      },
      secondary: {
        outer: "bg-slate-900",
        mid1: "bg-slate-800",
        mid2: "bg-slate-700", 
        inner: "bg-slate-600"
      },
      outline: {
        outer: "bg-sky-900",
        mid1: "bg-sky-800",
        mid2: "bg-sky-700",
        inner: "bg-sky-600"
      }
    };

    const circles = circleClasses[variant];

    return (
      <button
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {/* Animated Circles */}
        <div className={`absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ${circles.outer}`} />
        <div className={`absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ${circles.mid1}`} />
        <div className={`absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ${circles.mid2}`} />
        <div className={`absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 ${circles.inner}`} />
        
        {/* Button Content */}
        <span className="z-10 relative">{children}</span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton };
