import { FC } from 'react'

interface Props {
  text: string
}
export const BigChip: FC<Props> = ({ text }) => {
  return (
    <div
      className={
        'rounded-4xl border-1 border-white bg-white/15 px-6 py-3 text-center max-md:backdrop-blur-2xl md:bg-transparent'
      }
    >
      <p>{text}</p>
    </div>
  )
}
