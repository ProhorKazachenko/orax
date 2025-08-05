import { FC } from 'react'
import { IconProps } from '@/components/icons/icons.types'

export const IconArrowUp: FC<IconProps> = ({
  width = 38,
  height = 40,
  color = 'white',
  className,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox='0 0 38 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M0.755682 21.2404C-0.251917 20.2126 -0.251873 18.5467 0.755682 17.519L17.1757 0.770816C18.1834 -0.256936 19.8166 -0.256936 20.8243 0.770816L37.2443 17.5189C38.2519 18.5467 38.2519 20.2126 37.2443 21.2404C36.2367 22.268 34.6034 22.268 33.5958 21.2404L21.5802 8.98468L21.5802 37.3683C21.5802 38.8217 20.425 40 19 40C17.575 40 16.4198 38.8217 16.4198 37.3683L16.4198 8.98468L4.40421 21.2404C3.39663 22.268 1.76329 22.268 0.755682 21.2404Z'
      fill={color}
    />
  </svg>
)
