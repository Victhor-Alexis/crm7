import React from 'react'
import { Container, Upper, Bottom, Icon, Minicon} from './styles'

const Footer = () => {
  return (
    <Container>
      <Upper>
        <Icon>Icon</Icon>
        <Icon>Icon</Icon>
        <Icon>Icon</Icon>
        <Icon>Icon</Icon>
      </Upper>

      <Bottom>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum orci id mauris cursus placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula sem nunc, sit amet efficitur leo lacinia posuere.</p>
        <div className="box">
          <Minicon>F</Minicon>
          <Minicon>L</Minicon>
          <Minicon>Y</Minicon>
          <Minicon>I</Minicon>
        </div>
      </Bottom>
    </Container>
  )
}


export default Footer;