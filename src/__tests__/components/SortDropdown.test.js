import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortDropdown from '../../components/SortDropdown';

describe("SortDropdown component", () => {

    test("renders properly", () => {
        const { getByText, getByRole } = render(<SortDropdown onSortChange={() => { }} />);

        expect(getByText("Сортировка:")).toBeInTheDocument();
        expect(getByRole("combobox", { name: /Сортировка:/i })).toBeInTheDocument();

        const options = [
            "Выберите сортировку", "Код акций (A-Z)", "Код акций (Z-A)",
            "Имя компании (A-Z)", "Имя компании (Z-A)",
            "Последняя цена (по возрастанию)", "Последняя цена (по убыванию)"
        ];
        options.forEach(option => {
            expect(getByText(option)).toBeInTheDocument();
        });
    });

    test("calls onSortChange with correct value", () => {
        const mockOnChange = jest.fn();
        const { getByRole } = render(<SortDropdown onSortChange={mockOnChange} />);
        const dropdown = getByRole("combobox", { name: /Сортировка:/i });

        fireEvent.change(dropdown, { target: { value: "companyName_asc" } });
        expect(mockOnChange).toHaveBeenCalledWith("companyName_asc");
    });

});

