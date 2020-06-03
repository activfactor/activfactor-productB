import React from 'react';
import Highcharts from 'highcharts/highcharts';
import HighChartsReact from 'highcharts-react-official';
import { formatNumberWithCommas, formatDecimal, convertToK } from 'utils/app.utils';
import PropTypes from 'prop-types';
import { size } from '../../Charts/charts.constants';
import { useTheme } from '@material-ui/core';

const LineChart = ({data,categories,xTitle, yTitle, showyAxis, showxAxis, variant, showFullXLabel, showLegends}) => {
    const theme = useTheme();
    const dataToDisplay = [
        {
            ...data,
            showInLegend: true,
            color: theme.palette.primary.light,
        },
    ]
    const options = {
        chart:{
            type: "line",
            ...size
        },
        credits:{
          enabled: false
        },
        tooltip: {
          formatter: function(){
              if (variant==='drawdown'){
                return `<b>${this.key}</b><br><p>${this.series.name} ${formatDecimal(this.y, 0)}%</p>`
              }
            return `<b>${this.key}</b><br><p>${this.series.name} $${formatNumberWithCommas(this.y)}</p>`
          }
        },
        yAxis: {
            visible: showyAxis,
            title: {
                text: yTitle,
                style: {"fontSize": "22px" , "fontFamily": "Poppins-Medium, Roboto,  Helvetica Neue, Arial", "color": "black"},
            },
            labels: {
                formatter: function() {
                    if (variant==='drawdown'){
                        return `${this.value}%`
                    }
                    return `$${convertToK(this.value)}`
                },
            }
            
        },
        xAxis: {
          visible: showxAxis,
          title: {
            text: xTitle,
            style: {"fontSize": "22px" , "fontFamily": "Poppins-Medium, Roboto,  Helvetica Neue, Arial", "color": "black"},
          },
          labels: {
            formatter: function() {
                if (showFullXLabel){
                    return this.value;
                }
                const date = this.value.split('-');
                return date[1] || this.value
            },
          },
          categories: categories,
          tickInterval: 5
        },
        legend: {
            enabled: showLegends
        },
        title: {
          text: ''
        },
        plotOptions: {
          areaspline: {
            marker: {
              enabled: false
            }
          },
          series: {
            turboThreshold: 10000
          }
        },
        // colors: chartColors(),
        series: dataToDisplay
      }

    return(
        <HighChartsReact highcharts={Highcharts} options={options}/>
    );
}

LineChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    xTitle: PropTypes.string,
    yTitle: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    showyAxis: PropTypes.bool,
    showxAxis: PropTypes.bool,
    variant: PropTypes.oneOf(['drawdown']),
    showFullXLabel: PropTypes.bool,
    showLegends: PropTypes.bool
}

LineChart.defaultProps = {
  showxAxis: true,
  showyAxis: true,
  showLegends: true
}

export default LineChart;