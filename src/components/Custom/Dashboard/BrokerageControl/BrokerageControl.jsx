import React, {useCallback} from 'react';
import { DashboardSection } from 'components/Layout';
import { Card, Button, Link } from 'components/MaterialUIs';
import { HeaderTitle } from '../commonStyle'; 
import BrokerageImg from 'assets/Images/brokerage.png';
import { StyledCardContent, ImageWrapper, Title, SubTitle, ActionWrapper } from './style';

const BrokerageControl = () => {
    const renderHeader = useCallback(() => (
        <HeaderTitle component="h1">
            My brokerages
        </HeaderTitle>
    ), []);

    const renderContent = useCallback(() => (
        <Card>
            <StyledCardContent>
                <ImageWrapper>
                    <img src={BrokerageImg} alt="wealthface brokerage connection" width="120px" height="120px"/>
                </ImageWrapper>
                <Title component="h2">No Brokerage Connected</Title>
                <SubTitle component="p">You've not connected a brokerage account to Wealthface. Why not give it a go?</SubTitle>
                <ActionWrapper>
                    <Button label="Connect Brokerage" fullWidth={true} onClick={() => console.log('connect to brokerage')}/>
                </ActionWrapper>
                <Link to="/brokerage/create" label="Create an account"/>
            </StyledCardContent>
        </Card>
    ), []);
    return (
        <DashboardSection renderHeader={renderHeader} renderContent={renderContent}/>
    );
};

export default BrokerageControl;