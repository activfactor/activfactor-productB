import React, {useMemo} from 'react';
import HighCharts from 'highcharts/highcharts';
import HighChartsReact from 'highcharts-react-official';
import { formatDecimal } from 'utils/app.utils';
import { chartColors, getColorByIndex, size } from '../charts.constants';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';

const BarChart = ({data, title, Ytitle, Xtitle, categories, showLegends, minAxis, maxAxis, roundTo, unit}) => {
    // only one series supplied 
    const theme = useTheme();
    const transformedData = useMemo(() => {
        if (data && [].constructor === data.constructor){
            return data.map((obj, index) => ({...obj, color: getColorByIndex(index)}));
        } else if (data) {
            const {data: dataValues} = data;
            const dataToInject = dataValues.map(obj => {
                if (obj.y>0){
                    return {...obj, color: theme.palette.primary.main}
                }
                return {...obj, color: theme.palette.error.main}
            })
            return [{name: data.name, data: dataToInject}];
        }
    }, [data, theme]);
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
            visible: false
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
                return `<b>${this.key} <br/>${formatDecimal(this.y, roundTo)} ${unit ? unit : ''}</b>`
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
                        return `<br>${formatDecimal(this.y, roundTo)} ${unit ? unit : ''}`
                    }
                }
            },
        },
        legend: {
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
    maxAxis: PropTypes.number,
    unit: PropTypes.string
}

BarChart.defaultProps = {
    showLegends: true,
    roundTo: 0,
}

export default BarChart;