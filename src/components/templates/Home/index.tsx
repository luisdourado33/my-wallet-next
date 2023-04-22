import React from 'react'

import Container from '@/components/atoms/Container'
import Navbar from '@/components/organisms/Navbar'
import Hero from '@/components/atoms/Hero'

export default function HomeTemplate() {
  return (
    <Container>
      <header className='fixed w-full'>
        <Navbar className='bg-purple-900' />
        <Hero className="relative flex h-96 pt-10 w-full">
          <div className='w-56 h-72 bg-white rounded p-5'> 
            <span>...</span>
          </div>
        </Hero>
      </header>
    </Container>
  )
}