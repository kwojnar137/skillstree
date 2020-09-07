import styled from 'styled-components';
import React from 'react'



const PriceContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: ${props => props.isOldPrice ? '2px 10px 10px' : '10px'};
`

const OldPrice = styled.div`
display: flex;
justify-content: center;
padding: 10px 10px 0px 10px;
text-decoration: line-through;
`

const ActualPrice = styled.div`
display: flex;
justify-content: center;

`




export default function Price({ price, oldPrice, currency }) {

  if (oldPrice) {
    return (
      <PriceContainer isOldPrice={true}>
        <OldPrice>
          {oldPrice}{currency}
        </OldPrice>
        <ActualPrice>
          {price}{currency}
        </ActualPrice>

      </PriceContainer>
    )
  }
  return (
    <PriceContainer isOldPrice={false}>
      <ActualPrice>
        {price}{currency}
      </ActualPrice>
    </PriceContainer>
  )

}

