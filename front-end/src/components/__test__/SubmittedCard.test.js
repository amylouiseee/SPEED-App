import { render, screen } from '@testing-library/react';
import SubmittedCard from '../SubmittedCard.js';

test ('submitted card allow renders', async () => {
    render(<SubmittedCard article={'test'}/>);
    const buttonCardElement = screen.getByText(/Allow/i);
    expect(buttonCardElement).toBeInTheDocument();
});

test ('submitted card deny renders', async () => {
    render(<SubmittedCard article={'test'}/>);
    const buttonCardElement = screen.getByText(/Deny/i);
    expect(buttonCardElement).toBeInTheDocument();
});