import { FC } from 'react'

interface Props {
  isLong?: boolean
}
export const Divider: FC<Props> = ({ isLong }) => {
  return (
    <hr
      className='h-px w-full border-0'
      style={{
        background: isLong
          ? 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 4.23%, rgba(255, 255, 255, 0) 100%)'
          : 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 4.23%, rgba(255, 255, 255, 0) 59.62%)',
      }}
    />
  )
}
