'use client'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const openServicesDropdown = () => {
    setServicesDropdownOpen(true)
  }

  const closeServicesDropdown = () => {
    setServicesDropdownOpen(false)
  }

  return (
    <header className="flex items-center justify-between py-10">
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
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <div key={link.title} className="relative">
                {link.title === 'Services' ? (
                  <>
                    <span
                      className="cursor-pointer font-medium text-gray-900 dark:text-gray-100"
                      onMouseEnter={openServicesDropdown}
                    >
                      {link.title}
                    </span>
                    {isServicesDropdownOpen && (
                      <div
                        className="absolute mt-2 space-y-2 rounded-md border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-600 dark:bg-gray-800"
                        onMouseLeave={closeServicesDropdown}
                      >
                        <Link href="/services/investment-management" className="block px-4 py-2">
                          Investment Management
                        </Link>
                        <Link href="/services/financial-planning" className="block px-4 py-2">
                          Financial Planning
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="font-medium text-gray-900 dark:text-gray-100 sm:block"
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="flex items-center">
        <SearchButton />
        <div className="ml-3.5 flex items-center">
          <ThemeSwitch />
        </div>
        <div className="ml-2 flex items-center">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header
