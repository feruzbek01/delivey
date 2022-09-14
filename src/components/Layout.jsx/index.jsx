import React from 'react'
import { Container } from './style'
import { Routers } from '../../routes/Routers'
import { Footer } from '../Footer'
import { Header } from '../Header'

export const Layout = () => {
  return (
    <Container>
      <Header/>
      <Routers />
      <Footer/>
    </Container>
  )
}

export default Layout