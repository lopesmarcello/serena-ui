import { render, screen } from "@testing-library/react"
import { Button } from "./Button"
import userEvent from "@testing-library/user-event"
import { vi } from "vitest"

describe('Button Component', () => {
  // Basic render
  it('should render the button with the correct label text', () => {
    // Arrange: Render the component 
    render(<Button>Click Me</Button>)

    const buttonElement = screen.getByRole('button', { name: /click me/i });

    // Assert: Check if the element is in the document
    expect(document).toContain(buttonElement);
  })


  // Test 2: Functionality - onClick handler
  it('should call the onClick handler when clicked', async () => {
    // Arrange: Create a mock function using Vitest's `vi.fn()`
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}> Click me </Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });

    // Act: Simulate a user clicking the button. userEvent is preferred over fireEvent
    // because it more closely simulates real user interaction.
    await user.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Test 3: Variants
  it('should apply the correct classes for each variant', () => {
    // Arrange: Render the component with the "destructive" variant
    const { rerender } = render(<Button variant="destructive">Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });

    // Assert: Check if the destructive class is present
    expect(buttonElement.className).toContain('sui:bg-destructive');

    // Act: Rerender the component with the "outline" variant
    rerender(<Button variant="outline">Click Me</Button>);

    // Assert: Check if the outline class is present
    expect(buttonElement.className).toContain('sui:border-input');
  });
});
