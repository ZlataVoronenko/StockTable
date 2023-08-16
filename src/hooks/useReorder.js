import { useDispatch } from 'react-redux';
import { reorderStocks } from '../actions/stockActions';

const useReorder = () => {
    const dispatch = useDispatch();

    const onDragEnd = (stocks, result) => {
        if (!result.destination) return;

        const reorderedStocks = Array.from(stocks);
        const [removed] = reorderedStocks.splice(result.source.index, 1);
        reorderedStocks.splice(result.destination.index, 0, removed);

        dispatch(reorderStocks(reorderedStocks));
    }

    return onDragEnd;
}

export default useReorder;