import { vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  it('renders with a default message', () => {
    render(<Dropdown options={options} />);
    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('opens the dropdown on click', () => {
    render(<Dropdown options={options} />);
    fireEvent.click(screen.getByText('Select an option'));
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('selects an option', () => {
    const onSelect = vi.fn();
    render(<Dropdown options={options} onSelect={onSelect} />);
    fireEvent.click(screen.getByText('Select an option'));
    fireEvent.click(screen.getByText('Option 2'));
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(onSelect).toHaveBeenCalledWith('Option 2');
  });
});
