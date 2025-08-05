import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import chart1 from '@/assets/image/Comparison1.svg'
import chart2 from '@/assets/image/Comparison2.svg'
import chart3 from '@/assets/image/Comparison3.svg'
import { useTranslations } from 'next-intl'

export const A1Comparison = () => {
  const t = useTranslations('a1.Comparison')
  return (
    <section className={'section container'}>
      <h2 className={'subheading md:max-lg:max-w-2/3'}>{t('title')}</h2>
      <div className='flex flex-col gap-2'>
        <Card
          className={
            'relative flex min-h-[180px] flex-col justify-end gap-3 sm:gap-6 lg:flex-row lg:items-end'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15 max-lg:left-[24px] lg:right-[24px]'
            }
          >
            01
          </p>
          <p
            className={
              'ml-auto flex h-[70px] max-w-[90%] items-end text-end align-text-bottom sm:max-w-3/5 md:max-w-1/3'
            }
          >
            {t('description1')}
          </p>
          <Card className={'hidden flex-auto lg:-order-1 lg:block'}>
            <Image src={chart1} alt={'chart'} className={'h-auto w-full lg:-order-1'} />
          </Card>
          <Image
            src={chart1}
            alt={'chart'}
            className={'block h-auto w-full lg:-order-1 lg:hidden'}
          />
        </Card>
        <Card
          className={
            'relative flex min-h-[200px] flex-col justify-end gap-3 sm:gap-6 lg:flex-row lg:items-end'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15 max-lg:right-[24px] lg:left-[24px]'
            }
          >
            02
          </p>
          <p
            className={
              'flex h-[70px] max-w-[90%] items-end text-start align-text-bottom sm:max-w-3/5 md:max-w-1/3'
            }
          >
            {t('description2')}
          </p>
          <Card className={'hidden flex-auto lg:block'}>
            <Image src={chart2} alt={'chart'} className={'h-auto w-full lg:-order-1'} />
          </Card>
          <Image src={chart2} alt={'chart'} className={'block h-auto w-full lg:hidden'} />
        </Card>
        <Card
          className={
            'relative flex min-h-[200px] flex-col justify-end gap-3 sm:gap-6 lg:flex-row lg:items-end'
          }
        >
          <p
            className={
              'font-heading absolute top-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15 max-lg:left-[24px] lg:right-[24px]'
            }
          >
            03
          </p>
          <p
            className={
              'ml-auto flex h-[70px] max-w-[90%] items-end text-end align-text-bottom sm:max-w-3/5 md:max-w-1/3'
            }
          >
            {t('description3')}
          </p>
          <Card className={'hidden flex-auto lg:-order-1 lg:block'}>
            <Image src={chart3} alt={'chart'} className={'h-auto w-full lg:-order-1'} />
          </Card>
          <Image
            src={chart3}
            alt={'chart'}
            className={'block h-auto w-full lg:-order-1 lg:hidden'}
          />
        </Card>
      </div>
    </section>
  )
}
