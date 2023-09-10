import React, {Dispatch, SetStateAction} from 'react';
import useChartData from '../hooks/useChartData';

const FilterButton = ({setNowRegion}: {setNowRegion: Dispatch<SetStateAction<string>>}) => {
    const {chartRegionList} = useChartData();
    const handleRegionClick = (value: string) => {
        setNowRegion(value);
    };
    return (
        <div className='btn-wrapper'>
            {chartRegionList.map((region, index) => {
                return (
                    <button
                        key={index}
                        className='btn'
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            handleRegionClick(e.currentTarget.innerHTML)
                        }
                    >
                        {region}
                    </button>
                );
            })}
        </div>
    );
};

export default FilterButton;
