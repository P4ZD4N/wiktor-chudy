interface SectionTitleProps {
  title: string;
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h2
      className="
      bg-gradient-to-r from-primary to-secondary
      bg-clip-text text-transparent
      text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight [font-variant-ligatures:none]"
    >
      {props.title}
    </h2>
  );
}
