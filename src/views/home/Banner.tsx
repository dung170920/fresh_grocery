import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LocateFixed } from 'lucide-react'
import React from 'react'

export const Banner = () => {
  return (
    <section className='relative'>
      <div className='bg-primary-gradient absolute top-0 w-full -z-10 lg:-translate-y-28 lg:h-[600px] h-full' />
      <div className="container relative">
        <div className='lg:block hidden bg-banner-pattern absolute inset-0 -z-10 object-cover bg-no-repeat' />
        <div className="max-w-[780px] text-center mx-auto lg:py-28 py-9">
          <h1 className='mb-2'>Stay Home - We’ll Deliver</h1>
          <p className='lg:text-[26px] text-base'>Get your groceries delivered in less than an hour</p>
          <div className="mt-10 mb-3 flex w-full items-center py-2 px-5 bg-white rounded-lg space-x-3">
            <Input className='border-none focus-visible:ring-0' type="text" placeholder="Search for a location" />
            <div className="flex items-center space-x-3">
              <LocateFixed className='text-neutral-500' />
              <Button type="submit">Search</Button>
            </div>
          </div>
          <ul className='flex items-center justify-center gap-4 text-neutral-500 flex-wrap'>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Chicago</li>
            <li>Houston</li>
            <li>Phoenix</li>
            <li>Philadelphia</li>
            <li>San Antonio</li>
          </ul>
        </div>

      </div>

    </section>
  )
}
