import React, {Dispatch, SetStateAction} from 'react';
import {categoryList} from '../constants/categoryList';

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
        <div className='btn-wrapper'>
            {categoryList.map((data, index) => {
                return (
                    <button
                        key={index}
                        className={`${data === category ? 'btn-active' : 'btn'}`}
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                            handleCategoryClick(e.currentTarget.innerHTML)
                        }
                    >
                        {data}
                    </button>
                );
            })}
        </div>
    );
};

export default FilterCategory;
