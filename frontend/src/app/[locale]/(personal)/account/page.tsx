import { InviteProfile } from '@/components/account/InviteProfile'

export default function Page() {
  return (
    <div className={'container flex flex-1 flex-col py-8'}>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <h2>Account</h2>
        <p className={'text-active button'}>mail@mail.com</p>
      </div>
      <InviteProfile />
    </div>
  )
}
