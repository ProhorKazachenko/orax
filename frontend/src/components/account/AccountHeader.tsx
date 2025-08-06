'use client'
import { useSelfData } from '@/lib/api/user/user.queries'

export const AccountHeader = () => {
  const { data } = useSelfData()
  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
      <h2>Account</h2>
      <p className={'text-active button'}>{data?.email}</p>
    </div>
  )
}
