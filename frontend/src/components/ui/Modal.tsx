'use client'

import { FC, ReactNode, useEffect } from 'react'
import { IconX } from '../icons/IconX'
import { clsx } from 'clsx'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
}

export const Modal: FC<Props> = ({ isOpen, onClose, children, className }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className='bg-bg/70 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-2xl'>
      <div className='relative w-fit xl:max-w-4/5'>
        <div
          className={clsx(
            'max-h-[90vh] overflow-y-auto rounded-2xl bg-white/15 p-6 shadow-xl backdrop-blur-2xl',
            className,
          )}
        >
          {children}
        </div>
        <button
          onClick={onClose}
          className='absolute -top-2 -right-2 z-10 cursor-pointer rounded-full bg-[#4a475b] p-2 text-[--text] shadow-md transition hover:bg-[#5a576b]'
          aria-label='Закрыть'
        >
          <IconX className='size-2 md:size-4' />
        </button>
      </div>
    </div>
  )
}
