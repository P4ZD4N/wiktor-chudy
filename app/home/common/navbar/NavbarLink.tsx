import Link from 'next/link';

interface NavbarLinkProps {
  href: string;
  text: string;
}

export default function NavbarLink(props: NavbarLinkProps) {
  return (
    <Link
      href={props.href}
      className="text-lg font-medium text-gray-300 hover:text-secondary transition-colors"
    >
      {props.text}
    </Link>
  );
}
