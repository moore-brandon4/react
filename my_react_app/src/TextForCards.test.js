import { render, screen } from '@testing-library/react';
import TextForCards from './TextForCards';

test('Text shows', () => {
    render(<TextForCards cardNum={true} />);
    const linkElement = screen.getByText(/My Card/i);
    expect(linkElement).toBeInTheDocument();
});

