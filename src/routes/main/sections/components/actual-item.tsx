import React from 'react'
import styled from 'styled-components/macro'
import CardPic from '../../../../images/card-pic-1.jpg'

const Card = styled.div`
  height: 200px;
  width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background: #FFFBF2;
  display: flex;
  @media(max-width: 800px) {
    margin: 10px 0;
  }
`
const Image = styled.div`
  width: 40%;
  height: 100%;
  background: url('${CardPic}') center center no-repeat;
  background-size: cover;;
`
const Description = styled.div`
  width: 55%;
  height: 100%;
  margin-left: 5%;
  margin-top: 8px;
  
`
const Title = styled.div`
  font-size: 25px;
  font-family: 'Rochester','Roboto', cursive;
  margin-left: 10px;
`
const Text = styled.div`
  height: 90%;
  width: 95%;
`

export function ActualItem() {
  return (
    <Card>
      <Image/>
      <Description>
        <Title>Exhibition</Title>
        <Text>
          For the work we need yarn, I took the beige yarn from Lotos Travka Stretch companyFor the work we need yarn, I
          took the beige yarn from Lotos Travka...
        </Text>
      </Description>
    </Card>
  )
}