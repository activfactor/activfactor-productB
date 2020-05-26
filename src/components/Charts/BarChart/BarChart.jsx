import React, {useMemo} from 'react';
import HighCharts from 'highcharts/highcharts';
import HighChartsReact from 'highcharts-react-official';
import { formatDecimal } from 'utils/app.utils';
import { chartColors, getColorByIndex, size } from '../charts.constants';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';

const BarChart = ({data, title, Ytitle, Xtitle, categories, showLegends, minAxis, maxAxis, roundTo}) => {
    // only one series supplied 
    const theme = useTheme();
    const dataToDisplay = data;
    const transformedData = useMemo(() => {
        if (dataToDisplay && [].constructor === dataToDisplay.constructor){
            return [{data: dataToDisplay.map((obj, index) => ({...obj, color: getColorByIndex(index)}))}]
        } else if (data) {
            const {data: dataValues} = dataToDisplay;
            const dataToInject = dataValues.map(obj => {
                if (obj.y>0){
                    return {...obj, color: theme.palette.primary.main}
                }
                return {...obj, color: theme.palette.error.main}
            })
            return [{name: dataToDisplay.name, data: dataToInject}];
        }
    }, [dataToDisplay, theme, data]);
    const options = {
        chart: {
            type: 'bar',
            ...size
        },
        title: {
            text: title,
            style: {"fontSize": "22px" , "fontFamily": "Poppins-Medium, Roboto,  Helvetica Neue, Arial", "color": "black"},
        },
        xAxis: {
            categories: categories || null,
            title: {
                text: Xtitle || null
            },
        },
        yAxis: {
            min: minAxis,
            max: maxAxis,
            title: {
                text: Ytitle || null,
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            formatter: function(){
                return `<b>${this.key} <br/>${formatDecimal(this.y, roundTo)}%</b>`
            },
        },
        plotOptions: {
            bar: {
                allowPointSelect: true,
                cursor: 'pointer',
                colors: chartColors,
                dataLabels: {
                    enabled: true,
                    formatter: function(){
                        return `<br>${formatDecimal(this.y, roundTo)} %`
                    }
                }
            },
            series: {
                pointWidth: 20
            }
        },
        legend: {
            layout: 'horizontal',
            align: 'bottom',
            verticalAlign: 'top',
            floating: true,
            borderWidth: 1,
            backgroundColor:
                HighCharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true,
            enabled: showLegends
        },
        credits: {
            enabled: false
        },
        series: transformedData
    }

    return(
        <HighChartsReact highcharts={HighCharts} options={options} />
    );
}

BarChart.propTypes = {
    data: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]) ,
    title: PropTypes.string,
    Ytitle: PropTypes.string,
    Xtitle: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    showLegends: PropTypes.bool,
    roundTo: PropTypes.number,
    minAxis: PropTypes.number,
    maxAxis: PropTypes.number
}

BarChart.defaultProps = {
    showLegends: false,
    roundTo: 0,
}

export default BarChart;