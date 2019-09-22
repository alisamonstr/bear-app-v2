import React from 'react'
import { ReactComponent as IntroductionLogo } from '../../../images/introduction-logo.svg'
import LogoBear from '../../../images/logo-bear.png'
import styled from 'styled-components/macro'


const Block = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 800px) {
    flex-wrap: wrap;
  }
`
const LogoFigures = styled(IntroductionLogo)`
  height: 550px;
  width: 350px;
  @media(max-width: 800px) {
    height: 350px;
    max-width: 100vw;
  }
`
const BearLogo = styled.div`
  background: url('${LogoBear}') center center no-repeat;
  background-size: contain ;
  position: absolute;
  height: 360px;
  width: 400px;
  max-width: calc(100vw - 15px);
  right: -15px;
  bottom: 60px;
  @media(max-width: 800px) {
    left: 20px;
    bottom: 20px;
    height: 300px;
    width: 100vw;
  }
`
const Logo = styled.div`
  position: relative;
  height: 500px;
  width: 500px;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media(max-width: 800px) {
    height: 400px;
  }
`
const Title = styled.div`
  font-size: 110px;
  font-family: 'Rochester','Roboto', cursive;
  height: 1.4em;
  white-space: nowrap;
  @media(max-width: 800px) {
    font-size: 55px;
  }
`
const Text = styled.div`
  z-index: 1;
  margin-right: -160px;
  margin-top: 50px;
  @media(max-width: 800px) {
    text-align: center;
    margin: 0;
    max-width: 100vw;
    padding: 20px;
  }
 `
const Description = styled.div`
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  max-width: 380px;
  min-width: 10vw;
  word-wrap: break-word;
  @media(max-width: 800px) {
    text-align: center;
    margin-right: 0;
    max-width: 100vw;
  }
`
export function LogoSection() {
  return (
    <Block>
      <Content>
        <Text>
          <Title>Bears for Love</Title>
          <Description>
            Мишек Тедди любит весь мир – это символ любви, нежности и романтики, и конечно, самый лучший
            подарок на любой праздник. В этом разделе вы можете найти мишек Тедди самых разных размеров - от совсем
            маленьких медвежат до огромнейших медведей. Мишки Тедди - настоящие друзья, с которыми не захочется
            расставаться.
          </Description>
        </Text>
        <Logo>
          <LogoFigures/>
          <BearLogo/>
        </Logo>
      </Content>
    </Block>
  )
}