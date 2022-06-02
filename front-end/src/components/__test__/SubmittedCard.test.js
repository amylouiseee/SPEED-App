import { render, screen } from '@testing-library/react';
import SubmittedCard from '../SubmittedCard.js';

test ('submitted card allow renders', async () => {
    render(<SubmittedCard article={{title: 'test', authors: 'authors', source: 'source'}}/>);
    const buttonCardElement = screen.getByText(/Allow/i);
    expect(buttonCardElement).toBeInTheDocument();
});

test ('submitted card deny renders', async () => {
    render(<SubmittedCard article={{title: 'test', authors: 'authors', source: 'source'}}/>);
    const buttonCardElement = screen.getByText(/Deny/i);
    expect(buttonCardElement).toBeInTheDocument();
});

test ('submitted card title renders', async () => {
    render(<SubmittedCard article={{title: 'test', authors: 'authors', source: 'source'}}/>);
    const titleCardElement = screen.getByText(/test/i);
    expect(titleCardElement).toBeInTheDocument();
});