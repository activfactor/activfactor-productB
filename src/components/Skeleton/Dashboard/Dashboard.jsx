import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { Container, Wrapper, HorizontalWrapper } from './style';
import { animation } from '../Skeleton.constants';

const DashboardSkeleton = () => {
    return (
        <Container>
            <HorizontalWrapper width="70%" marginBottom="10px">
                <Skeleton variant="text" animation={animation} width="30%"/>
                <Skeleton variant="text" animation={animation} width={40}/>
            </HorizontalWrapper>
            <Wrapper>
                <Skeleton animation={animation} variant="rect" width="70%" height={350}/>
                <Skeleton animation={animation} variant="rect" width="25%" height={350}/>
            </Wrapper>
            <HorizontalWrapper width="100%" margin="30px 0px 15px">
                <Skeleton variant="text" animation={animation} width="10%"/>
                <Skeleton variant="text" animation={animation} width="10%"/>
            </HorizontalWrapper>
            <Wrapper>
                <Skeleton animation={animation} variant="rect" width="31%" height={250}/>
                <Skeleton animation={animation} variant="rect" width="31%" height={250}/>
                <Skeleton animation={animation} variant="rect" width="31%" height={250}/>
            </Wrapper>
        </Container>
    );
};

export default DashboardSkeleton;