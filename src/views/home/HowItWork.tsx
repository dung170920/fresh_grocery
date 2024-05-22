import { DownloadButtons } from '@/components'
import Image from 'next/image'
import React from 'react'

export const HowItWork = () => {
  return (
    <section className='container my-10'>
      <div className="text-center max-w-[568px] mx-auto">
        <span className='subtitle'>Get delivered in 3 easy steps</span>
        <h2 className='mt-1'>Here’s how it works</h2>
        <div className="flex flex-col gap-5 items-center">
          <Image src={"/mobile-app.svg"} width={0} height={0} className='h-auto w-full mt-11' alt='' />
          <div className="flex lg:flex-row flex-col items-center gap-4 h3 w-fit m-auto">
            <span className='bg-secondary-gradient rounded-full text-white lg:h-11 lg:w-11 h-8 w-8 flex items-center justify-center'>1</span>
            <h3>Request in the app</h3>
          </div>
          <DownloadButtons />
        </div>

      </div>

      <div className="flex space-y-20 lg:space-y-32 flex-col-reverse lg:flex-row items-center">
        <div className="flex-1 text-center">
          <div className="flex lg:flex-row flex-col items-center gap-4 h3 w-fit mx-auto">
            <span className='bg-secondary-gradient rounded-full text-white lg:h-11 lg:w-11 h-8 w-8 flex items-center justify-center'>2</span>
            <h3>Schedule and Pay</h3>
          </div>
          <p className='lg:text-lg text-base font-medium max-w-[415px] mt-5 mx-auto'>Schedule the delivery at your convenient time and pay digitally</p>
        </div>
        <div className="flex-1">
          <Image src={"/schedule.svg"} height={0} width={0} className='w-full h-auto' objectFit='contain' alt='schedule-and-pay' />
        </div>
      </div>

      <div className="flex space-y-20 lg:space-y-32 flex-col-reverse items-center lg:flex-row-reverse">
        <div className="flex-1 text-center">
          <div className="flex lg:flex-row flex-col items-center gap-4 h3 w-fit mx-auto">
            <span className='bg-secondary-gradient rounded-full text-white lg:h-11 lg:w-11 h-8 w-8 flex items-center justify-center'>3</span>
            <h3>It’s delivered and Rate us</h3>
          </div>
          <p className='lg:text-lg text-base font-medium max-w-[415px] mt-5 mx-auto'>Collect groceries at your doorstep and tell us about
            our service</p>
        </div>
        <div className="flex-1">
          <Image src={"/rate-us.svg"} height={0} width={0} className='w-full h-auto' objectFit='contain' alt='rate-us' />
        </div>
      </div>
    </section>
  )
}
