import React, {useMemo} from 'react';
import { Date, DateTitle } from '../../common.style';
import { useSelector } from 'react-redux';
import { Card, Table, Button } from '../../../components/MaterialUIs';
import AddTickerControl from 'components/Custom/AddTickerControl';
import { Grid } from '@material-ui/core';
import { Autorenew } from '@material-ui/icons';
import { StyledCell, StyledRow, StyledTickerCell, Description, DescriptionTitle, ButtonWrapper, HeaderContainer, useStyles } from './style';
import { filterObject, capitalize, getColor, getValue } from 'utils/app.utils';


const TopHeader = () => {
    const {CardContainer } = useStyles();
    const {tickerDetails} = useSelector((state) => state.ticker);
    const renderHeaders = () => {
        const {ticker, performance} = tickerDetails;
        return (
          <>
            <StyledTickerCell>{ticker}</StyledTickerCell>
            {performance.map((performance, index) => (
                <StyledCell
                  align="center"
                  key={`${index}_${performance.metric}`}
                  variant="head"
                  component="p"
                >
                  {performance.metric}
                </StyledCell>
              ))}
          </>
        );
    }

    const onTradeClick = (tickerId) => () => {
        console.log(`open trade order to order ${tickerId}`)
    }

    const dataTable = useMemo(() => {
        
        if (tickerDetails){
            const {performance} = tickerDetails;
            const keys = Object.keys(filterObject(performance[0], 'metric'));
            return keys.map(key => {
                const descriptions = {};
                if (key==='ticker'){
                    descriptions[key]= {
                        description: tickerDetails.companyName,
                        descriptionTitle: 'Company name: ',
                    }
                } else {
                    descriptions[key] = {
                        description: tickerDetails[key],
                        descriptionTitle: `${capitalize(key)}: `
                    }
                }
                const row = performance.map(obj => {
                    return {value: obj[key], unit: '%'};
                })
                row.unshift(descriptions[key]);
                return row;
            })
        }
    }, [tickerDetails]); 

    const renderRows = () => {
        if (dataTable){
            return (
              <>
                {dataTable.map(row => (
                    <StyledRow>
                        {row.map((cell, index) => {
                            if (cell.description){
                                return (
                                    <StyledCell align="left" key={cell.description}>
                                        <DescriptionTitle component="span">{cell.descriptionTitle}</DescriptionTitle>
                                        <Description component="span">{cell.description}</Description>
                                    </StyledCell>
                                )
                            }
                            return (
                                <StyledCell key={`${cell.value}_${index}`} align="center" color={getColor(cell.value)}>{`${getValue(cell.value)}${cell.unit ? cell.unit : ''}`}</StyledCell>
                            )
                        })}        
                    </StyledRow>
                ))}
              </>
            );
        }
    }

    const {lastUpdate, tradingitemid} = tickerDetails;
    return (
        <>
            <Grid container justify="space-between" alignItems="center" style={{marginBottom: '15px'}}>
                <Grid item xs={12} md={6}>
                    <Autorenew /> <DateTitle component="span">Updates:</DateTitle>
                    <Date component="span">Last: {lastUpdate}</Date>
                </Grid>
            </Grid>
            <HeaderContainer>
                <Card className={CardContainer}>
                    <Grid container justify="space-between" alignItems="center">
                        <Grid item xs={12}>
                            <Table minWidth="515px" noshadow={true} renderHeaders={renderHeaders} renderRows={renderRows}/>
                        </Grid>
                    </Grid>
                </Card>
                <Card className={CardContainer}>
                    <ButtonWrapper>
                        <AddTickerControl watchlistToSave={[tradingitemid]} />
                    </ButtonWrapper>
                    <ButtonWrapper>
                        <Button label="Trade" onClick={onTradeClick(tradingitemid)} fullWidth={true}/>
                    </ButtonWrapper>
                </Card>
            </HeaderContainer>
        </>
    );
};

export default TopHeader;