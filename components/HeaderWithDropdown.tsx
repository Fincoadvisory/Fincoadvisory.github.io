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
  const [isBlogDropdownOpen, setBlogDropdownOpen] = useState(false)

  const openServicesDropdown = () => {
    setServicesDropdownOpen(true)
    setBlogDropdownOpen(false)
  }

  const closeServicesDropdown = () => {
    setServicesDropdownOpen(false)
  }

  const openBlogDropdown = () => {
    setBlogDropdownOpen(true)
    setServicesDropdownOpen(false)
  }

  const closeBlogDropdown = () => {
    setBlogDropdownOpen(false)
  }

  return (
    <header className="flex items-center justify-between py-10">
      <div className="flex items-center">
        <div className="mr-5">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center">
              <div className="mr-3 mr-5">
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
              <div key={link.title} className="relative hidden md:block">
                {link.title === 'Services' ? (
                  <>
                    <span
                      className="cursor-pointer font-medium text-gray-900 dark:text-gray-100"
                      onMouseEnter={openServicesDropdown}
                    >
                      <Link
                        href={link.href}
                        className="font-medium text-gray-900 dark:text-gray-100 sm:block"
                      >
                        {link.title}
                      </Link>
                    </span>
                    {isServicesDropdownOpen && (
                      <div
                        className="absolute mt-2 space-y-2 rounded-md border border-white bg-white p-2 font-medium shadow-lg dark:border-gray-900 dark:bg-gray-950"
                        onMouseLeave={closeServicesDropdown}
                      >
                        <Link href="/services/investment-management" className="block px-3 py-2">
                          Investment Management
                        </Link>
                        <Link href="/services/financial-planning" className="block px-3 py-2">
                          Financial Planning
                        </Link>
                      </div>
                    )}
                  </>
                ) : link.title === 'Blog Posts' ? (
                  <>
                    <span
                      className="cursor-pointer font-medium text-gray-900 dark:text-gray-100"
                      onMouseEnter={openBlogDropdown}
                    >
                      <Link
                        href={link.href}
                        className="font-medium text-gray-900 dark:text-gray-100 sm:block"
                      >
                        {link.title}
                      </Link>
                    </span>
                    {isBlogDropdownOpen && (
                      <div
                        className="absolute mt-2 space-y-2 rounded-md border border-white bg-white p-2 font-medium shadow-lg dark:border-gray-900 dark:bg-gray-950"
                        onMouseLeave={closeBlogDropdown}
                      >
                        <Link href="/blog" className="block px-3 py-2">
                          All Posts
                        </Link>
                        <Link href="/tags/featured" className="block px-3 py-2">
                          Featured
                        </Link>
                        <Link href="/tags/classics" className="block px-3 py-2">
                          Classics
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
