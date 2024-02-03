// Header.tsx
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import React from 'react'
import Link from './Link'
import SearchButton from './SearchButton'
import ThemeSwitch from './ThemeSwitch'
import MobileNav from './MobileNavCustom'

const Header = () => {
  const links = [
    {
      label: 'Services',
      to: '/services',
      subLinks: ['Investment Management', 'Financial Planning'],
      subLinksTo: ['/services/investment-management', '/services/financial-planning'],
    },
    {
      label: 'Blog Posts',
      to: '/blog-posts',
      subLinks: ['All Posts', 'Featured', 'Classics'],
      subLinksTo: ['/blog', '/tags/featured', '/tags/classics'],
    },
    {
      label: 'Contact Us',
      to: '/contact-us',
    },
    {
      label: 'About',
      to: '/about',
    },
  ]

  return (
    <header className="flex justify-between p-10">
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
        <ul className="flex items-center space-x-4 leading-5 sm:space-x-6 ">
          {links.map((link, index) => (
            <li key={index} className="group relative hidden font-medium md:block">
              <Link
                href={link.to}
                className="transition duration-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                {link.label}
              </Link>
              {link.subLinks && link.subLinks.length > 0 && (
                <ul className="absolute hidden space-y-2 rounded-md border border-white bg-white p-2 px-4 shadow-lg group-hover:block dark:border-gray-900 dark:bg-gray-950">
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
        <div className="hidden md:flex">
          <SearchButton />
        </div>
        <div className="ml-3.5 flex items-center">
          <ThemeSwitch />
        </div>
        <div className="ml-2 flex items-center md:hidden">
          <MobileNav links={links} />
        </div>
      </div>
    </header>
  )
}

export default Header
