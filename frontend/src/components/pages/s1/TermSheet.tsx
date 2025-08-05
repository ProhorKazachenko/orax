import { Card } from '@/components/ui/Card'
import { Divider } from '@/components/ui/Divider'
import { useTranslations } from 'next-intl'

export const TermSheet = () => {
  const t = useTranslations('s1.TermSheet')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:gap-4 md:grid md:auto-rows-[10px] md:grid-cols-2 lg:grid-cols-3 lg:gap-3'>
        <Card
          green
          className={'flex flex-col gap-1 md:row-span-11 md:justify-between lg:row-span-16'}
        >
          <p className={'text-xs'}>{t('part')}</p>
          <p className={'font-heading font-extrabold'}>{t('minimum')}</p>
          <p className={'h1 font-heading'}>$100&nbsp;K</p>
          <p className={'text-xs'}>{t('holding')}</p>
          <p className={'font-heading font-extrabold'}>{t('plan')}</p>
          <p className={'text-xs'}>{t('exit')}</p>
        </Card>
        <Card className={'md:row-span-9 md:flex md:flex-col md:justify-between lg:row-span-13'}>
          <h4>{t('specification')}</h4>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:mt-2 md:gap-3'
            }
          >
            <li>{t('specification1')}</li>
            <li>{t('specification2')}</li>
            <li>{t('specification3')}</li>
          </ul>
        </Card>
        <Card
          className={
            'flex flex-col gap-2 md:row-span-16 md:justify-between lg:col-start-2 lg:row-span-21 lg:row-start-1'
          }
        >
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
          <Divider isLong />
          <h4>{t('risk')}</h4>
          <p className={'text-sm'}>{t('riskDesk')}</p>
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
        <Card
          className={
            'flex flex-col gap-2 md:row-span-14 md:justify-between lg:col-start-1 lg:row-span-18'
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
        <Card className={'flex flex-col gap-2 md:row-span-8 lg:col-start-2 lg:row-span-13'}>
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
        <Card
          className={
            'flex flex-col gap-2 md:row-span-8 lg:col-start-3 lg:row-span-21 lg:row-start-14 lg:bg-[url("/images/picTermsheet.png")] lg:bg-size-[60%] lg:bg-bottom-right lg:bg-no-repeat xl:bg-size-[50%]'
          }
        >
          <div className='flex items-end justify-between'>
            <p>{t('lockup')}</p>
            <p
              className={'h4 font-heading text-active'}
              dangerouslySetInnerHTML={{ __html: t('lockupValue') }}
            />
          </div>
          <Divider isLong />
          <div className='flex items-end justify-between'>
            <p>{t('withdrawal')}</p>
            <p
              className={'h4 font-heading text-active'}
              dangerouslySetInnerHTML={{ __html: t('withdrawalValue') }}
            />
          </div>
          <Divider isLong />
          <div className='flex items-end justify-between'>
            <p>{t('entry')}</p>
            <p
              className={'h4 font-heading text-active'}
              dangerouslySetInnerHTML={{ __html: t('entryValue') }}
            />
          </div>
        </Card>
      </div>
    </section>
  )
}
