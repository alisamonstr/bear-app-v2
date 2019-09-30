import React from 'react'
import styled from 'styled-components/macro'
import { CatalogPreviewItem } from './components/catalog-preview-item'
import { Button } from '@material-ui/core'
import CardPicture4 from '../../../images/card-pic-4.jpg'

const Block = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #FFF379;
`
const Content = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  @media(max-width: 800px) {
    flex-wrap: wrap;
     justify-content: center;
  }
  `
const Table = styled.div`
  width: 600px;
  height: 90%;
  display: grid; 
  grid-template-columns: 50% 35% ;
  grid-template-rows: 55% 42%;
  grid-column-gap: 3% ;
  grid-row-gap: 3%;
  margin-top: -50px;
  @media(max-width: 800px) {
    width: 90%;
    grid-template-rows: 40% 30%;
    grid-template-columns: 52% 38% ;
    grid-row-gap: 2%;
    margin-left: 10px;
    margin-top: 50px;
  }
  `

const ItemOne = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background: blue;
`
const ItemTwo = styled.div` 
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  background: white;
  height: 70%;
  align-self: end;
`
const ItemThree = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  background: blue;
  width: 70%;
  justify-self: end;
`
const ItemFour = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  background: url('${CardPicture4}') center center no-repeat;
  background-size: cover;
  width: 70%;
  height: 60%;
`
const ButtonBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 300px;
 @media(max-width: 800px) {
 margin-top: -50%;
 justify-content: center;
 }
`
const StyledButton = styled(Button)`
padding: 20px 30px !important;
`

export function CatalogPreview() {
  return (
    <Block>
      <Content>
        <Table>
          <ItemOne>
            <CatalogPreviewItem/>
          </ItemOne>
          <ItemTwo>
            <CatalogPreviewItem/>
          </ItemTwo>
          <ItemThree>
            <CatalogPreviewItem/>
          </ItemThree>
          <ItemFour> </ItemFour>
        </Table>
        <ButtonBox>
          <StyledButton variant="contained" color="secondary">
            Catalog
          </StyledButton>
        </ButtonBox>
      </Content>
    </Block>
  )
}