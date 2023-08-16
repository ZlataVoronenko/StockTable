import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './reducers/stockReducer';

export const store = configureStore({
    reducer: {
        stocks: stockReducer,
    },
});
