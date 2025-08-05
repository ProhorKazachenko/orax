import { CardGrid } from '@/components/ui/CardGrid'
import { useTranslations } from 'next-intl'

export const MarketAiMaking = () => {
  const t = useTranslations('market.MarketAiMaking')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <p className={'mt-2 mb-3 max-w-[500px] sm:mb-6 md:mt-4'}>{t('description')}</p>
      <CardGrid
        chip={t('chip')}
        cards={[
          {
            title: t('1title'),
            cards: [
              { text: t('1marker') },
              {
                text: t('1solution'),
              },
            ],
          },
          {
            title: t('2title'),
            cards: [
              { text: t('2marker') },
              {
                text: t('2solution'),
              },
            ],
          },
          {
            title: t('3title'),
            cards: [
              { text: t('3marker') },
              {
                text: t('3solution'),
              },
            ],
          },
          {
            title: t('4title'),
            cards: [
              { text: t('4marker') },
              {
                text: t('4solution'),
              },
            ],
          },
          {
            title: t('5title'),
            cards: [
              { text: t('5marker') },
              {
                text: t('5solution'),
              },
            ],
          },
          {
            title: t('6title'),
            cards: [
              { text: t('6marker') },
              {
                text: t('6solution'),
              },
            ],
          },
        ]}
      />
    </section>
  )
}
