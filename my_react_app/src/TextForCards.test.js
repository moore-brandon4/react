import { render, screen } from '@testing-library/react';
import TextForCards from './TextForCards';

test('Text shows', () => {
    render(<TextForCards cardNum={true} />);
    const linkElement = screen.getByText(/Text from card/i);
    expect(linkElement).toBeInTheDocument();
});

test('Text shows', () => {
    render(<TextForCards/>);
    const linkElement = screen.getByText(/Text from card/i);
    expect(linkElement).toBeInTheDocument();
});
