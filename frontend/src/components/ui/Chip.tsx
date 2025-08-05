import { FC } from 'react'
import clsx from 'clsx'

interface Props {
  label: string
  small?: boolean
  className?: string
}

export const Chip: FC<Props> = ({ label, small, className }) => (
  <div
    className={clsx(
      'w-fit rounded-4xl bg-white/15 text-nowrap backdrop-blur-2xl group-hover:bg-white/30',
      {
        'px-3 py-[6px]': small,
        'px-4 py-2': !small,
      },
      className,
    )}
  >
    {label}
  </div>
)
