import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from './variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> { }

/** Primary UI component for user interaction */
export const Button = ({
  className,
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
};
