import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { Link } from '@/i18n/navigation'
import { UIButton } from '@/components/ui/UIButton'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import { useTranslations } from 'next-intl'

export const MarketIntegration = () => {
  const t = useTranslations('market.MarketIntegration')
  const ct = useTranslations('common')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 md:grid md:auto-rows-[220px] md:grid-cols-3 md:gap-4'>
        <Card className={'relative flex flex-col justify-end gap-3 pt-18 md:row-span-2'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            01
          </p>
          <p className={'h4 font-heading'}>{t('1title')}</p>
          <div>
            <Chip label={t('3d')} small />
          </div>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('11li')}</li>
            <li>{t('12li')}</li>
            <li>{t('13li')}</li>
          </ul>
        </Card>
        <Card className={'relative flex flex-col justify-end gap-3 pt-18 md:col-span-2'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            02
          </p>
          <p className={'h4 font-heading'}>{t('2title')}</p>
          <div>
            <Chip label={t('2d')} small />
          </div>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('21li')}</li>
            <li>{t('22li')}</li>
          </ul>
        </Card>
        <Card className={'relative flex flex-col justify-end gap-3 pt-18 md:col-span-2'}>
          <p
            className={
              'font-heading absolute top-[24px] right-[24px] z-[-1] text-[70px] leading-[100%] font-extrabold text-white/15'
            }
          >
            03
          </p>
          <p className={'h4 font-heading'}>{t('3title')}</p>
          <div>
            <Chip label={t('6d')} small />
          </div>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('31li')}</li>
          </ul>
        </Card>
      </div>
      <div className={'mt-6 max-md:w-full md:mt-8'}>
        <Link href={'#contact'} className={'block flex-[0_0_100%] md:max-w-fit'}>
          <UIButton
            className={'text- w-full'}
            rightIcon={<IconArrowUpRight color={'currentColor'} className={'size-4'} />}
          >
            {ct('contact')}
          </UIButton>
        </Link>
      </div>
    </section>
  )
}
