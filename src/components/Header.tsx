'use client'

import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Close mobile menu when route changes
  useEffect(() => {
    closeMobileMenu()
  }, [pathname])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeMobileMenu()
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 overflow-visible p-3 bg-background/20 backdrop-blur-lg shadow w-full"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src={'/logo.svg'}
            alt="Logo Wulkan"
            width={60}
            height={60}
            className="h-18 w-18 ml-4 translate-y-1/3 absolute"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex mx-auto">
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

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-16 px-4 pb-4">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex flex-col gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" onClick={closeMobileMenu}>
                    Strona Główna
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/historia" onClick={closeMobileMenu}>
                    Historia
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/punktacja" onClick={closeMobileMenu}>
                    Punktacja
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/1-5-procent" onClick={closeMobileMenu}>
                    1,5%
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </header>
  )
}
