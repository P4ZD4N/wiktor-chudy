interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-start">
      {subtitle && (
        <p className="mb-3 text-sm sm:text-base font-semibold tracking-[0.2em] text-primary uppercase">
          {subtitle}
        </p>
      )}
      <h2
        className="
        inline-block
        bg-gradient-to-r from-primary to-secondary
        bg-clip-text text-transparent
        text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight [font-variant-ligatures:none]"
      >
        {title}
      </h2>
    </div>
  );
}
