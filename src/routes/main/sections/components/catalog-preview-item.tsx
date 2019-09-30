import React from 'react'
import styled from 'styled-components/macro'
import CardPicture from '../../../../images/card-pic-1.jpg'


const Card = styled.div`
height: 100%;
width: 100%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`
const CardPic = styled.div`
background: url('${CardPicture}') center center no-repeat;
background-size: cover;
height: 80%;
`
const CardTitle = styled.div`
height: 20%;
background: white;
font-size: 20px;
display: flex;
justify-content: center;
align-items: center;
`

export function CatalogPreviewItem(){
  return(
    <Card>
      <CardPic/>
      <CardTitle>Teddy Bear</CardTitle>
    </Card>
  )
}