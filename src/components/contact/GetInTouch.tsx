import React from 'react'
import { Container } from '@/components/Container'

const GetInTouch = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-emerald-900 to-emerald-700 via-emerald-600 sm:py-18">
      <Container>
        <div>
          <div className="max-w-md px-6 mx-auto sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-center text-white drop-shadow sm:text-5xl sm:leading-none lg:text-5xl">
              Get in touch
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg leading-normal text-center text-gray-100 drop-shadow">
              Got a question about us? Are you interested in partnering with us?
              have some suggestions or just want to say Hi? Just contact us. We
              are here to assist you.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default GetInTouch
