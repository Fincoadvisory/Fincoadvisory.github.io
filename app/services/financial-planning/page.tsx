import ContactButton from '@/components/ContactButton'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Financial Planning' })

export default function Page() {
  return (
    <div>
      <div className="py-10">
        <h1 className="py-6 text-6xl font-bold text-primary-600 dark:text-primary-400">
          A relationship that puts you first
        </h1>
        <p className="pb-10 text-2xl">
          Get a dedicated advisor who's a fiduciary and doesn't make commissions so you can be
          confident for the long term.
        </p>
        <h1 className="py-6 text-6xl font-bold text-primary-600 dark:text-primary-400">
          How we work together
        </h1>
        <p className="pb-10 text-2xl">
          You won't find cookie-cutter plans here. We work together to understand what success looks
          like according to your vision and needs.
        </p>
        <p className="py-2 text-2xl">We'll work with you to:</p>
        <ol className="py-2 text-2xl">
          <li className="pb-4">
            1. <b>Develop a personalized financial plan:</b> Tailored to your unique goals, risk
            tolerance, and lifestyle.
          </li>
          <li className="pb-4">
            2. <b>Implement smart investment strategies:</b> Grow your wealth responsibly and
            securely.
          </li>
          <li className="pb-4">
            3. <b>Navigate complex financial decisions:</b> With expert guidance and ongoing
            support.
          </li>
        </ol>
        <ContactButton></ContactButton>
        <div className="flex-1">
          {/* <Image
            src={imageUrl}
            alt="Image"
            className="h-full w-full object-cover"
            width={544}
            height={306}
          /> */}
        </div>
      </div>
    </div>
  )
}
