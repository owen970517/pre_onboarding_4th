import axios from 'axios';

export const getChartData = async () => {
    const res = await axios.get('/src/assets/data.json');

    return res.data.response;
};
