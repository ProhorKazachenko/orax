import clsx from 'clsx'
import { FC, InputHTMLAttributes, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  placeholder?: string
  error?: string | boolean
  wrapperClassName?: string
}

export const UIInput: FC<Props> = ({ error, wrapperClassName, className, ...props }) => {
  return (
    <div className={wrapperClassName}>
      <input
        className={clsx('w-full', {
          '!border-error !border-3 !border-solid': error,
          className,
        })}
        {...props}
      />
      <p className={'text-error mt-1 text-xs'}>{error}</p>
    </div>
  )
}
