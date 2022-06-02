import { render, screen } from '@testing-library/react';
import ShowSubmittedList from '../ShowSubmittedList.js';

test('render card page', async () => {
    render(<ShowSubmittedList />);
    const listElement = screen.getByText(/Submitted List/i);
    expect(listElement).toBeInTheDocument();
});