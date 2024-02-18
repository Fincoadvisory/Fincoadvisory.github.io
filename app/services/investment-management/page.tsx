import ContactButton from '@/components/ContactButton'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Investment Management' })

export default function Page() {
  return (
    <div>
      <div className="py-10">
        <h1 className="py-6 text-6xl font-bold text-primary-600 dark:text-primary-400">
          Philosophy
        </h1>
        <h2 className="py-6 text-5xl">
          "Empower your wealth to soar to new heights with our proven long-term strategies and
          personalized guidance. Watch your financial dreams materialize as we cultivate and nurture
          your prosperity together."
        </h2>
        <h1 className="py-6 text-6xl font-bold text-primary-600 dark:text-primary-400">Fees</h1>
        <p className="pb-10 text-2xl">
          A dedicated advisor who's a fiduciary and doesn't make commissions so you can be confident
          for the long term.
        </p>
        <p className="pb-10 text-2xl">
          FINCO offers discretionary direct asset management services to advisory clients with no
          minimum requirement to open an account. FINCO charges an annual investment advisory fee
          based on the total assets under management.
        </p>
        <p className="pb-10 text-2xl">For example: $100 annual advisory fee per $10,000 managed.</p>
        <ContactButton></ContactButton>
        {/* <h1 className="py-6 text-6xl font-bold">$0</h1>
        <div className="flex">
          <div className="flex-1 p-4">
            <h1 className="mb-2 text-4xl font-bold">Header</h1>
            <p className="">subtext</p>
          </div>
          <div className="flex-1">
            <h1 className="mb-2 text-4xl font-bold">Header</h1>
            <p className="">subtext</p>
          </div>
        </div> */}
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
