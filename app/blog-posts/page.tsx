import blogPostsNavData from '@/data/blogPostsNavData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Blog Posts' })

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
      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
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
