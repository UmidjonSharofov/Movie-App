import React from 'react'
import { Container } from './main'

function Button({children,icon,type}) {
  return (
    <Container type={type} icon={icon}>{icon && icon}{children}</Container>
  )
}

export default Button