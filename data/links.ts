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

export default links
