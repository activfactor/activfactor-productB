import React from 'react';
import {getValue, getVariant} from '../../../../utils/textFunctions';
import { Wrapper, Title, Value } from './style';

const ContentBlock = ({description, number, number2, number3, unit, unit2, unit3}) => {
    return (

      <Wrapper>
        {
          description && 
            <Title>{description}</Title>
        }

        {
          (number || number===0) && 
            <Value variant={getVariant(number)}>{getValue(number)}{unit}</Value>
        }

        {
          (number2 || number2===0) &&
          <Value variant={getVariant(number2)}>{getValue(number2)}{unit2}</Value>
        }

        {
          (number3 || number3===0) &&
            <Value variant={getVariant(number3)}>{getValue(number3)}{unit3}</Value> 
        }

      </Wrapper>

    );
}

export default ContentBlock;