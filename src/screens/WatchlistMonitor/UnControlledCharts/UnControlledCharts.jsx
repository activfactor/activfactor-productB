import React from 'react';
import { PieChart } from 'components/Charts';
import { ChartCard  } from 'components/Custom/common';
import { useTheme, useMediaQuery } from '@material-ui/core';

const UncontrolledCharts = ({watchlistDetails}) => {
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down('md'));
    const {country, firmSize, sector} = watchlistDetails;
    return (
        <>
                <ChartCard title="Country" margin={match ? "0px" : "0px auto 0px 0px"}>
                    <PieChart name="Country" data={country}/>
                </ChartCard>
                <ChartCard title="Sector" margin={match ? "0px" : "0px auto 0px auto"}>
                    <PieChart name="Country" data={sector}/>
                </ChartCard>
                <ChartCard title="Firm Size" margin={match ? "0px" : "0px 0px 0px auto"}>
                    <PieChart name="Firm Size" data={firmSize}/>
                </ChartCard>
        </>
    );
};

export default UncontrolledCharts;