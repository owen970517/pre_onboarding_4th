import React, {useState} from 'react';
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
import useChartData from '../hooks/useChartData';
import CustomTooltip from '../components/CustomTooltip';
import FilterButton from '../components/FilterButton';

const Home = () => {
    const {chartData} = useChartData();
    const [nowRegion, setNowRegion] = useState('');
    return (
        <>
            <FilterButton setNowRegion={setNowRegion} />
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
                    <XAxis dataKey='time' />
                    <YAxis
                        yAxisId='left'
                        domain={['auto', 200]}
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
                    <Bar
                        dataKey='value_bar'
                        barSize={20}
                        fill='#8884d8'
                        yAxisId='right'
                        onClick={data => setNowRegion(data.id)}
                    >
                        {chartData.map((data, index) => (
                            <Cell
                                key={index}
                                fill={`${data.id === nowRegion ? 'red' : '#8884d8'}`}
                            />
                        ))}
                    </Bar>
                    <Area
                        type='monotone'
                        dataKey='value_area'
                        fill='#e84a64'
                        stroke='#e84a64'
                        yAxisId='left'
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );
};

export default Home;
