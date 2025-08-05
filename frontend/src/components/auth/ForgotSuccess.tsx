import { FC } from 'react'

interface Props {
  email: string
}
export const ForgotSuccess: FC<Props> = ({ email }) => {
  return (
    <div className={'container flex h-full flex-1 flex-col justify-center'}>
      <div className={'flex flex-col gap-3 md:w-2/3 lg:w-1/2 xl:w-2/5'}>
        <p className={'h1'}>Link sent!</p>
        <p>A link to reset your password has been sent to your email address {email}.</p>
        <p>If you haven&apos;t received the letter, check your spam folder.</p>
      </div>
    </div>
  )
}
