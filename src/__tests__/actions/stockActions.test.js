import mockAxios from 'jest-mock-axios';
import { fetchStocks, reorderStocks } from '../../actions/stockActions';

describe('stock actions', () => {

    afterEach(() => {
        mockAxios.reset();
    });

    test('fetchStocks should dispatch FETCH_STOCKS action with valid stocks', async () => {
        const dispatch = jest.fn();
        fetchStocks()(dispatch);

        const sampleResponseData = [
            { latestPrice: 100 },
            { latestPrice: null },
            { latestPrice: 200 },
            { latestPrice: undefined }
        ];

        const expectedPayload = [
            { latestPrice: 100 },
            { latestPrice: 200 }
        ];

        mockAxios.mockResponse({ data: sampleResponseData });
        expect(dispatch).toHaveBeenCalledWith({ type: 'FETCH_STOCKS', payload: expectedPayload });
    });

    test('fetchStocks should handle error gracefully', async () => {
        const dispatch = jest.fn();
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => { });
        fetchStocks()(dispatch);
        mockAxios.mockError(new Error('Network error'));
        expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching stocks:', expect.any(Error));
        consoleErrorSpy.mockRestore();
    });

    test('reorderStocks should return REORDER_STOCKS action with provided stocks', () => {
        const sampleStocks = [{ latestPrice: 100 }, { latestPrice: 200 }];
        const action = reorderStocks(sampleStocks);

        expect(action).toEqual({ type: 'REORDER_STOCKS', payload: sampleStocks });
    });
});
