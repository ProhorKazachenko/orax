import { FC } from 'react'
import { IconProps } from '@/components/icons/icons.types'

export const IconBurger: FC<IconProps> = ({
  width = 27,
  height = 15,
  color = 'white',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 27 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect y='0.5' width='27' height='2' rx='0.5' fill={color} />
      <rect x='5' y='6.5' width='22' height='2' rx='0.5' fill={color} />
      <rect y='12.5' width='27' height='2' rx='0.5' fill={color} />
    </svg>
  )
}
