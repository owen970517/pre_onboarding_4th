import React, {Dispatch, SetStateAction} from 'react';
import * as S from '../../styles/FilterButton.styled';
import useChartData from '../../hooks/useChartData';

const FilterRegion = ({
    setNowRegion,
    nowRegion,
}: {
    setNowRegion: Dispatch<SetStateAction<string>>;
    nowRegion: string;
}) => {
    const {chartRegionList} = useChartData();
    const handleRegionClick = (value: string) => {
        setNowRegion(value);
    };
    return (
        <S.ButtonContainer>
            {chartRegionList.map((region, index) => {
                return (
                    <S.ButtonItem
                        key={index}
                        isActive={region === nowRegion}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            handleRegionClick(e.currentTarget.innerHTML)
                        }
                    >
                        {region}
                    </S.ButtonItem>
                );
            })}
        </S.ButtonContainer>
    );
};

export default FilterRegion;
