import { PATH } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

export const Navbar = () => {
  return (
    <nav className='flex items-center justify-between container bg-white lg:bg-transparent'>
      <Link href={PATH.home}>
        <Image src={"/logo.svg"} width={271} height={60} alt='Logo' priority={true} />
      </Link>

      <div className="lg:flex hidden items-center gap-4">
        <Link href={PATH.signin} legacyBehavior passHref>
          <Button size={"lg"} variant={"ghost"}>Sign in</Button>
        </Link>
        <Link href={PATH.signup} legacyBehavior passHref>
          <Button size={"lg"}>Sign up</Button>
        </Link>
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant={"ghost"} size={"icon"}><Menu /></Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-2 py-4 w-fit">
              <Link href={PATH.signin} legacyBehavior passHref>
                <Button variant={"link"}>Sign in</Button>
              </Link>
              <Link href={PATH.signup} legacyBehavior passHref>
                <Button variant={"link"}>Sign up</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  )
}
