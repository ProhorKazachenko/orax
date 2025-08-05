import { useLocale } from 'next-intl'
import { PrivacyPL } from '@/components/pages/documents/privacy/pl'
import { PrivacyEn } from '@/components/pages/documents/privacy/en'

export default function Privacy() {
  const locale = useLocale()
  return <div className='container'>{locale === 'pl' ? <PrivacyPL /> : <PrivacyEn />}</div>
}
