import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  linkTo?: string;
  showTagline?: boolean;
}

export function Logo({ 
  variant = "full", 
  size = "md", 
  className = "",
  linkTo = "/",
  showTagline = false
}: LogoProps) {
  
  // Size configurations
  const sizes = {
    sm: {
      icon: "h-6 w-6",
      text: "text-lg",
      tagline: "text-[10px]",
      gap: "gap-2"
    },
    md: {
      icon: "h-8 w-8",
      text: "text-xl",
      tagline: "text-xs",
      gap: "gap-2.5"
    },
    lg: {
      icon: "h-12 w-12",
      text: "text-3xl",
      tagline: "text-sm",
      gap: "gap-3"
    }
  };

  const currentSize = sizes[size];

  // Logo Icon Component - Represents "steps" with layered blocks
  const LogoIcon = () => (
    <div className={`relative ${currentSize.icon} shrink-0`}>
      {/* Gradient background circle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-lg rotate-6 opacity-90" />
      
      {/* Steps/Layers representation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1.5">
          {/* Step 1 - Bottom */}
          <rect x="4" y="20" width="8" height="8" rx="1.5" fill="white" fillOpacity="0.5" />
          {/* Step 2 - Middle */}
          <rect x="12" y="14" width="8" height="14" rx="1.5" fill="white" fillOpacity="0.7" />
          {/* Step 3 - Top */}
          <rect x="20" y="8" width="8" height="20" rx="1.5" fill="white" fillOpacity="0.95" />
        </svg>
      </div>
    </div>
  );

  // Logo Text Component
  const LogoText = () => (
    <div className="flex flex-col">
      <div className={`font-bold ${currentSize.text} leading-none tracking-tight`}>
        <span className="text-white">Step</span>
        <span className="text-[#4F46E5]">By</span>
        <span className="text-white">Web</span>
      </div>
      {showTagline && (
        <span className={`${currentSize.tagline} text-slate-400 font-medium tracking-wide mt-0.5`}>
          Belajar Coding Step by Step
        </span>
      )}
    </div>
  );

  // Render based on variant
  const renderLogo = () => {
    if (variant === "icon") {
      return <LogoIcon />;
    }
    
    if (variant === "text") {
      return <LogoText />;
    }
    
    // Full variant
    return (
      <div className={`flex items-center ${currentSize.gap}`}>
        <LogoIcon />
        <LogoText />
      </div>
    );
  };

  // Wrap with Link if linkTo is provided
  if (linkTo) {
    return (
      <Link to={linkTo} className={`inline-flex ${className}`}>
        {renderLogo()}
      </Link>
    );
  }

  return (
    <div className={`inline-flex ${className}`}>
      {renderLogo()}
    </div>
  );
}

// Alternative Logo Design - Code Symbol based
export function LogoCodeSymbol({ 
  size = "md", 
  className = "",
  linkTo = "/"
}: Omit<LogoProps, "variant" | "showTagline">) {
  
  const sizes = {
    sm: { container: "h-6 w-6", text: "text-lg" },
    md: { container: "h-8 w-8", text: "text-xl" },
    lg: { container: "h-12 w-12", text: "text-3xl" }
  };

  const currentSize = sizes[size];

  const LogoContent = () => (
    <div className="flex items-center gap-2.5">
      {/* Code brackets icon */}
      <div className={`relative ${currentSize.container} shrink-0`}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-mono font-bold text-sm">
          {"</>"}
        </div>
      </div>
      
      <div className={`font-bold ${currentSize.text} leading-none`}>
        <span className="text-white">Step</span>
        <span className="text-[#4F46E5]">By</span>
        <span className="text-white">Web</span>
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className={`inline-flex ${className}`}>
        <LogoContent />
      </Link>
    );
  }

  return (
    <div className={`inline-flex ${className}`}>
      <LogoContent />
    </div>
  );
}
