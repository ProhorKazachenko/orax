import { CardGrid } from '@/components/ui/CardGrid'
import { useTranslations } from 'next-intl'

export const B1Risks = () => {
  const t = useTranslations('b1.Risks')
  return (
    <section className='section container'>
      <h2 className={'subheading'}>{t('title')}</h2>
      <CardGrid
        chip={t('chip')}
        cards={[
          {
            title: t('1title'),
            cards: [
              {
                text: t('1risk'),
              },
              {
                text: t('1solution'),
              },
            ],
          },
          {
            title: t('2title'),
            cards: [
              {
                text: t('2risk'),
              },
              {
                text: t('2solution'),
              },
            ],
          },
          {
            title: t('3title'),
            cards: [
              {
                text: t('3risk'),
              },
              {
                text: t('3solution'),
              },
            ],
          },
          {
            title: t('4title'),
            cards: [
              {
                text: t('4risk'),
              },
              {
                text: t('4solution'),
              },
            ],
          },
        ]}
      />
    </section>
  )
}
