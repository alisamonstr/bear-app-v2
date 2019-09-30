import React from 'react'
import styled from 'styled-components/macro'
import { Card } from '@material-ui/core'


const Block = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  background: #FFF379;
`
const Content = styled(Card)`
  width: 1024px;
  height: 70%;
  display: flex;
  background: #FFB15E;
  margin-top: -30px;
  justify-content: center;
  @media(max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  `
const Title = styled.div`
  font-size: 70px;
  font-family: 'Rochester','Roboto', cursive;
  height: 1.5em;
  white-space: nowrap;
  margin-bottom: 20px;
  @media(max-width: 800px) {
    font-size: 55px;
  }
`
export function Actual() {
  return (
    <Block>
      <Content>
<Title>Actual</Title>
      </Content>

    </Block>
  )
}