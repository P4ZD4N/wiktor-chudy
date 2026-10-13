import { ReactNode } from 'react';

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

export default function ListItem({ children, className = '' }: ListItemProps) {
  return (
    <p
      className={`text-left text-gray-400 leading-relaxed flex gap-3 ${className}`}
    >
      <span className="text-primary font-bold shrink-0">—</span>
      <span>{children}</span>
    </p>
  );
}
