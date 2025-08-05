import { Link } from '@/i18n/navigation'
import { UIButton } from '@/components/ui/UIButton'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import { Card } from '@/components/ui/Card'
import { Hero } from '@/components/ui/Hero/Hero'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import bgImage from '@/assets/image/picHeroMarket.png'

export const MarketHero = () => {
  const t = useTranslations('market.hero')
  const ct = useTranslations('common')
  return (
    <section className=''>
      <Hero
        heading={t('title')}
        description={t('description')}
        className={'relative'}
        disableTextLength
      >
        <Link href={'#contact'}>
          <UIButton
            rightIcon={<IconArrowUpRight color={'currentColor'} className={'size-4 md:size-5'} />}
          >
            {ct('contact')}
          </UIButton>
        </Link>
        <div className='mt-35 flex flex-col gap-2.5 sm:grid sm:grid-cols-2 md:mt-79 md:grid-cols-3 md:grid-rows-[20px] lg:mt-61'>
          <Card className={'flex-auto text-center md:row-span-5'}>
            <p className={'h1 font-heading mb-2'}>
              11+<span className={'text-sm md:text-[16px]'}>{ct('years')}</span>
            </p>
            <p>{t('exp')}</p>
          </Card>
          <Card
            className={
              'flex-auto text-center md:col-start-2 md:row-span-5 md:row-start-2 xl:row-start-3'
            }
          >
            <p className={'h1 font-heading mb-2'}>300%</p>
            <p>{t('growth')}</p>
          </Card>
          <Card
            className={
              'flex flex-auto flex-col items-center justify-center text-center max-md:col-start-2 max-md:row-span-2 max-md:row-start-1 md:row-span-5'
            }
          >
            <p className={'h1 font-heading mb-2'}>$1.57B+</p>
            <p>{t('capitalization')}</p>
          </Card>
        </div>
        <Image
          src={bgImage}
          alt={'capitalization'}
          className={
            'absolute top-20 left-0 -z-10 h-auto w-full object-cover max-sm:hidden md:top-0 md:h-[60%] lg:top-15 lg:h-full xl:top-0 xl:object-bottom'
          }
        />
      </Hero>
    </section>
  )
}
