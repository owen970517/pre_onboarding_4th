import React, {useState} from 'react';
import FilterButton from '../components/FilterButton';
import FilterCategory from '../components/FilterCategory';
import TimeSeriesChart from '../components/TimeSeriesChart';

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
            <FilterButton setNowRegion={setNowRegion} nowRegion={nowRegion} />
        </>
    );
};

export default Home;
