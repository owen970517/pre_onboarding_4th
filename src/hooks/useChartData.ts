import {useEffect, useState} from 'react';
import {getChartData} from '../apis/chart';
import type {IChart, IData} from '../types/chart';
import {convertTimeFormat} from '../utils/convertTimeFormat';

const useChartData = () => {
    const [chartData, setChartData] = useState<IChart[]>([]);
    useEffect(() => {
        const getChart = async () => {
            const data: IData = await getChartData();
            const newData = Object.entries(data).map(([time, item]) => ({
                time: convertTimeFormat(new Date(time).toLocaleTimeString()),

                ...item,
            }));

            setChartData(newData);
        };

        getChart();
    }, []);
    const chartRegionList = Array.from(new Set(chartData.map(data => data.id))).sort();
    chartRegionList.unshift('전체');
    return {chartData, chartRegionList};
};

export default useChartData;
