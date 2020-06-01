import React from 'react';
import Highcharts from 'highcharts/highcharts';
import HighChartsReact from 'highcharts-react-official';
import { formatNumberWithCommas, formatDecimal, convertToK } from 'utils/app.utils';
import PropTypes from 'prop-types';
import { size } from '../charts.constants';

const LineChart = ({data,categories,xTitle, yTitle, showyAxis, showxAxis, variant}) => {
    const dataToDisplay = [
        {
            ...data[0],
            showInLegend: true,
            color: '#358ff0',
        },
        {
            ...data[1],
            showInLegend: true,
            color: '#60DFC8'
        }
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
              const date = this.value.split('-');
              return date[1] || this.value
            },
          },
          categories: categories,
        },
        title: {
          text: ''
        },
        plotOptions: {
          areaspline: {
            marker: {
              enabled: false
            }
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
    variant: PropTypes.oneOf(['drawdown'])
}

LineChart.defaultProps = {
  showxAxis: true,
  showyAxis: true
}

export default LineChart;