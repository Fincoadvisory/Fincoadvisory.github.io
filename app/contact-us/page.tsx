import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import ContactButton from '@/components/ContactButton'

export const metadata = genPageMetadata({ title: 'Contact Us' })

export default function Page() {
  return (
    <div>
      <div className="py-10">
        <ContactButton></ContactButton>
      </div>
    </div>
  )
}
