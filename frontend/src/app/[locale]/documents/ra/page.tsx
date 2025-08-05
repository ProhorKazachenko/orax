import { useLocale } from 'next-intl'
import { RiskAssesmentEn } from '@/components/pages/documents/riscAssesment/en'
import { RiskAssesmentPl } from '@/components/pages/documents/riscAssesment/pl'

export default function RAPage() {
  const locale = useLocale()
  return (
    <div className='container'>{locale === 'pl' ? <RiskAssesmentPl /> : <RiskAssesmentEn />}</div>
  )
}
