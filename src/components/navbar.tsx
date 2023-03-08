import React from 'react'
import Container from './Container'

export default function Navbar({children}) {
  return (
    <nav className='navbar mb-4'>
        
    <Container>
    <h2 className='site-title'>Cats Website</h2>
    <p>
      This is a website for cats.
      <br />
      
    </p>
    {children}
    <br />
    </Container>
      
    
  </nav>
  )
}
