import {
  AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type ReactNode,
} from 'react'
import clsx from 'clsx'

type buttonVariant =
  | 'regular'
  | 'outline'
  | 'outline-white'
  | 'white'
  | 'black'
  | 'ghost'
  | 'link'
type buttonSize = 'regular' | 'large' | 'small'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize
  variant?: buttonVariant
  children: ReactNode
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: buttonSize
  variant?: buttonVariant
  children: ReactNode
}

export const Button = ({
  size = 'regular',
  variant = 'regular',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        'h-fit w-fit rounded-lg text-xs font-medium transition-all',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
        size === 'large' && 'px-5 py-3 text-base',
        size === 'regular' && 'px-4 py-2 text-sm',
        size === 'small' && 'px-2 py-2',
        variant === 'regular' &&
          'bg-primary-500 text-white hover:bg-primary-600 disabled:hover:bg-primary-200',
        variant === 'outline' &&
          'border border-primary-500 text-primary-50 hover:border-primary-600 hover:bg-primary-600 disabled:border-primary-100 disabled:bg-transparent',
        variant === 'outline-white' &&
          'border border-primary-50 text-primary-50 hover:border-primary-50 hover:bg-primary-50 hover:text-primary-900 disabled:border-primary-100 disabled:bg-transparent',
        variant === 'white' &&
          'text-primary-900 hover:bg-gray-100 bg-white disabled:hover:bg-gray-50',
        variant === 'black' &&
          'text-white hover:bg-gray-900 bg-black disabled:hover:bg-gray-200',
        variant === 'ghost' &&
          'text-primary-50 hover:bg-primary-600 disabled:hover:bg-transparent',
        variant === 'link' &&
          'text-primary-50 hover:underline disabled:no-underline'
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export const ButtonLink = ({
  size = 'regular',
  variant = 'regular',
  children,
  href,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={clsx(
        'rounded-md text-sm font-medium transition-all duration-150',
        className,
        'disabled:cursor-not-allowed disabled:opacity-50',
        size === 'large' && 'px-5 py-3 text-base',
        size === 'regular' && 'px-4 py-2 text-sm',
        size === 'small' && 'px-3 py-1.5 text-xs',
        variant === 'regular' &&
          'bg-primary-500 text-white hover:bg-primary-400 disabled:hover:bg-primary-50',
        variant === 'outline' &&
          'border border-primary-500 text-primary-500 hover:border-primary-500 hover:bg-primary-400 hover:text-primary-50 disabled:border-primary-500 disabled:bg-transparent',
        variant === 'outline-white' &&
          'border border-primary-50 text-primary-50 hover:border-primary-50 hover:bg-primary-50 hover:text-primary-900 disabled:border-primary-100 disabled:bg-transparent',
        variant === 'white' &&
          'text-primary-900 hover:bg-gray-100 bg-white disabled:hover:bg-gray-50',
        variant === 'black' &&
          'text-white hover:bg-gray-900 bg-black disabled:hover:bg-gray-200',
        variant === 'ghost' &&
          'text-primary-500 hover:bg-primary-600 disabled:hover:bg-transparent',
        variant === 'link' &&
          'text-primary-500 hover:underline disabled:no-underline'
      )}
      {...props}
    >
      {children}
    </a>
  )
}
