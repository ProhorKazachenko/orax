import { Card } from '@/components/ui/Card'
import { useTranslations } from 'next-intl'

export const MarketIngredients = () => {
  const t = useTranslations('market.MarketIngredients')
  return (
    <section className={'section container'}>
      <h2 className={'subheading md:max-xl:max-w-2/3'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:grid sm:auto-rows-[90px] sm:grid-cols-2 md:grid-cols-3 md:gap-4 xl:auto-rows-[70px]'>
        <Card
          className={'relative flex flex-col justify-end gap-3 pt-16 sm:row-span-5 md:row-span-4'}
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
            'relative flex flex-col justify-end gap-3 pt-16 sm:row-span-4 md:col-span-2 md:row-span-3'
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
        <Card
          className={
            'relative flex flex-col justify-end gap-3 pt-16 sm:col-start-1 sm:row-span-4 md:row-span-4'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            03
          </p>
          <p className={'h4 font-heading'}>{t('3title')}</p>
          <ul className='ml-5 list-disc'>
            {t('3description')
              .split('\n')
              .map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
          </ul>
        </Card>
        <Card
          className={
            'relative flex flex-col justify-end gap-3 pt-16 sm:col-start-2 sm:row-span-3 sm:row-start-5 md:row-span-5 md:row-start-4'
          }
        >
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
        <Card
          className={
            'md: relative flex flex-col justify-end gap-3 pt-16 sm:row-span-4 md:col-start-3 md:row-span-5 md:row-start-4'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            05
          </p>
          <p className={'h4 font-heading'}>{t('5title')}</p>
          <ul className='ml-5 list-disc'>
            {t('5description')
              .split('\n')
              .map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
          </ul>
        </Card>
        <Card className={'relative flex flex-col justify-end gap-3 pt-16 sm:row-span-5 md:hidden'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            06
          </p>
          <p className={'h4 font-heading'}>{t('6title')}</p>
          <ul className='ml-5 list-disc'>
            {t('6description')
              .split('\n')
              .map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
          </ul>
        </Card>
        <Card className={'relative flex flex-col justify-end gap-3 pt-16 sm:row-span-3 md:hidden'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            07
          </p>
          <p className={'h4 font-heading'}>{t('7title')}</p>
          <p>{t('7description')}</p>
        </Card>
      </div>
      <div className='mt-4 hidden flex-row items-stretch md:flex md:gap-4'>
        <Card
          className={
            'relative flex flex-1/2 flex-col justify-end gap-3 pt-16 sm:row-span-5 md:pt-24 lg:pt-20'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            06
          </p>
          <p className={'h4 font-heading'}>{t('6title')}</p>
          <ul className='ml-5 list-disc'>
            {t('6description')
              .split('\n')
              .map((el, idx) => (
                <li key={idx}>{el}</li>
              ))}
          </ul>
        </Card>
        <Card className={'relative flex flex-1/2 flex-col justify-end gap-3 pt-16 sm:row-span-3'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            07
          </p>
          <p className={'h4 font-heading'}>{t('7title')}</p>
          <p>{t('7description')}</p>
        </Card>
      </div>
    </section>
  )
}
