import Link from './Link'
import Logo from '@/data/logo.svg'
import links from '@/data/links'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 pb-10">
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          <Link href="/" className="dark:text-gray-400">
            Home
          </Link>
          {links.map((link) => (
            <div key={link.label}>
              <Link href={link.to} className="dark:text-gray-400">
                {link.label}
              </Link>
              {link.subLinks && (
                <div className="mt-4 flex flex-col items-start space-y-4">
                  {link.subLinks.map((subLink, index) => (
                    <div
                      key={subLink}
                      className="text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-gray-200 dark:hover:text-blue-400"
                    >
                      <Link href={link.subLinksTo[index]}>{subLink}</Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className="ml-auto mt-4 text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
            © Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
