import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStocks } from '../actions/stockActions';

function useFetchStocks(page) {
    const dispatch = useDispatch();
    const stocks = useSelector(state => state.stocks);

    useEffect(() => {
        dispatch(fetchStocks(page));
    }, [dispatch, page]);

    return stocks;
}

export default useFetchStocks;