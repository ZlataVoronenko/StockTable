import { renderHook } from '@testing-library/react-hooks';
import { useDispatch, useSelector } from 'react-redux';
import useFetchStocks from '../../hooks/useFetchStocks';
import { fetchStocks } from '../../actions/stockActions';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn()
}));

describe('useFetchStocks', () => {
    const mockDispatch = jest.fn();

    beforeEach(() => {
        useDispatch.mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should call fetchStocks with the provided page on initialization', () => {
        renderHook(() => useFetchStocks(1));
        expect(mockDispatch).toHaveBeenCalledWith(fetchStocks(1));
    });

    it('should call fetchStocks again when page changes', () => {
        const { rerender } = renderHook((page) => useFetchStocks(page), { initialProps: 1 });
        rerender(2);
        expect(mockDispatch).toHaveBeenCalledWith(fetchStocks(2));
    });

    it('should return stocks from redux store', () => {
        useSelector.mockReturnValue([{ symbol: 'MSFT-MM', companyName: 'Microsoft Corp.', latestPrice: 4322 }]);
        const { result } = renderHook(() => useFetchStocks(1));
        expect(result.current).toEqual([{ symbol: 'MSFT-MM', companyName: 'Microsoft Corp.', latestPrice: 4322 }]);
    });
});
