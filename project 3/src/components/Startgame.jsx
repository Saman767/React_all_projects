import React from 'react'
import styled from 'styled-components'
import {Button} from '../styled/Button'
const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/img1.png.png" alt="logo" />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button
            onClick={toggle}
            >Start Game</Button>

        </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;