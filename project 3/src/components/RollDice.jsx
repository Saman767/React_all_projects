import React from 'react'
import styled from 'styled-components'
const RollDice = (
  {roleDice,currentDice}
 ) => {
 
 

  
  return (
    <DiceContainer>
      <div className="dice" 
      
      onClick={roleDice}



>
      <img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click the Dice to roll </p>
    </DiceContainer>
  )
}

export default RollDice
const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

.dice{
  cursor: pointer;
}
p{
  font-size: 25px;
}

  `