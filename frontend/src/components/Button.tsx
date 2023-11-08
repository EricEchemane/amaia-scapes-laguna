import { cn } from '@/lib/utils';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className }: Props) {
  return (
    <button
      className={cn(
        'bg-[#FFB20C] text-neutral-950 font-bold py-2 px-5 rounded-full text-sm hover:bg-[#ffca57] active:scale-[.98] transition-all duration-100',
        className
      )}
    >
      {children}
    </button>
  );
}
