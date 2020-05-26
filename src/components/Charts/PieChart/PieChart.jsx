import React from 'react';
import HighCharts from 'highcharts/highcharts';
import HighChartsReact from 'highcharts-react-official';
import { formatDecimal } from 'utils/app.utils';
import { chartColors, size } from '../charts.constants';
import PropTypes from 'prop-types';

const PieChart = ({data, name, title}) => {

    const options = {
        chart: {
            backgroundColor: null,
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            ...size,
            style: {
                fontFamily: 'Poppins-Medium, Roboto,  Helvetica Neue, Arial',
                fontSize: '16px',
                color: '#fff'
            }
        },
        legend: {
            maxHeight: 50
        },
        title: {
            text: title,
            style: {"fontSize": "22px" , "fontFamily": "Poppins-Medium, Roboto,  Helvetica Neue, Arial", "color": "black"},
        },
        credits:{
            enabled: false
        },
        tooltip: {
            formatter: function(){
                return `<b>${this.key} <br/>${formatDecimal(this.y, 0)}%</b>`
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                center: ['50%', '50%'],
                colors: chartColors,
                dataLabels: {
                    enabled: true,
                    distance: -30,
                    formatter: function(){
                        return `<br>${formatDecimal(this.y, 0)} %`
                    }
                },
                innerSize: '30%',
                showInLegend: true
            }
        },
        series: [{
            name: name,
            colorByPoint: true,
            data: data
        }],
      }

    return(
        <HighChartsReact highcharts={HighCharts} options={options}/>
    );
}

PieChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    name: PropTypes.string
}

export default PieChart;