import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import positive from '@/assets/image/b1/ScenariosPositive.svg'
import negative from '@/assets/image/b1/ScenariosNegative.svg'
import neutral from '@/assets/image/b1/ScenariosNeutral.svg'
import stress from '@/assets/image/b1/ScenariosStress.svg'
import { useTranslations } from 'next-intl'

export const B1Profitability = () => {
  const t = useTranslations('b1.Profitability')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:gap-4 md:flex-row md:flex-wrap'>
        <Card className={'flex flex-col gap-2 md:flex-1/3'}>
          <h4>{t('positive')}</h4>
          <div className='my-2 flex gap-2 md:my-4'>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 14.8 %
              </p>
              <p>{t('180')}</p>
            </div>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 30 %
              </p>
              <p>{t('365')}</p>
            </div>
          </div>
          <Image src={positive} alt={'positive chart'} className='h-auto w-full' />
        </Card>
        <Card className={'flex flex-col gap-2 md:flex-1/3'}>
          <h4>{t('neutral')}</h4>
          <div className='my-2 flex gap-2 md:my-4'>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 11 %
              </p>
              <p>{t('180')}</p>
            </div>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 22.3 %
              </p>
              <p>{t('365')}</p>
            </div>
          </div>
          <Image src={neutral} alt={'neutral chart'} className='h-auto w-full' />
        </Card>
        <Card className={'flex flex-col gap-2 md:flex-1/3'}>
          <h4>{t('negative')}</h4>
          <div className='my-2 flex gap-2 md:my-4'>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 7.2 %
              </p>
              <p>{t('180')}</p>
            </div>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 14.5 %
              </p>
              <p>{t('365')}</p>
            </div>
          </div>

          <Image src={negative} alt={'negative chart'} className='h-auto w-full' />
        </Card>
        <Card className={'flex flex-col gap-2 md:flex-1/3'}>
          <h4>{t('stress')}</h4>
          <div className='my-2 flex gap-2 md:my-4'>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 0 %
              </p>
              <p>{t('180')}</p>
            </div>
            <div className='flex-1/2 text-center'>
              <p
                className={'font-heading text-active text-lg font-extrabold md:text-xl xl:text-2xl'}
              >
                + 0 %
              </p>
              <p>{t('365')}</p>
            </div>
          </div>
          <Image src={stress} alt={'stress chart'} className='h-auto w-full' />
        </Card>
      </div>
    </section>
  )
}
