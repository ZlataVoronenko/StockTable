import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Pagination from '../../components/Pagination';

describe('<Pagination />', () => {

    test('renders correctly with current page', () => {
        const { getByText } = render(<Pagination page={2} setPage={() => { }} hasMore />);
        expect(getByText(/Страница: 2/i)).toBeInTheDocument();
    });

    test('disables "Назад" button on the first page', () => {
        const { getByText } = render(<Pagination page={1} setPage={() => { }} hasMore />);
        expect(getByText('Назад').closest('button')).toBeDisabled();
    });

    test('disables "Вперед" button if hasMore is false', () => {
        const { getByText } = render(<Pagination page={2} setPage={() => { }} hasMore={false} />);
        expect(getByText('Вперед').closest('button')).toBeDisabled();
    });

    test('calls setPage with decreased value on "Назад" click', () => {
        const setPage = jest.fn();
        const { getByText } = render(<Pagination page={2} setPage={setPage} hasMore />);

        fireEvent.click(getByText('Назад'));
        expect(setPage).toHaveBeenCalledWith(1);
    });

    test('calls setPage with increased value on "Вперед" click', () => {
        const setPage = jest.fn();
        const { getByText } = render(<Pagination page={2} setPage={setPage} hasMore />);

        fireEvent.click(getByText('Вперед'));
        expect(setPage).toHaveBeenCalledWith(3);
    });
});
