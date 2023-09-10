import React, {useEffect, useState} from 'react';
import {getChartData} from '../apis/chart';

const Home = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        const getChart = async () => {
            const data = await getChartData();
            setChartData(data);
        };
        getChart();
    }, []);
    console.info(chartData);
    return <div>Home</div>;
};

export default Home;
