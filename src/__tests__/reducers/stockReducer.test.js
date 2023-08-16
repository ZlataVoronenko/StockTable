import stockReducer from '../../reducers/stockReducer';

describe('stockReducer', () => {

    test('should return initial state by default', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN_ACTION' };

        const newState = stockReducer(undefined, action);
        expect(newState).toEqual(initialState);
    });

    test('should handle FETCH_STOCKS action', () => {
        const fetchedStocks = [
            { symbol: 'MSFT', companyName: 'Microsoft Corp.', latestPrice: 4322 },
            { symbol: 'SSNGY', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 }
        ];
        const action = { type: 'FETCH_STOCKS', payload: fetchedStocks };

        const newState = stockReducer([], action);
        expect(newState).toEqual(fetchedStocks);
    });

    test('should handle REORDER_STOCKS action', () => {
        const reorderedStocks = [
            { symbol: 'SSNGY', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 },
            { symbol: 'MSFT', companyName: 'Microsoft Corp.', latestPrice: 4322 }
        ];
        const action = { type: 'REORDER_STOCKS', payload: reorderedStocks };

        const currentState = [
            { symbol: 'MSFT', companyName: 'Microsoft Corp.', latestPrice: 4322 },
            { symbol: 'SSNGY', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 }
        ];

        const newState = stockReducer(currentState, action);
        expect(newState).toEqual(reorderedStocks);
    });
});