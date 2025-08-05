import { Card } from '@/components/ui/Card'
import { useTranslations } from 'next-intl'

export const B1Glossary = () => {
  const t = useTranslations('b1.Glossary')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:gap-4 md:grid md:auto-rows-[5px] md:grid-cols-3 xl:auto-rows-[215px]'>
        <Card
          className={
            'relative flex min-h-[180px] flex-col justify-end gap-3 md:row-span-21 xl:row-span-2'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            01
          </p>
          <p className={'h4 font-heading'}>{t('1title')}</p>
          <p>{t('1description')}</p>
        </Card>
        <Card
          className={
            'relative flex flex-col justify-end gap-3 md:col-span-2 md:row-span-8 xl:row-span-1'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            02
          </p>
          <p className={'h4 font-heading'}>{t('2title')}</p>
          <p>{t('2description')}</p>
        </Card>
        <Card className={'relative flex flex-col justify-end gap-3 md:row-span-13 xl:row-span-1'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            03
          </p>
          <p className={'h4 font-heading'}>{t('3title')}</p>
          <p>{t('3description')}</p>
        </Card>
        <Card className={'relative flex flex-col justify-end gap-3 md:row-span-13 xl:row-span-1'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            04
          </p>
          <p className={'h4 font-heading'}>{t('4title')}</p>
          <p>{t('4description')}</p>
        </Card>
      </div>
    </section>
  )
}
