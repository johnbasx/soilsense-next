import React from 'react'

const Location = () => {
  return (
    <div className="w-full px-6 mx-auto mb-16 max-w-7xl">
      <iframe
        style={{ width: '100%', height: '100%', border: 0 }}
        loading="lazy"
        className="overflow-hidden rounded-3xl aspect-video drop-shadow-lg"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=30.899464923751633,%2076.72845287499679+(SN%20Silos%20Pvt%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
  )
}

export default Location
