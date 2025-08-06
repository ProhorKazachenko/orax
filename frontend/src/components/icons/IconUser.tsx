import { FC } from 'react'
import { IconProps } from '@/components/icons/icons.types'

export const IconUser: FC<IconProps> = ({
  width = 20,
  height = 17,
  color = 'currentColor',
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 20 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <circle cx='10' cy='5.5' r='4' stroke={color} strokeWidth='2' />
    <mask id='path-2-inside-1_32541_4081' fill={color}>
      <path d='M0 16.5C0 14.2909 1.79086 12.5 4 12.5H16C18.2091 12.5 20 14.2909 20 16.5H0Z' />
    </mask>
    <path
      d='M-2 16.5C-2 13.1863 0.686292 10.5 4 10.5H16C19.3137 10.5 22 13.1863 22 16.5H18C18 15.3954 17.1046 14.5 16 14.5H4C2.89543 14.5 2 15.3954 2 16.5H-2ZM20 16.5H0H20ZM-2 16.5C-2 13.1863 0.686292 10.5 4 10.5V14.5C2.89543 14.5 2 15.3954 2 16.5H-2ZM16 10.5C19.3137 10.5 22 13.1863 22 16.5H18C18 15.3954 17.1046 14.5 16 14.5V10.5Z'
      fill={color}
      mask='url(#path-2-inside-1_32541_4081)'
    />
  </svg>
)
