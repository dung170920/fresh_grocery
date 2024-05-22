import Image from 'next/image'
import React from 'react'

const LIST = [
  {
    id: 1,
    image: '/box.svg',
    title: 'No Minimum Order',
    subTitle: 'No order value restrictions, Order for yourself or your group'
  },
  {
    id: 2,
    image: '/box-tracking.svg',
    title: 'Live Order Tracking',
    subTitle: 'Track your order anytime from the store to your doorstep'
  }, {
    id: 3,
    image: '/bike.svg',
    title: '24 x 7 delivery',
    subTitle: 'Order anytime, anywhere. We will get you delivered'
  }
]

export const WhyChoose = () => {
  return (
    <section className='relative text-center pt-10 lg:pb-44 pb-10'>
      <div className="bg-primary-gradient opacity-15 -z-10 absolute inset-0" />
      <div className="container">
        <span className='subtitle'>Why Choose Fresh Grocery</span>
        <h2>Because we are in it together</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-[150px] gap-y-14 container lg:items-end items-center justify-center my-12">
        {LIST.map(e => (<div className="flex flex-col text-center items-center" key={e.id}>
          <Image src={e.image} alt={e.title} width={76} height={76} />
          <h4 className='text-lg mt-5'>{e.title}</h4>
          <p className='subtitle'>{e.subTitle}</p>
        </div>))}
      </div>
    </section>
  )
}
