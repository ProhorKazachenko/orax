import { FC, HTMLAttributes, PropsWithChildren } from 'react'
import Image from 'next/image'
import ChipIcon from '../../assets/image/chip.svg'
import clsx from 'clsx'

interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  className?: string
  chip?: string
  staticChip?: boolean
  green?: boolean
}

export const Card: FC<Props> = ({ staticChip, chip, children, className, green, ...props }) => {
  return (
    <div
      className={clsx(`group rounded-3xl p-6 md:rounded-4xl lg:p-10`, className, {
        'bg-white/15 backdrop-blur-2xl hover:bg-white/30': !green,
        'bg-active hover:bg-accent': green,
        'text-white': !green,
        'text-bg': green,
      })}
      {...props}
    >
      {!staticChip && chip && (
        <div
          className={'rounded-4xl bg-white/15 px-4 py-2 backdrop-blur-2xl group-hover:bg-white/30'}
        >
          {chip}
        </div>
      )}
      {staticChip && (
        <Image src={ChipIcon} alt={'ORAX solutions'} className={'h-auto pb-4 max-md:w-[153px]'} />
      )}
      {children}
    </div>
  )
}
