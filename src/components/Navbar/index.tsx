'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Navbar() {
  const pathname = usePathname()

  const linkClasses = (href:string) => 
    `text-lg ${pathname === href ? 'font-medium text-mainRed' : 'text-gray hover:text-mainRed'}`

  return (
    <menu className='flex items-center gap-4'>
      <Link className={linkClasses('/')} href="/">Home</Link>
      <Link className={linkClasses('/restaurants')} href="/restaurants">Restaurants</Link>
      <Link className={linkClasses('/about')} href="/about">About Us</Link>
      <Link className={linkClasses('/howItWorks')} href="/howItWorks">How It Works</Link>
      <Link className={linkClasses('/faqs')} href="/faqs">FAQs</Link>
    </menu>
  )
}

export default Navbar


