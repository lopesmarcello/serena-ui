import { render, screen } from '@testing-library/react';
import { Image } from './Image';

describe('Image', () => {
  it('renders the image', () => {
    render(<Image src="https://via.placeholder.com/150" alt="Test" />);
    const image = screen.getByAltText('Test');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });
});
