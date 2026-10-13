import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonPrimaryProps {
  text: string;
  href: string;
  icon?: ReactNode;
}

export default function ButtonPrimary({
  text,
  href,
  icon,
}: ButtonPrimaryProps) {
  return (
    <Link
      href={href}
      className="
        group relative inline-flex items-center justify-center gap-3 
        px-6 py-3 lg:px-8 lg:py-3.5 
        text-sm lg:text-base font-semibold text-white 
        bg-primary rounded-xl overflow-hidden
        border border-white/10 shadow-lg
        hover:shadow-primary/40 hover:-translate-y-1 active:scale-95
        transition-all duration-300 ease-out
      "
    >
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)] transition-transform">
        <div className="relative h-full w-8 bg-white/20" />
      </div>

      <div className="relative z-10 flex items-center gap-2">
        {icon && (
          <span className="group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        )}
        <span>{text}</span>
      </div>
    </Link>
  );
}
