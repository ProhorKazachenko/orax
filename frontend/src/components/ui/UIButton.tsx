import { ButtonHTMLAttributes, FC, PropsWithChildren, ReactElement } from 'react'
import clsx from 'clsx'

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  rightIcon?: ReactElement
}

export const UIButton: FC<Props> = ({ children, className, rightIcon, ...props }) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        'bg-active disabled:bg-active/30 hover:bg-accent font-heading flex min-w-[221px] cursor-pointer flex-row items-center justify-center gap-2 rounded-3xl px-10 py-4 text-center text-[16px] font-extrabold text-white',
      )}
    >
      {children}
      {rightIcon}
    </button>
  )
}
