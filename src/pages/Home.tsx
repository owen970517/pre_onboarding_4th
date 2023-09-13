import React, {useState} from 'react';
import FilterCategory from '../components/FilterButton/FilterCategory';
import TimeSeriesChart from '../components/TimeSeriesChart';
import FilterRegion from '../components/FilterButton/FilterRegion';

const Home = () => {
    const [nowRegion, setNowRegion] = useState('전체');
    const [category, setCategory] = useState('전체');

    return (
        <>
            <FilterCategory category={category} setCategory={setCategory} />
            <TimeSeriesChart
                category={category}
                nowRegion={nowRegion}
                setNowRegion={setNowRegion}
            />
            <FilterRegion setNowRegion={setNowRegion} nowRegion={nowRegion} />
        </>
    );
};

export default Home;
