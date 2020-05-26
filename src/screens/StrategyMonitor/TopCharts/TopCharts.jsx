import React from 'react';
import { Grid } from '@material-ui/core';
import { PieChart, BarChart } from '../../../components/Charts';
import { ChartCard } from '../../../components/Custom/common';

const TopCharts = ({strategyDetails}) => {
    return (
      <Grid container justify="space-between">
        <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
          <ChartCard title="Sectors">
            <PieChart name="Sectors" data={strategyDetails.sectors} />
          </ChartCard>
        </Grid>
        <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
          <ChartCard title="Firm Size">
            <PieChart name="Sectors" data={strategyDetails.firmSize} />
          </ChartCard>
        </Grid>
        <Grid item md={4} xs={12} style={{marginBottom: '20px'}}>
          <ChartCard title="Factor Intensity">
            <BarChart
              name="Factor Intensity"
              data={strategyDetails.factorIntensity.data}
              categories={strategyDetails.factorIntensity.categories}
            />
          </ChartCard>
        </Grid>
      </Grid>
    );
};

export default TopCharts;