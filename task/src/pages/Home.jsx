import React from 'react'
import { Navbar ,Hero } from '../components'
import './stayle'
import { Contanier } from './stayle'

export const Home = () => {
  return (
    <Contanier>
     <Navbar></Navbar>
     <Hero/>
    </Contanier>
  )
}
