import Link from 'next/link'

const ContactButton = () => {
  return (
    // TODO: make this into a button
    <div className="p-6 text-4xl font-bold">
      <Link href="mailto:fincoadvisory.us@gmail.com" aria-label="Email">
        Contact us to schedule a call now.
      </Link>
    </div>
  )
}

export default ContactButton
