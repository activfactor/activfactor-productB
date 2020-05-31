import React from 'react';
import { PieChart, BarChart } from '../../../components/Charts';
import { ChartCard, CardListing } from '../../../components/Custom/common';

const TopCharts = ({strategyDetails}) => {
    return (
      <CardListing repeat={3}>
          <ChartCard title="Sectors">
            <PieChart name="Sectors" data={strategyDetails.sectors} />
          </ChartCard>
          <ChartCard title="Firm Size">
            <PieChart name="Sectors" data={strategyDetails.firmSize} />
          </ChartCard>
          <ChartCard title="Factor Intensity">
            <BarChart
              minAxis={-100}
              maxAxis={100}
              name="Factor Intensity"
              data={strategyDetails.factorIntensity.data}
              categories={strategyDetails.factorIntensity.categories}
            />
          </ChartCard>
      </CardListing>
    );
};

export default TopCharts;