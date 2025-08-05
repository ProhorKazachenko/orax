import { Hero } from '@/components/ui/Hero/Hero'
import { UIButton } from '@/components/ui/UIButton'
import { Card } from '@/components/ui/Card'
import { useTranslations } from 'next-intl'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import { Link } from '@/i18n/navigation'

export const MainHero = () => {
  const t = useTranslations('MainHero')
  const tc = useTranslations('common')
  return (
    <Hero heading={t('heading')} description={t('description')}>
      <Link href={'#contact'}>
        <UIButton
          rightIcon={<IconArrowUpRight color={'currentColor'} className={'size-4 md:size-5'} />}
        >
          {tc('contact')}
        </UIButton>
      </Link>
      <div className='mt-35 flex flex-col gap-2.5 sm:grid sm:grid-cols-2 md:mt-79 md:grid-cols-3 md:grid-rows-[20px] lg:mt-61'>
        <Card className={'flex-auto text-center md:row-span-5'}>
          <p className={'h1 font-heading mb-2'}>
            8+<span className={'text-sm md:text-[16px]'}>{t('years')}</span>
          </p>
          <p>{t('team')}</p>
        </Card>
        <Card className={'flex-auto text-center md:col-start-2 md:row-span-5 md:row-start-3'}>
          <p className={'h1 font-heading mb-2'}>$36M+</p>
          <p>{t('assets')}</p>
        </Card>
        <Card
          className={
            'flex flex-auto flex-col items-center justify-center text-center max-md:col-start-2 max-md:row-span-2 max-md:row-start-1 md:row-span-5'
          }
        >
          <p className={'h1 font-heading mb-2'}>50+</p>
          <p>{t('clients')}</p>
        </Card>
      </div>
    </Hero>
  )
}
