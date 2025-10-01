import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-visible p-3 bg-background/20 backdrop-blur-lg shadow w-full">
      <div className="container mx-auto flex items-center">
        <Link href="/" className="flex items-center space-x-4">
          {/* Modern logo with glow effect */}
          {/* <Image
            src={'/logo.svg'}
            alt="Wulkan Logo"
            width={60}
            height={60}
            className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 absolute -bottom-1/2"
          /> */}
          <Image
            src={'/logo.svg'}
            alt="Logo ZHR"
            width={60}
            height={60}
            className="h-18 w-18 absolute -bottom-1/3 ml-4"
          />
        </Link>
        <NavigationMenu className="mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Strona Główna</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/historia">Historia</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/punktacja">Punktacja</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/1-5-procent">1,5%</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
