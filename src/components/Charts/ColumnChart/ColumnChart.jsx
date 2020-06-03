import React, {useMemo} from 'react';
import HighCharts from 'highcharts/highcharts';
import HighChartsReact from 'highcharts-react-official';
import { formatDecimal } from 'utils/app.utils';
import { chartColors, getColorByIndex, size } from '../charts.constants';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core';

const ColumnChart = ({data, title, Ytitle, Xtitle, categories, showLegends, minAxis, maxAxis, roundTo, showXaxisLabel}) => {
    const theme = useTheme();
    // only one series supplied 
    const lengthOfData = useMemo(() => {
        if (data && [].constructor === data.constructor){
            return data[0].data.length
        } else if (data){
            return data.data.length;
        }
    }, [data]);

    const transformedData = useMemo(() => {
        if (data && [].constructor === data.constructor){
            return data.map((obj, index) => ({...obj, color: getColorByIndex(index)}))
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
            type: 'column',
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
            visible: showXaxisLabel
        },
        yAxis: {
            min: minAxis ? minAxis : null,
            max: maxAxis ? maxAxis : null,
            title: {
                text: Ytitle || null,
                align: 'high'
            },
            labels: {
                overflow: 'justify',
                formatter: function() {
                    return `${this.value}%`
                },
            }
        },
        tooltip: {
            formatter: function(){
                return `${this.key} <b>${formatDecimal(this.y, roundTo)}%</b>`
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
                pointWidth: lengthOfData<10 ? 20 : null
            }
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
        <HighChartsReact highcharts={HighCharts} options={options}/>
    );
}

ColumnChart.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    Ytitle: PropTypes.string,
    Xtitle: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    showLegends: PropTypes.bool,
    minAxis: PropTypes.number,
    maxAxis: PropTypes.number,
    roundTo: PropTypes.number,
    uniColor: PropTypes.bool,
    showXaxisLabel: PropTypes.bool
}

ColumnChart.defaultProps = {
    showLegends: true,
    roundTo: 0,
    uniColor: false
}

export default ColumnChart;