'use client'
import React, { useState } from 'react'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about', subLinks: ['History', 'Team', 'Mission'] },
    { label: 'Services', to: '/services', subLinks: ['Web Design', 'SEO', 'Marketing'] },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white focus:bg-gray-700 focus:outline-none"
      >
        ☰
      </button>
      {isOpen && (
        <div className="absolute left-0 top-0 w-full bg-gray-800 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-2 top-2 p-2 text-white focus:outline-none"
          >
            ✕
          </button>
          <ul className="flex flex-col space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  className="text-white transition duration-300 hover:text-gray-300"
                >
                  {link.label}
                </a>
                {link.subLinks && link.subLinks.length > 0 && (
                  <ul className="ml-4 space-y-2">
                    {link.subLinks.map((subLink, subIndex) => (
                      <li key={subIndex}>
                        <a
                          href={`${link.to}/${subLink.toLowerCase()}`}
                          className="text-white transition duration-300 hover:text-gray-300"
                        >
                          {subLink}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNav
