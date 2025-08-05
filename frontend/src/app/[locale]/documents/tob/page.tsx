import { useLocale } from 'next-intl'
import { TermsOfBusinessEn } from '@/components/pages/documents/termsOfBusines/en'
import { TermsOfBusinessPl } from '@/components/pages/documents/termsOfBusines/pl'

export default function ToBPage() {
  const locale = useLocale()
  return (
    <div className='container'>
      {locale === 'pl' ? <TermsOfBusinessPl /> : <TermsOfBusinessEn />}
    </div>
  )
}
