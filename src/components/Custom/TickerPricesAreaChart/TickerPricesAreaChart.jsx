import React from 'react';
import Highcharts from 'highcharts/highcharts';
import HighChartsReact from 'highcharts-react-official';
import { formatNumberWithCommas, convertToK } from 'utils/app.utils';
import PropTypes from 'prop-types';
import { size } from '../../Charts/charts.constants';

const AreaChart = ({data,categories,xTitle, yTitle, showyAxis, showxAxis, tickInterval, showLegends}) => {
    const dataToDisplay = [
        {
            ...data,
            showInLegend: showLegends,
            fillColor: {
                linearGradient: {
                    x1: 1,
                    y1: 1,
                    x2: 0.5,
                    y2: 0.8
                },
                stops: [
                    [0, '#358ff0'],
                    [1, 'rgba(104, 173, 247, 0.1)']
                ]
            },
            color: '#358ff0'
        }
    ]
    const options = {
        chart:{
            type: "areaspline",
            ...size
        },
        credits:{
          enabled: false
        },
        tooltip: {
          formatter: function(){
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
                    return convertToK(this.value)
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
              return this.value
            },
          },
          categories: categories,
          tickInterval: tickInterval
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

AreaChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    xTitle: PropTypes.string,
    yTitle: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    showyAxis: PropTypes.bool,
    showxAxis: PropTypes.bool,
    variant: PropTypes.oneOf(['drawdown']),
    tickInterval: PropTypes.number
}

AreaChart.defaultProps = {
  showxAxis: true,
  showyAxis: true
}

export default AreaChart;