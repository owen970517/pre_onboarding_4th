import React, {Dispatch, useEffect} from 'react';
import styled from 'styled-components';
import {IChart} from '../../types/chart';

interface PayloadProps {
    payload: IChart;
}

interface tooltipProps {
    active?: boolean;
    payload?: PayloadProps[];
    setDot: Dispatch<React.SetStateAction<string>>;
    category: string;
}

const CustomTooltip = ({active, payload, setDot, category}: tooltipProps) => {
    useEffect(() => {
        if (payload && payload.length) {
            setDot(payload[0].payload.id);
        }
    }, [payload, setDot]);
    if (active && payload && payload.length)
        return (
            <ToolTipContainer>
                <ToolTipRegion>지역 : {payload[0].payload.id}</ToolTipRegion>
                <ToolTipValues>
                    {category === 'Area' || category === '전체' ? (
                        <p>value-area: {payload[0].payload.value_area}</p>
                    ) : null}
                    {category === 'Bar' || category === '전체' ? (
                        <p>value-bar: {payload[0].payload.value_bar}</p>
                    ) : null}
                </ToolTipValues>
            </ToolTipContainer>
        );
    return null;
};

const ToolTipContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 4px;
`;

const ToolTipRegion = styled.h4`
    border-bottom: 1px solid #d3d3d3;
    padding: 1rem;
`;

const ToolTipValues = styled.div`
    padding: 1rem;
`;

export default CustomTooltip;
