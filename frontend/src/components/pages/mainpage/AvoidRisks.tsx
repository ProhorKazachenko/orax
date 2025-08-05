import { CardGrid } from '@/components/ui/CardGrid'
import { useTranslations } from 'next-intl'

export const AvoidRisks = () => {
  const t = useTranslations('AvoidRisks')
  const cards = Array.from({ length: 6 }, (_, idx) => ({
    title: t(`${idx + 1}title`),
    cards: [
      {
        text: t(`${idx + 1}problem`),
      },
      {
        text: t(`${idx + 1}solution`),
      },
    ],
  }))
  return (
    <section className={'section container'}>
      <h2>{t('title')}</h2>
      <p className={'mt-2 mb-3 max-w-[500px] sm:mb-6 md:mt-4'}>{t('description')}</p>
      <CardGrid cards={cards} chip={t('problem')} />
    </section>
  )
}
