import { FC } from 'react'
import { IconProps } from '@/components/icons/icons.types'

export const IconArrowUpRight: FC<IconProps> = ({
  width = 30,
  height = 30,
  color = 'white',
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      d='M1.22226 2.97632C1.23649 1.53713 2.41452 0.359163 3.8537 0.344878L27.3072 0.112889C28.7464 0.0986549 29.9013 1.25356 29.8871 2.69279L29.6551 26.1462C29.6408 27.5854 28.4628 28.7635 27.0236 28.7777C25.5845 28.7918 24.4295 27.6369 24.4437 26.1978L24.6135 9.03538L4.54325 29.1056C3.5155 30.1334 1.8655 30.1497 0.85788 29.1421C-0.149741 28.1344 -0.133419 26.4844 0.894334 25.4567L20.9646 5.38646L3.80215 5.55622C2.36304 5.57041 1.20813 4.41543 1.22226 2.97632Z'
      fill={color}
    />
  </svg>
)
