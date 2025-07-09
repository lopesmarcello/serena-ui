import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Test</Card>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
