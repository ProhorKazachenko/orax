'use client'
import { IconEye } from '@/components/icons/IconEye'
import { FC, InputHTMLAttributes, PropsWithChildren, useState } from 'react'
import { IconEyeSlash } from '@/components/icons/IconEyeSlash'
import { clsx } from 'clsx'

interface Props extends PropsWithChildren<InputHTMLAttributes<HTMLInputElement>> {
  placeholder?: string
  error?: string | boolean
  wrapperClassName?: string
}

export const PasswordInput: FC<Props> = ({ placeholder, wrapperClassName, error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={wrapperClassName}>
      <div className={'relative'}>
        <input
          type={showPassword ? 'text' : 'password'}
          className={clsx('w-full', {
            '!border-error !border-3 !border-solid': error,
          })}
          placeholder={placeholder}
          {...props}
        />
        <button
          type={'button'}
          className={clsx('absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer', {
            hidden: props.disabled,
          })}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <IconEyeSlash className={'size-6'} /> : <IconEye className={'size-6'} />}
        </button>
      </div>
      <p className={'text-error mt-1 text-xs'}>{error}</p>
    </div>
  )
}
