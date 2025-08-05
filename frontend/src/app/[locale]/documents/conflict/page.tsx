import { useLocale } from 'next-intl'
import { ConflictInterestEn } from '@/components/pages/documents/conflictInterest/en'
import { ConflictInterestPl } from '@/components/pages/documents/conflictInterest/pl'

export default function ConflictPage() {
  const locale = useLocale()
  return (
    <div className='container'>
      {locale === 'pl' ? <ConflictInterestPl /> : <ConflictInterestEn />}
    </div>
  )
}
