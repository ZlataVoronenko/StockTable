import React from 'react';
import { render, act } from '@testing-library/react';
import { Droppable } from "react-beautiful-dnd";
import DropComponent from '../../components/DropComponent';

test("renders without crashing", () => {
    render(<DropComponent />);
});

jest.mock('react-beautiful-dnd', () => ({
    Droppable: ({ children }) => children({
        droppableProps: 'some-droppable-props',
        innerRef: 'some-inner-ref'
    }, {})
}));

describe("DropComponent", () => {

    test("does not render immediately", () => {
        const { queryByRole } = render(<DropComponent />);
        expect(queryByRole('rowgroup')).not.toBeInTheDocument();
    });

    test("renders correctly after rAF delay", async () => {
        const { queryByRole } = render(<DropComponent />);

        await act(async () => {
            await new Promise(r => requestAnimationFrame(r));
        });

        expect(queryByRole('rowgroup')).toBeInTheDocument();
    });

    test("passes the correct props to Droppable", async () => {
        const { container } = render(<DropComponent />);

        await act(async () => {
            await new Promise(r => requestAnimationFrame(r));
        });

        const tbody = container.querySelector('tbody');
        expect(tbody).toHaveAttribute('some-droppable-props');
        expect(tbody).toHaveAttribute('some-inner-ref');
    });

});
