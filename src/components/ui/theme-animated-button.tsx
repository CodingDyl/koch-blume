import React from 'react';
import { cn } from "@/lib/utils";

interface ThemeAnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'steel-blue' | 'deep-navy' | 'cyan' | 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const ThemeAnimatedButton = React.forwardRef<HTMLButtonElement, ThemeAnimatedButtonProps>(
  ({ children, variant = 'steel-blue', size = 'md', className, ...props }, ref) => {
    const baseClasses = "relative group cursor-pointer overflow-hidden rounded-md flex justify-center items-center font-extrabold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantClasses = {
      'steel-blue': "text-white bg-steel-blue hover:bg-steel-blue/90 focus:ring-steel-blue",
      'deep-navy': "text-white bg-deep-navy hover:bg-deep-navy/90 focus:ring-deep-navy",
      'cyan': "text-white bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-500",
      'primary': "text-sky-50 bg-sky-800 hover:bg-sky-700 focus:ring-sky-500",
      'secondary': "text-slate-50 bg-slate-800 hover:bg-slate-700 focus:ring-slate-500"
    };
    
    const sizeClasses = {
      sm: "h-12 w-48 text-sm px-4",
      md: "h-16 w-64 text-base px-6", 
      lg: "h-20 w-80 text-lg px-8"
    };

    const circleClasses = {
      'steel-blue': {
        outer: "bg-steel-blue/80",
        mid1: "bg-steel-blue/70",
        mid2: "bg-steel-blue/60", 
        inner: "bg-steel-blue/50"
      },
      'deep-navy': {
        outer: "bg-deep-navy/80",
        mid1: "bg-deep-navy/70",
        mid2: "bg-deep-navy/60",
        inner: "bg-deep-navy/50"
      },
      'cyan': {
        outer: "bg-cyan-600/80",
        mid1: "bg-cyan-500/70",
        mid2: "bg-cyan-400/60",
        inner: "bg-cyan-300/50"
      },
      'primary': {
        outer: "bg-sky-900",
        mid1: "bg-sky-800",
        mid2: "bg-sky-700",
        inner: "bg-sky-600"
      },
      'secondary': {
        outer: "bg-slate-900",
        mid1: "bg-slate-800",
        mid2: "bg-slate-700",
        inner: "bg-slate-600"
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

ThemeAnimatedButton.displayName = "ThemeAnimatedButton";

export { ThemeAnimatedButton };
