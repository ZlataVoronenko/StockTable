import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StockTable from './StockTable';

describe('StockTable Component', () => {
    const mockOnDragEnd = jest.fn();
    const mockStocks = [
        { symbol: 'MSFT-MM', companyName: 'Microsoft Corp.', latestPrice: 4322 },
        { symbol: '018260-KP', companyName: 'Samsung Sds Co. Ltd.', latestPrice: 176000 }
    ];

    test('renders stocks correctly', () => {
        const { getByText } = render(<StockTable stocks={mockStocks} currentPage={1} onDragEnd={mockOnDragEnd} />);

        expect(getByText('Microsoft Corp.')).toBeInTheDocument();
        expect(getByText('Samsung Sds Co. Ltd.')).toBeInTheDocument();
        expect(getByText('4322')).toBeInTheDocument();
        expect(getByText('176000')).toBeInTheDocument();
    });

    test('renders "Нет результатов" if no stocks are provided', () => {
        const { getByText } = render(<StockTable stocks={[]} currentPage={1} onDragEnd={mockOnDragEnd} />);

        expect(getByText('Нет результатов')).toBeInTheDocument();
    });

    test('renders row numbers correctly based on currentPage', () => {
        const { getByText } = render(<StockTable stocks={mockStocks} currentPage={3} onDragEnd={mockOnDragEnd} />);

        const firstRowNumber = (3 - 1) * 2 + 1;
        const secondRowNumber = (3 - 1) * 2 + 2;

        expect(getByText(firstRowNumber.toString())).toBeInTheDocument();
        expect(getByText(secondRowNumber.toString())).toBeInTheDocument();
    });
});