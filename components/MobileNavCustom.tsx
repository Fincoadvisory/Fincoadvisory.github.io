// MobileNav.tsx
'use client'
import { useState } from 'react'
import Link from './Link'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

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
    <>
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-8 w-8 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu" onClick={onToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className="fixed mt-8 h-full">
          {links.map((link) => (
            <div key={link.label} className="px-12 py-2 font-bold tracking-widest">
              <Link href={link.to} onClick={onToggleNav} className="text-2xl">
                {link.label}
              </Link>
              {link.subLinks && (
                <div className="ml-4 py-2">
                  {link.subLinks.map((subLink, index) => (
                    <div key={subLink} className="mb-2 text-xl">
                      <Link href={link.subLinksTo[index]} onClick={onToggleNav}>
                        {subLink}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  )
}

export default MobileNav
