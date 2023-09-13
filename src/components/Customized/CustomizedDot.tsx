import React from 'react';
import {IChart} from '../../types/chart';

interface DotProps {
    cx?: number;
    cy?: number;
    payload?: IChart;
    nowRegion: string;
}

const CustomizedDot = (props: DotProps) => {
    const {cx, cy, nowRegion, payload} = props;
    if (payload?.id === nowRegion) return <circle cx={cx} cy={cy} r={5} fill='red' />;
    return null;
};

export default CustomizedDot;
