import { useLocale } from 'next-intl'
import { AntiLaunderingPl } from '@/components/pages/documents/antiLaundering/pl'
import { AntiLaunderingEn } from '@/components/pages/documents/antiLaundering/en'

export default function AntiLaunderingPage() {
  const locale = useLocale()
  return (
    <div className='container'>{locale === 'pl' ? <AntiLaunderingPl /> : <AntiLaunderingEn />}</div>
  )
}
