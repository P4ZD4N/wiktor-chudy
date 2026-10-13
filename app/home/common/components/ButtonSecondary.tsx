import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonSecondaryProps {
  text: string;
  href: string;
  icon?: ReactNode;
}

export default function ButtonSecondary({
  text,
  href,
  icon,
}: ButtonSecondaryProps) {
  return (
    <Link
      href={href}
      className="
        group relative inline-flex items-center justify-center gap-2 
        px-6 py-3 lg:px-8 lg:py-3.5 
        text-sm lg:text-base font-semibold text-gray-300 
        bg-white/5 rounded-xl backdrop-blur-sm
        border border-white/10 shadow-lg
        hover:bg-white/10 hover:text-white hover:border-white/20 
        hover:-translate-y-1 active:scale-95
        transition-all duration-300 ease-out
      "
    >
      <span>{text}</span>
      {icon && (
        <span className="group-hover:translate-x-1 transition-transform duration-300">
          {icon}
        </span>
      )}
    </Link>
  );
}
