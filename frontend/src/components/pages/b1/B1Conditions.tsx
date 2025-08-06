import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import conditions from '@/assets/image/b1/Listofconditions.svg'
import { Divider } from '@/components/ui/Divider'
import { useTranslations } from 'next-intl'
/* TODO: Desktop */

export const B1Conditions = () => {
  const t = useTranslations('b1.Conditions')
  return (
    <section className='section container'>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:gap-4 md:grid md:auto-rows-[10px] md:grid-cols-2 lg:grid-cols-3 lg:gap-3'>
        <Card
          green
          className='flex flex-col gap-1 md:row-span-12 md:justify-between lg:row-span-15'
        >
          <p>{t('target')}</p>
          <p className={'h4 font-heading'}>{t('interest')}</p>
          <Image
            src={conditions}
            alt={'list of conditions'}
            className={'ml-auto h-auto w-full lg:max-w-[290px]'}
          />
        </Card>
        <Card className={'flex flex-col gap-2 md:row-span-14 lg:row-span-21 lg:justify-between'}>
          <h4>{t('instruments')}</h4>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('instrument1')}</li>
            <li>{t('instrument2')}</li>
            <li>{t('instrument3')}</li>
          </ul>
          <Divider />
          <h4>{t('risk')}</h4>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('risk1')}</li>
            <li>{t('risk2')}</li>
            <li>{t('risk3')}</li>
          </ul>
        </Card>
        <Card className={'flex flex-col gap-2 md:row-span-13 lg:row-span-21'}>
          <h4>{t('specification')}</h4>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('spec1')}</li>
            <li>{t('spec2')}</li>
            <li>{t('spec3')}</li>
            <li>{t('spec4')}</li>
            <li>{t('spec5')}</li>
          </ul>
        </Card>
        <Card
          className={
            'flex flex-col gap-2 md:col-start-1 md:row-span-15 md:row-start-13 lg:row-span-18 lg:row-start-16'
          }
        >
          <p className={'font-heading font-extrabold'}>{t('data1title')}</p>
          <p>{t('data1description')}</p>
          <Divider isLong />
          <p className={'font-heading font-extrabold'}>{t('data2title')}</p>
          <p>{t('data2description')}</p>
          <Divider isLong />
          <p className={'font-heading font-extrabold'}>{t('data3title')}</p>
          <p>{t('data3description')}</p>
          <Divider isLong />
          <p className={'font-heading font-extrabold'}>{t('data4title')}</p>
          <p>{t('data4description')}</p>
        </Card>
        <Card className={'flex flex-col gap-2 md:row-span-8 md:justify-between lg:row-span-12'}>
          <div className='flex items-end justify-between'>
            <p>{t('success')}</p>
            <p className={'h4 font-heading text-active'}>{t('successValue')}</p>
          </div>
          <Divider isLong />
          <div className='flex items-end justify-between'>
            <p>{t('management')}</p>
            <p className={'h4 font-heading text-active'}>{t('managementValue')}</p>
          </div>
          <Divider isLong />
          <div className='flex items-end justify-between'>
            <p>{t('hurdle')}</p>
            <p className={'h4 font-heading text-active'}>{t('hurdleValue')}</p>
          </div>
        </Card>
        <Card className={'flex flex-col gap-2 md:row-span-8 md:justify-between lg:row-span-12'}>
          <div className='flex items-end justify-between'>
            <p>{t('withdrawal')}</p>
            <p className={'h4 font-heading text-active text-nowrap'}>{t('withdrawalValue')}</p>
          </div>
          <Divider isLong />
          <div className='flex items-end justify-between'>
            <p>{t('lockup')}</p>
            <p className={'h4 font-heading text-active text-nowrap'}>{t('lockupValue')}</p>
          </div>
          <Divider isLong />
          <div className='flex items-end justify-between'>
            <p>{t('entry')}</p>
            <p className={'h4 font-heading text-active text-nowrap'}>{t('entryValue')}</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
