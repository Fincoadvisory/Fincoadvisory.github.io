interface Service {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const servicesNavData: Service[] = [
  {
    title: 'Investment Management',
    description: `DESCRIPTION HERE`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Financial Planning',
    description: `DESCRIPTION HERE`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default servicesNavData
