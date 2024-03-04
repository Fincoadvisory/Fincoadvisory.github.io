'use client'
import { useState } from 'react'
import Link from 'next/link'

const ContactButton = () => {
  const [showGoogleForm, setShowGoogleForm] = useState(false)

  const handleButtonClick = () => {
    setShowGoogleForm(true)
  }

  return (
    // TODO: make this into a button
    <div className="">
      {showGoogleForm ? (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfSmvNiDJ61QS5JMRCgqsdBENhY5Cz8peIArRVT9p9uave4bA/viewform?embedded=true"
          width="100%"
          height="400"
          title="Contact US Google Form"
        >
          Loading…
        </iframe>
      ) : (
        <button
          className="px-20 text-4xl font-bold"
          onClick={handleButtonClick}
          aria-label="Show Google Form"
        >
          Contact us to schedule a call now.
        </button>
      )}
    </div>
  )
}

export default ContactButton
