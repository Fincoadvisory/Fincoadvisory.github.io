import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import React from 'react'
import Link from './Link'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNavCustom'
import links from '@/data/links'

const Header = () => {
  return (
    <header className="mb-6 flex justify-between bg-gray-100 px-6 py-6 dark:bg-gray-900">
      <div className="flex items-center">
        <div className="mr-5">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center">
              <div className="mr-3">
                <Logo />
              </div>
              {typeof siteMetadata.headerTitle === 'string' ? (
                <div className="hidden h-6 text-2xl font-semibold">{siteMetadata.headerTitle}</div>
              ) : (
                siteMetadata.headerTitle
              )}
            </div>
          </Link>
        </div>
        <ul className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {links.map((link, index) => (
            <li key={index} className="group relative hidden md:block">
              <Link
                href={link.to}
                className="font-medium transition duration-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {link.label}
              </Link>
              {link.subLinks && link.subLinks.length > 0 && (
                <ul className="absolute hidden space-y-2 rounded-md border border-white bg-white p-4 px-4 shadow-lg group-hover:block dark:border-gray-900 dark:bg-gray-950">
                  {link.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={`${link.subLinksTo[subIndex]}`}
                        className="py-2 transition duration-300 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {subLink}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="ml-auto flex items-center">
        <div className="flex items-center">
          <SearchButton />
        </div>
        <div className="ml-3.5 flex items-center">
          <ThemeSwitch />
        </div>
        <div className="ml-2 flex items-center md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
