import React from 'react';
import {TooltipProps} from 'recharts';

const CustomTooltip = ({active, payload}: TooltipProps<number, string>) => {
    if (active && payload && payload.length)
        return (
            <div className='tooltip'>
                <h4 className='tooltip--id'>지역 : {payload[0].payload.id}</h4>
                <div className='tooltip--value-wrapper'>
                    <p>value-area: {payload[0].payload.value_area}</p>
                    <p>value-bar: {payload[0].payload.value_bar}</p>
                </div>
            </div>
        );
    return null;
};

export default CustomTooltip;
