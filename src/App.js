import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useFetchStocks from './hooks/useFetchStocks';
import useReorder from './hooks/useReorder';
import SearchButton from './components/SearchButton';
import SortDropdown from './components/SortDropdown';
import StockTable from './components/StockTable';
import Pagination from './components/Pagination';
import { filterStocks, sortStocks } from './utils/stocks';
import { ITEMS_PER_PAGE } from './constants';
import './App.css';

function App() {
    const [page, setPage] = useState(1);
    const stocksFromRedux = useFetchStocks(page);
    const [sortedStocks, setSortedStocks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const sourceStocks = sortedStocks.length ? sortedStocks : stocksFromRedux;
    const filteredStocks = filterStocks(sourceStocks, searchQuery);

    const displayedStocks = filteredStocks.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
    const hasMore = filteredStocks.length > page * ITEMS_PER_PAGE;

    const reorderHandler = useReorder();

    const handleSortChange = (value) => {
        const sorted = sortStocks(stocksFromRedux, value);
        setSortedStocks(sorted);
    };

    return (
        <div className='container'>
            <div className='data-table-actions'>
                <SearchButton searchQuery={searchQuery} onSearchChange={setSearchQuery} />
                <SortDropdown onSortChange={handleSortChange} />
            </div>
            <StockTable stocks={displayedStocks} currentPage={page} onDragEnd={(result) => reorderHandler(stocksFromRedux, result)} />
            <Pagination page={page} setPage={setPage} hasMore={hasMore} />
        </div>
    );
}

export default App;
