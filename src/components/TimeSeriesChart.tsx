import React, {Dispatch, SetStateAction} from 'react';
import useChartData from '../hooks/useChartData';
import {
    Area,
    Bar,
    CartesianGrid,
    Cell,
    ComposedChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import CustomTooltip from './CustomTooltip';

const TimeSeriesChart = ({
    category,
    nowRegion,
    setNowRegion,
}: {
    category: string;
    nowRegion: string;
    setNowRegion: Dispatch<SetStateAction<string>>;
}) => {
    const {chartData} = useChartData();
    return (
        <ResponsiveContainer width='100%' height={500}>
            <ComposedChart
                data={chartData}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke='#f5f5f5' />
                <XAxis
                    dataKey='time'
                    label={{
                        value: '2023-02-01일자',
                        position: 'insideBottomLeft',
                        offset: -10,
                    }}
                />
                <YAxis
                    yAxisId='left'
                    domain={['auto', 'dataMax + 100']}
                    label={{
                        value: 'area',
                        angle: -90,
                        position: 'insideLeft',
                        offset: 1,
                    }}
                />
                <YAxis
                    yAxisId='right'
                    orientation='right'
                    label={{
                        value: 'bar',
                        angle: 90,
                        position: 'insideRight',
                        offset: -10,
                    }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend height={50} />
                {category === '전체' || category === 'Bar' ? (
                    <Bar
                        dataKey='value_bar'
                        barSize={25}
                        fill='#8884d8'
                        yAxisId='right'
                        onClick={data => setNowRegion(data.id)}
                    >
                        {chartData.map((data, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={`${data.id === nowRegion ? '#423da2' : '#8884d8'}`}
                            />
                        ))}
                    </Bar>
                ) : null}
                {category === '전체' || category === 'Area' ? (
                    <Area
                        type='monotone'
                        yAxisId='left'
                        dataKey='value_area'
                        fill='#ff002b'
                        stroke='#ff002b'
                    />
                ) : null}
            </ComposedChart>
        </ResponsiveContainer>
    );
};

export default TimeSeriesChart;
