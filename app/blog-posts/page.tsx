import Card from '@/components/CardNoImage'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blog Posts' })

const blogPostsNavData = [
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

export default function Services() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Blog Posts
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Showcase your projects with a hero image (16 x 9)
        </p>
      </div> */}
      <div className="container py-0">
        <div className="-m-4 flex flex-wrap self-center">
          {blogPostsNavData.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc} //Just getting rid of the image for now
              href={d.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
