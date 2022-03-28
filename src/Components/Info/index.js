import React from 'react'
import { Blackblock, Container, Textblock } from './styles'

const Info = () => {
  return (
    <Container>
      <Textblock>
        <h2>Lorem ipsum?</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum, tellus ac malesuada posuere, diam enim pulvinar libero, et blandit lectus mi sit amet nulla. Praesent posuere leo nunc, id tristique lectus varius vitae. Etiam mollis dignissim lectus, ac malesuada tellus hendrerit a.
        </p>

        <p>
          Aliquam finibus at ligula eu feugiat. Integer convallis dui vitae nisl tincidunt, vitae sollicitudin libero semper. Quisque sit amet tristique velit. Mauris euismod erat at dolor mattis, vel suscipit tellus imperdiet.
        </p>

        <p>
          Ut blandit urna vitae ante vehicula, ac maximus felis blandit. Phasellus efficitur, enim molestie scelerisque fermentum, nisl lorem laoreet nisi, eget rutrum massa diam sed orci. Donec mollis lacus non nisl mattis, at accumsan massa rutrum. Duis cursus pellentesque nulla, in eleifend justo ornare at. 
        </p>
      </Textblock>

      <Textblock>
        <h2>Lorem ipsum?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum, tellus ac malesuada posuere, diam enim pulvinar libero, et blandit lectus mi sit amet nulla.
        </p>

        <Blackblock>
          <div>
            <p>CRM7 Oficial Zoho</p>
            <p>Partner</p>
          </div>

          <button>Acessar</button>
        </Blackblock>
      </Textblock>
    </Container>
  )
}

export default Info