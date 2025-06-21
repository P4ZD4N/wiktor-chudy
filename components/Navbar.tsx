import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-white">
          Wiktor Chudy
        </Link>
        <div className="space-x-6">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
            About me
          </Link>
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
            Work
          </Link>
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:underline">
            Articles
          </Link>
          <Link href={"/"} className="text-gray-700 dark:text-gray-300 hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}