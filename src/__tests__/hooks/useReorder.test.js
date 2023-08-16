import { renderHook } from '@testing-library/react-hooks';
import { useDispatch } from 'react-redux';
import useReorder from '../../hooks/useReorder';
import { reorderStocks } from '../actions/stockActions';
import configureMockStore from 'redux-mock-store';

jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}));

describe('useReorder', () => {
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    it('should reorder items and dispatch the action', () => {
        const mockStocks = [
            { id: 1, name: 'Item1' },
            { id: 2, name: 'Item2' },
            { id: 3, name: 'Item3' }
        ];

        const { result } = renderHook(() => useReorder());
        result.current(mockStocks, {
            source: { index: 0 },
            destination: { index: 2 }
        });

        const reorderedStocks = [
            { id: 2, name: 'Item2' },
            { id: 3, name: 'Item3' },
            { id: 1, name: 'Item1' }
        ];
        expect(mockDispatch).toHaveBeenCalledWith(reorderStocks(reorderedStocks));
    });

    it('should not dispatch if no destination provided', () => {
        const mockStocks = [
            { id: 1, name: 'Item1' },
            { id: 2, name: 'Item2' }
        ];

        const { result } = renderHook(() => useReorder());
        result.current(mockStocks, {
            source: { index: 0 }
        });

        expect(mockDispatch).not.toHaveBeenCalled();
    });
});