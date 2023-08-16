import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App component without crashing", () => {
    render(<App />);
});

test("renders child components", () => {
    const { getByRole } = render(<App />);
    expect(getByRole("combobox", { name: /Сортировка:/i })).toBeInTheDocument();
});

test("handles sort option change", () => {
    const { getByRole } = render(<App />);
    const dropdown = getByRole("combobox", { name: /Сортировка:/i });

    fireEvent.change(dropdown, { target: { value: "some_sort_value" } });
});

test("handles page change via Pagination component", () => {
    const { getByRole } = render(<App />);
    const nextPageButton = getByRole("button", { name: "Вперед" });

    fireEvent.click(nextPageButton);
});