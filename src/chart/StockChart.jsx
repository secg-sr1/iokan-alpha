import React, { useEffect, useState } from 'react';
import ReactEcharts from 'echarts-for-react';
import axios from 'axios'



const API_KEY = 'V0AB6KRHPJF31S1P'

const StockChart = () => {

    const [data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [error, setError ] = useState(null);
    // const [option, setOption] = useState(null);
    


    useEffect(() => {

        const fetchDataValues = async () => {

            const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NVDA&interval=5min&apikey=V0AB6KRHPJF31S1P')
            const featuresData = response.data['Time Series (5min)']

            setData(featuresData)
            setLoading(false)

        }

        fetchDataValues();


    },[])

    if (loading) {return <div>Loading</div>}
    if (error) {return <div>Error: {error.message}</div>}

    if (!data || Object.keys(data).length === 0) {
        return <div>No data available</div>
    }

    // console.log(data, 'data')
    const times = Object.keys(data)
    // console.log(times)

    const categories = Object.keys(data[times[0]])

    const seriesData = {};
    categories.forEach((category) => {
        seriesData[category] = times.map((time) => data[time][category])
    })

    if (!times.length || !categories.length) {
        return <div>No data available for chart</div>
    }

    const series = categories.map((category) => ({
        name:category, 
        type:'line',
        data:seriesData[category]
    }))


    const option = {
        color:['#4CBB17', '#AAFF00', '#7CFC00', '#AFE1AF', '#DFFF00'],
        tooltip: {
            trigger:'axis',
            axisPointes: {type:'shadow'},
            textStyle:{
                fontFamily:'Manrope, sans-serif',
            }
        },
        legend:{
            textStyle:{
                fontFamily:'Manrope, sans-serif',
            }
          },
        xAxis:{
            type:'category',
            data:times,
            textStyle:{
                fontFamily:'Manrope, sans-serif',
            }
            
        },
        yAxis:{
            type:'value',
            textStyle:{
                fontFamily:'Manrope, sans-serif',
            }
        },
        series:series,
    }
    
    return <ReactEcharts option={option} style={{height: '300px', width:'100%'}} />
    
  };
  
export default StockChart;



