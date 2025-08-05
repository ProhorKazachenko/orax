import Image from 'next/image'
import plan from '@/assets/image/s1/InvestmentPlans.svg'
import { Card } from '@/components/ui/Card'
import { useTranslations } from 'next-intl'

export const S1Plans = () => {
  const t = useTranslations('s1.Plans')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <Image
        src={plan}
        alt={'Available plans'}
        className={'block h-auto w-full md:max-lg:hidden'}
      />
      <Card className={'hidden md:max-lg:block'}>
        <Image src={plan} alt={'Available plans'} className={'h-auto w-full'} />
      </Card>
    </section>
  )
}
