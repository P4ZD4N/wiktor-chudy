import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  bgColor?: 'background-1' | 'background-2' | 'gradient';
  fullHeight?: boolean;
  id?: string;
}

export default function SectionWrapper({
  children,
  bgColor = 'background-1',
  fullHeight = false,
  id,
}: SectionWrapperProps) {
  const backgroundStyles = {
    'background-1': 'bg-background-1',
    'background-2': 'bg-background-2',
    gradient: 'bg-[image:var(--gradient-primary)]',
  };

  return (
    <section
      id={id}
      className={`w-full flex items-center justify-center ${backgroundStyles[bgColor]} ${fullHeight ? 'min-h-screen' : 'py-20'}`}
    >
      <div className="w-9/10 md:w-3/4 lg:w-2/3 xl:w-9/12 flex flex-col items-center justify-center text-center">
        {children}
      </div>
    </section>
  );
}
