interface BlogPost {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const blogPostsNavData: BlogPost[] = [
  {
    title: 'All Posts',
    description: `DESCRIPTION HERE`,
    imgSrc: '/static/images/google.png',
    href: '/blog',
  },
  {
    title: 'Featured',
    description: `DESCRIPTION HERE`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/tags/featured',
  },
  {
    title: 'Classics',
    description: `DESCRIPTION HERE`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/tags/classics',
  },
]

export default blogPostsNavData
