import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-70";
  
  const variants = {
    primary: "bg-[var(--accent)] text-[#1a1917] hover:brightness-110 shadow-[0_4px_14px_var(--accent-bg)]",
    secondary: "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:shadow-sm",
    outline: "border border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}