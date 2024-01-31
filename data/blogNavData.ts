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
    href: '/services/investment-management',
  },
  {
    title: 'Financial Planning',
    description: `DESCRIPTION HERE`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/services/financial-planning',
  },
]

export default servicesNavData
