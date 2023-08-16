import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchButton from '../../components/SearchButton';

describe('<SearchButton />', () => {

    test('renders correctly with initial search query', () => {
        const { getByPlaceholderText } = render(
            <SearchButton searchQuery="test query" onSearchChange={() => { }} />
        );
        const input = getByPlaceholderText(/Поиск по имени компании.../i);
        expect(input.value).toBe("test query");
    });

    test('calls onSearchChange with new value on input change', () => {
        const onSearchChange = jest.fn();
        const { getByPlaceholderText } = render(
            <SearchButton searchQuery="" onSearchChange={onSearchChange} />
        );
        const input = getByPlaceholderText(/Поиск по имени компании.../i);

        fireEvent.change(input, { target: { value: 'new query' } });
        expect(onSearchChange).toHaveBeenCalledWith('new query');
    });
});
