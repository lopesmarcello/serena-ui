import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'sui:inline-flex sui:items-center sui:justify-center sui:whitespace-nowrap sui:rounded-md sui:text-sm sui:font-medium sui:ring-offset-background sui:transition-colors sui:focus-visible:outline-none sui:focus-visible:ring-2 sui:focus-visible:ring-ring sui:focus-visible:ring-offset-2 sui:disabled:pointer-events-none sui:disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'sui:bg-neutral-900 sui:text-white/90 sui:hover:bg-primary/90',
        destructive:
          'sui:bg-destructive sui:text-destructive-foreground sui:hover:bg-destructive/90',
        outline:
          'sui:border sui:border-input sui:bg-background sui:hover:bg-accent sui:hover:text-accent-foreground',
        secondary:
          'sui:bg-secondary sui:text-secondary-foreground sui:hover:bg-secondary/80',
        ghost: 'sui:hover:bg-accent sui:hover:text-accent-foreground',
        link: 'sui:text-primary sui:underline-offset-4 sui:hover:underline',
      },
      size: {
        default: 'sui:h-10 sui:px-4 sui:py-2',
        sm: 'sui:h-9 sui:rounded-md sui:px-3',
        lg: 'sui:h-11 sui:rounded-md sui:px-8',
        icon: 'sui:h-10 sui:w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
