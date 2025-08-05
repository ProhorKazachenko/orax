import { FC } from 'react'
import { Card } from '@/components/ui/Card'

import clsx from 'clsx'
import { useTranslations } from 'next-intl'

export const Team: FC = () => {
  const t = useTranslations('Team')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4 md:grid md:auto-rows-[162px] md:grid-cols-3 lg:grid-cols-[40%_28%_28%]'>
        <Card
          className={
            'group xl:row-span relative z-10 flex h-full min-h-[375px] flex-col justify-end overflow-hidden !p-0 md:row-span-3'
          }
        >
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            01
          </p>
          <div className={'flex flex-col gap-2 p-6 !pt-0 lg:gap-4 lg:p-10'}>
            <h4>Transparency and trust</h4>
            <p className={'font-serif'}>
              We prioritise transparency by providing regular reports and maintaining open
              communication, ensuring you are always informed about your investments.
            </p>
          </div>
        </Card>
        <Card
          className={clsx(
            'relative flex flex-col justify-end gap-2 max-md:w-full md:col-span-2 md:row-span-1',
          )}
        >
          <h4 className={'z-1 mt-10'}>Since 2020</h4>
          <p className={'z-1'}>
            We have been operating in the market since 2020, providing reliable and experienced
            services to our clients.
          </p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            02
          </p>
        </Card>

        <Card
          className={clsx(
            'relative flex flex-col justify-end gap-2 sm:flex-1/3 sm:max-md:min-h-[380px] md:row-span-2',
          )}
        >
          <h4 className={'z-1 mt-10'}>Individual approach</h4>
          <p className={'z-1'}>
            In addition to time-tested strategies, we create personalized asset management plans
            that match your goals and risk level.
          </p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            03
          </p>
        </Card>
        <Card
          className={clsx(
            'relative flex flex-col justify-end gap-2 sm:flex-1/3 sm:max-md:min-h-[380px] md:row-span-2',
          )}
        >
          <h4 className={'z-1 mt-10'}>Innovative Technologies</h4>
          <p className={'z-1'}>
            Using advanced algorithms and the latest technology, we are constantly improving our
            investment strategies to ensure consistent results even in highly volatile markets.
          </p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            04
          </p>
        </Card>
      </div>
    </section>
  )
}
