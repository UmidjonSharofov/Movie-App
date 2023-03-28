import React from 'react'
import { Navbar ,Hero } from '../components'
import PopularMovie from '../components/PopularMovies'
import './stayle'
import { Contanier } from './stayle'

export const Home = () => {
  return (
    <Contanier>
     <Navbar/>
     <Hero/>
     <PopularMovie/>
    </Contanier>
  )
}
