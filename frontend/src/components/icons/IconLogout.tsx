import { FC } from 'react'
import { IconProps } from '@/components/icons/icons.types'

export const IconLogout: FC<Exclude<IconProps, 'width' | 'height'> & { strokeWidth?: number }> = ({
  color = 'currentColor',
  className,
  strokeWidth = 1.5,
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={strokeWidth}
    stroke={color}
    className={className}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25'
    />
  </svg>
)
