import { FC } from 'react'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/Card'
import clsx from 'clsx'

export const PortfolioManagement: FC = () => {
  const t = useTranslations('PortfolioManagement')

  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>Effective portfolio management</h2>
      <div className='grid grid-cols-1 gap-2 sm:auto-rows-[10px] sm:grid-cols-2 md:auto-rows-[5px] md:grid-cols-3 md:gap-4'>
        <Card className={clsx('relative flex flex-col justify-end gap-2 sm:row-span-18', {})}>
          <h4 className={'z-1 mt-10'}>{t('1title')}</h4>
          <p className={'z-1'}>{t('1description')}</p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            01
          </p>
        </Card>
        <Card
          className={clsx(
            'relative flex flex-col justify-end gap-2 sm:row-span-16 md:col-span-2 md:row-span-14 md:-mr-4',
            {},
          )}
        >
          <h4 className={'z-1 mt-10'}>{t('2title')}</h4>
          <p className={'z-1'}>{t('2description')}</p>
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
            'relative flex flex-col justify-end gap-2 sm:row-span-18 md:col-start-1 md:row-span-17',
            {},
          )}
        >
          <h4 className={'z-1 mt-10'}>{t('3title')}</h4>
          <p className={'z-1'}>{t('3description')}</p>
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
            'relative flex flex-col justify-end gap-2 sm:row-span-16 md:col-start-2 md:row-span-21 md:row-start-15',
            {},
          )}
        >
          <h4 className={'z-1 mt-10'}>{t('4title')}</h4>
          <p className={'z-1'}>{t('4description')}</p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            04
          </p>
        </Card>
        <Card
          className={clsx(
            'relative flex flex-col justify-end gap-2 max-md:hidden sm:col-span-2 sm:row-span-10 md:col-start-3 md:row-span-21 md:row-start-15',
            {},
          )}
        >
          <h4 className={'z-1 mt-10'}>{t('5title')}</h4>
          <p className={'z-1'}>{t('5description')}</p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            05
          </p>
        </Card>
        <Card
          className={clsx(
            'relative flex flex-col justify-end gap-2 sm:col-span-2 sm:row-span-10 md:hidden',
            {},
          )}
        >
          <h4 className={'z-1 mt-10'}>{t('6title')}</h4>
          <p className={'z-1'}>{t('6description')}</p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            06
          </p>
        </Card>
        <Card
          className={clsx(
            'relative flex flex-col justify-end gap-2 sm:col-span-2 sm:row-span-10 md:hidden',
            {},
          )}
        >
          <h4 className={'z-1 mt-10'}>{t('7title')}</h4>
          <p className={'z-1'}>{t('7description')}</p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            07
          </p>
        </Card>
      </div>

      <div className='mt-4 flex gap-4 max-md:hidden'>
        <Card className={clsx('relative flex flex-1/2 flex-col justify-end gap-2', {})}>
          <h4 className={'z-1 mt-10'}>{t('7title')}</h4>
          <p className={'z-1'}>{t('7description')}</p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            06
          </p>
        </Card>
        <Card className={clsx('relative flex flex-1/2 flex-col justify-end gap-2', {})}>
          <h4 className={'z-1 mt-10'}>{t('6title')}</h4>
          <p className={'z-1'}>{t('6description')}</p>
          <p
            className={
              'font-heading absolute top-[16px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            07
          </p>
        </Card>
      </div>
    </section>
  )
}
