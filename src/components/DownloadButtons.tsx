import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export const DownloadButtons = () => {
  return (
    <div className='flex gap-4 w-fit'>
      <Button variant={'download'}>
        <Image src="/apple.svg" alt='app store' width={16} height={16} />
        <span>App Store</span>
      </Button>
      <Button variant={'download'}>
        <Image src="/google-play.svg" alt='goole store' width={16} height={16} />
        <span>Google Play</span>
      </Button>
    </div>
  )
}
