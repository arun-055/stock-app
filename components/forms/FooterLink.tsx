import Link from 'next/link'
import React from 'react'

const FooterLink = ({text, linkText, href}:FooterLinkProps) => {
  return (
    <div className='text-center'>
        <p>{text}{` `} <Link href={href} className='text-yellow-300 text-bold '> {linkText}</Link> </p>
    </div>
  )
}

export default FooterLink