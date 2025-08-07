'use client'
import { useSelfData } from '@/lib/api/user/user.queries'
import { IconLogout } from '@/components/icons/IconLogout'
import { useLogoutUser } from '@/lib/api/user/user.mutations'

export const AccountHeader = () => {
  const { data } = useSelfData()
  const logoutMutation = useLogoutUser()
  return (
    <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
      <h2>Account</h2>
      <div>
        <p className={'text-active button'}>{data?.email}</p>
        <button
          className={
            'button hover:text-active active:text-accent mt-1 flex cursor-pointer items-center gap-2'
          }
          onClick={() => logoutMutation.mutate()}
        >
          Logout <IconLogout className={'size-5'} />
        </button>
      </div>
    </div>
  )
}
