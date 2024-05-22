import { PATH } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DownloadButtons } from './DownloadButtons';

const ABOUT_US = [
  {
    id: 1,
    text: 'My Account',
    path: PATH.home
  },
  {
    id: 2,
    text: 'Categories',
    path: PATH.home
  },
  {
    id: 3,
    text: 'Cities',
    path: PATH.home
  },
  {
    id: 4,
    text: 'Become a Partner',
    path: PATH.home
  },
  {
    id: 5,
    text: 'Blog',
    path: PATH.home
  },
  {
    id: 6,
    text: 'Careers',
    path: PATH.home
  }
];

const QUESTIONS = [
  {
    id: 'q-1', text: 'Frequently Asked Questions', path: PATH.home
  },
  {
    id: 'q-2', text: 'Contact Us', path: PATH.home
  }
]

export const Footer = () => {
  return (
    <footer className='container'>
      <div className="flex lg:flex-row flex-col gap-7 w-full pb-7 justify-between border-b border-neutral-300">
        <div className="flex flex-col gap-5">
          <Link href={PATH.home}>
            <Image src={"/logo.svg"} width={271} height={60} alt='Logo' priority={true} />
          </Link>
          <ul className='flex flex-col gap-2 mt-5 text-neutral-500'>
            <li>
              <Link href={PATH.home}>Help Center</Link>
            </li>
            <li>
              <Link href={PATH.home}>English (International)</Link>
            </li>
          </ul>
          <div className="mt-auto"><DownloadButtons /></div>

        </div>

        <div className="flex flex-col gap-4">
          <h4>About us</h4>
          <ul className='flex flex-col gap-3 text-neutral-500'>
            {ABOUT_US.map(e => (
              <li key={e.id} className='whitespace-nowrap'><Link href={e.path}>{e.text}</Link></li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4>Questions?</h4>
          <ul className='flex flex-col gap-3 text-neutral-500'>
            {QUESTIONS.map(e => (
              <li key={e.id} className='whitespace-nowrap'><Link href={e.path}>{e.text}</Link></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex lg:flex-row flex-col-reverse gap-5 text-neutral-500 justify-between pt-7">
        <p>© 2020 Appening Infotech Pvt Ltd</p>
        <ul className='flex lg:flex-row flex-col items-start gap-4'>
          <li><Link href={PATH.home}>Privacy</Link></li>
          <li><Link href={PATH.home}>Accessibility</Link></li>
          <li><Link href={PATH.home}>Terms</Link></li>
        </ul>
        <ul className='flex items-center gap-5'>
          <li><Link href={PATH.home}><Image src={"/instagram.svg"} width={24} height={24} alt='Logo' /></Link></li>
          <li><Link href={PATH.home}><Image src={"/facebook.svg"} width={24} height={24} alt='Logo' /></Link></li>
          <li><Link href={PATH.home}><Image src={"/twitter.svg"} width={24} height={24} alt='Logo' /></Link></li>
          <li><Link href={PATH.home}><Image src={"/youtube.svg"} width={24} height={24} alt='Logo' /></Link></li>
        </ul>
      </div>
    </footer>
  )
}
