import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Variant = 'primary' | 'secondary' | 'ghost-destructive';

type ButtonProps = {
  variant?: Variant;
} & ComponentProps<'button'>;

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        'rounded px-2 py-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30',
        getVariantStyle(variant),
        className,
      )}
    >
      {props.children}
    </button>
  );
}

function getVariantStyle(variant: Variant) {
  switch (variant) {
    case 'primary':
      return 'bg-violet-600 hover:bg-violet-500';
    case 'secondary':
      return 'bg-zinc-700 hover:bg-zinc-600 text-zinc-400';
    case 'ghost-destructive':
      return 'text-red-800 hover:bg-red-800 hover:text-red-200';
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}
