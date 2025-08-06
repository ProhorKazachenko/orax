'use client'
import { InviteProfile } from '@/components/account/InviteProfile'
import { useSelfData } from '@/lib/api/user/user.queries'
import { InvestData } from '@/components/account/InvestData'
import { ProfileRequested } from '@/components/account/ProfileRequested'

export const ProfileView = () => {
  const { data, isLoading } = useSelfData()
  if (isLoading) return <p>Loading...</p>
  if (data?.contract_signed) return <InvestData />
  return <>{data?.phone ? <ProfileRequested /> : <InviteProfile />}</>
}
