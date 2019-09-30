import React from 'react'
import styled from 'styled-components/macro'
import BearOne from '../../../images/bear-one.png'
import BearTwo from '../../../images/bear-three.png'
import { Button } from '@material-ui/core'


const Block = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background: #E9BAE0;
`
const Content = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: -50px;
  @media(max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;
  }
  `
const InfoBox = styled.div`
  width: 45%;
  height: 90%;
  display: flex; 
  padding: 20px;
  background: white;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  @media(max-width: 800px) {
    width: 90vw;
    margin-top: -100px;
    margin-bottom: 50px;
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
const Text = styled.div`
  z-index: 1;
  @media(max-width: 800px) {
    text-align: center;
    margin: 0;
    max-width: 100vw;
    padding: 0 20px;
  }
 `
const OrderSection = styled.div`
  width: 500px;
  position: relative;
  overflow: hidden;
  margin-top: -20px;
  @media(max-width: 800px) {
  width: 100vw;
  top: -30px;
  }
`
const StyledBearOne = styled.div`
  background: url('${BearOne}') center center no-repeat;
  background-size: contain;
  width: 300px;
  height: 350px;
  position: relative;
  -webkit-transform: rotate(60deg);
  left: -100px;
  z-index: 0;
  @media(max-width: 800px) {
    height: 270px;
    width: 230px;
  }
`
const StyledBearTwo = styled.div`
  background: url('${BearTwo}') center center no-repeat;
  background-size: contain;
  width: 300px;
  height: 350px;
  position: relative;
  -webkit-transform: rotate(-20deg);
  left: 330px;
  z-index: 0;
  bottom: 150px ;
  @media(max-width: 800px) {
  display: none;
  }
`
const StyledButton = styled(Button)`
  padding: 20px 40px;
  max-width: 200px;
  max-height: 100px; 
  position: relative;
  left: 150px;
  bottom: 150px;
`

export function HowToBuy() {
  return (
    <Block>
      <Content>
        <OrderSection>
          <StyledBearOne/>
          <StyledBearTwo/>
          <StyledButton variant="contained" color="secondary">Order</StyledButton>
        </OrderSection>
        <InfoBox>
          <Title>How To Buy</Title>
          <Text>
            Доставка осуществляется почтой России в течение 7-20 дней после оплаты заказа.
            После отправки заказа, вы получите номер для отслеживания вашей посылки по электронной почте.
            С момента отправки Вашего заказа, все претензии по срокам доставки адресуются только Почте России.
            <br/>
            <br/>
            При получении Заказа Вы должны проверить качество товара, соответствие наименований и количества позиций.
            При
            обнаружении недовоза, пересорта или брака Вы вправе отказаться от всего Заказа или его части, оплатив только
            тот товар, который забираете. При этом вы оплачиваете стоимость доставки товара, который вы выкупаете.
            <br/>
            <br/>
            Шаг 1. Оформить заказ в корзине интернет-магазина Energetix-Shop.by выбрав способ оплаты «PayAnyWay (Оплата
            через универсальную платежную систему)» и нажать кнопку «подтвердить и оформить заказ».<br/>
            Шаг 2. На открывшейся странице нажать на кнопку «Оплатить заказ в системе PayAnyWay»<br/>
            Шаг 3. На открывшейся странице платежной системы PayAnyWay выбрать подходящий вам вариант оплаты из раздела
            "Способы оплаты"<br/>
            Шаг 4. Ввести платежные данные и нажать кнопку «Оплатить».
            После того как платеж будет успешно завершен, вы будете перенаправлены на сайт продавца.
          </Text>
        </InfoBox>
      </Content>
    </Block>
  )
}