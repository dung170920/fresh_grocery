import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

export const Partner = () => {
  return (
    <section className='container lg:-translate-y-1/4 -translate-y-10'>
      <div className="lg:py-14 py-8 lg:px-16 px-7 flex flex-col-reverse lg:flex-row gap-12 bg-primary-gradient rounded-2xl">
        <div className="flex-1">
          <h3>Become a Partner and start earning!</h3>
          <p className='text-xl font-medium mt-2 mb-9'>You can login and logout whenever you want! No mandatory timings!</p>
          <Button>Become a Partner</Button>
        </div>
        <div className="flex-1 relative flex items-center justify-center">
          <div className="absolute lg:h-[114px] lg:w-[114px] h-[70px] w-[70px] rounded-full overflow-hidden md:left-1/4 lg:left-0 left-10 -top-1/2">
            <Image src={"/partner-1.png"} height={1000} width={1000} objectFit='cover' objectPosition='center' className='w-full h-full' alt='partner' />
          </div>
          <div className="lg:h-[239px] lg:w-[239px] h-[148px] w-[148px] rounded-full overflow-hidden">
            <Image src={"/partner-2.png"} height={1000} width={1000} objectFit='cover' objectPosition='center' className='w-full h-full' alt='partner' />
          </div>
          <div className="absolute lg:h-[89px] lg:w-[89px] h-[55px] w-[55px] rounded-full overflow-hidden lg:-right-4 md:right-1/4 right-0 top-0">
            <Image src={"/partner-3.png"} height={1000} width={1000} objectFit='cover' objectPosition='center' className='w-full h-full' alt='partner' />
          </div>
          <div className="absolute lg:h-[89px] lg:w-[89px] h-[55px] w-[55px] rounded-full overflow-hidden md:left-1/3 lg:left-0 left-5 -bottom-1/3">
            <Image src={"/partner-4.png"} height={1000} width={1000} objectFit='cover' objectPosition='center' className='w-full h-full' alt='partner' />
          </div>
        </div>
      </div>
    </section>
  )
}
