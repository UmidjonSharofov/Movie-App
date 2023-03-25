import React from 'react'
import Button from '../Button'
import { Contanier, Description, SubTitle, Title, Wrapper } from './main'
import {CiPlay1} from 'react-icons/ci'
export default function Hero() {
    return (
    <Contanier>
      <Wrapper>
          <Title>STAR WARS</Title>
          <SubTitle>THE RISE OF SKYWALKER</SubTitle>
          <Description>The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end. </Description>
          <div>
            <Button icon={<CiPlay1/>} >Watch Now</Button>
            <Button>Trailer</Button>
          </div>
      </Wrapper>
    </Contanier>
 )
}
