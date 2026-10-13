import Link from 'next/link';

interface NavbarLinkProps {
  href: string;
  text: string;
}

export default function NavbarLink({ href, text }: NavbarLinkProps) {
  return (
    <Link
      href={href}
      className="relative text-base sm:text-lg font-medium text-gray-400 hover:text-white transition-colors duration-300 group w-fit"
    >
      {text}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-primary to-secondary transition-all duration-300 ease-out group-hover:w-full" />
    </Link>
  );
}
