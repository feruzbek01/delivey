import React from 'react'
import { ContainerHelmet } from './style'

export const Helmet = (props) => {

    document.title = "Food ordering app -"+ props.title
  return (
      <ContainerHelmet>{ props.children}</ContainerHelmet>
  )
}
