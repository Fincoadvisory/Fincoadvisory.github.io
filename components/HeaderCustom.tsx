import React from 'react'

const Header = () => {
  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about', subLinks: ['History', 'Team', 'Mission'] },
    { label: 'Services', to: '/services', subLinks: ['Web Design', 'SEO', 'Marketing'] },
    { label: 'Contact', to: '/contact' },
  ]

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-white">Your Logo</div>
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index} className="group relative">
              <a href={link.to} className="text-white transition duration-300 hover:text-gray-300">
                {link.label}
              </a>
              {link.subLinks && link.subLinks.length > 0 && (
                <ul className="absolute hidden space-y-2 bg-gray-700 p-2 group-hover:block">
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
    </nav>
  )
}

export default Header
