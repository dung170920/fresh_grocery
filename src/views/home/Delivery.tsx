import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Delivery = () => {
  return (
    <section className='mt-6 pb-14'>
      <div className="flex items-center flex-col lg:flex-row gap-2 container">
        <div className="flex-1 w-full">
          <span className='subtitle'>#GroceryDeliveredSafely</span>
          <h2 className='lg:mb-[76px] mb-6 mt-1'>Hygenically Packed,<br />Safely Delivered</h2>
          <Button>Learn More</Button>
        </div>
        <div className="flex-1">
          <Image src={"/delivery.svg"} height={0} width={0} className='w-full h-auto' objectFit='contain' alt='delivery' />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-[218px] gap-y-6 container">
        <div className="space-y-3">
          <Image src={"/tick.svg"} alt='' width={24} height={24} />
          <span>Zero touch delivery options</span>
        </div>
        <div className="space-y-3">
          <Image src={"/tick.svg"} alt='' width={24} height={24} />
          <span>Regular cleaning of warehouses</span>
        </div>
        <div className="space-y-3">
          <Image src={"/tick.svg"} alt='' width={24} height={24} />
          <span>Fever screening of all executives</span>
        </div>
      </div>
    </section>
  )
}
