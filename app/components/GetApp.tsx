import React from 'react'
import Button from './Button'

const GetApp = () => {
  return (
    <section className="max-container flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-60=4 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex">
            <Button
              type="button" title="Download App" icon='/apple.svg'  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp