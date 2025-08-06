import { AccountHeader } from '@/components/account/AccountHeader'
import { redirect } from '@/i18n/navigation'
import { cookies } from 'next/headers'
import { getLocale } from 'next-intl/server'
import { ProfileView } from '@/components/account/ProfileView'

export default async function Page() {
  const cookiesStore = await cookies()
  const token = cookiesStore.get('token')
  const locale = await getLocale()
  if (!token) {
    redirect({ href: '/auth/login', locale: locale })
  }

  return (
    <div className={'container flex flex-1 flex-col py-8'}>
      <AccountHeader />
      <ProfileView />
    </div>
  )
}
