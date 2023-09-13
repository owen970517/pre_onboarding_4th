import React, {Dispatch, SetStateAction} from 'react';
import {categoryList} from '../../constants/categoryList';
import * as S from '../../styles/FilterButton.styled';

const FilterCategory = ({
    category,
    setCategory,
}: {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}) => {
    const handleCategoryClick = (value: string) => {
        setCategory(value);
    };
    return (
        <S.ButtonContainer>
            {categoryList.map((data, index) => {
                return (
                    <S.ButtonItem
                        key={index}
                        isActive={data === category}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            handleCategoryClick(e.currentTarget.innerHTML)
                        }
                    >
                        {data}
                    </S.ButtonItem>
                );
            })}
        </S.ButtonContainer>
    );
};

export default FilterCategory;
