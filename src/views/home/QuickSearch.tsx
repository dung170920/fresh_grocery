import { Button } from '@/components/ui/button'
import { QUICK_SEARCH } from '@/constants'
import Image from 'next/image'
import React from 'react'

export const QuickSearch = () => {
  return (
    <section className='relative text-center lg:py-10 py-5'>
      <div className="bg-primary-gradient opacity-15 -z-10 absolute inset-0" />
      <div className="container">
        <span className='subtitle'>Here’s what you need</span>
        <h2>Quick Searches</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-[70px] container lg:items-end items-center justify-center my-12 gap-y-11">
        {QUICK_SEARCH.map(e => <div className="flex flex-col" key={e.id}>
          <Image src={e.image} alt={e.text} width={0} height={0} className='h-full w-auto' />
          <h4 className='text-lg mt-5'>{e.text}</h4>
        </div>)}
      </div>
      <Button>Explore More</Button>
    </section>
  )
}
