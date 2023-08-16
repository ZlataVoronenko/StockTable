import axios from "axios";
import { URL } from "../constants";

export const fetchStocks = () => async dispatch => {

    try {
    const response = await axios.get(URL);
    const validStocks = response.data.filter(stock => stock.latestPrice !== null && stock.latestPrice !== undefined);
        dispatch({ type: 'FETCH_STOCKS', payload: validStocks });
    } catch (error) {
        console.error("Error fetching stocks:", error);
    }
};

export const reorderStocks = (reorderedStocks) => {
    return { type: 'REORDER_STOCKS', payload: reorderedStocks };
};