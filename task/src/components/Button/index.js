import React from 'react'
import { Container } from './main'

function Button({children,icon}) {
  return (
    <Container>{icon && icon}{children}</Container>
  )
}

export default Button