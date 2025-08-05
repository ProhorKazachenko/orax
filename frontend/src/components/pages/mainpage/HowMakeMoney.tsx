import { Card } from '@/components/ui/Card'
import { Divider } from '@/components/ui/Divider'
import { Link } from '@/i18n/navigation'
import { UIButton } from '@/components/ui/UIButton'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import { useTranslations } from 'next-intl'

export const HowMakeMoney = () => {
  const t = useTranslations('HowMakeMoney')
  const ct = useTranslations('common')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 max-md:items-stretch md:flex-row md:flex-wrap md:gap-4'>
        <Card
          className={
            'ism:bg-[130%_top] lg:b bg-contain bg-[330%_top] bg-no-repeat sm:bg-[url("/images/crypto/picCryptoLiquidityfull.png")] md:flex-[0_0_100%] md:bg-contain md:bg-[130%_top] lg:bg-[100%_top]'
          }
        >
          <div className='ism:max-w-[480px] flex flex-col gap-2 sm:max-w-[310px] md:gap-4 lg:max-w-[660px] xl:max-w-[810px]'>
            <h4>{t('strategy')}</h4>
            <ul
              className={
                'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
              }
            >
              <li>{t('strategy1')}</li>
              <li>{t('strategy2')}</li>
            </ul>
            <Divider />
            <h4>{t('documents')}</h4>
            <ul
              className={
                'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
              }
            >
              <li>{t('documents1')}</li>
              <li>{t('documents2')}</li>
            </ul>
            <Divider />
            <h4>{t('legal')}</h4>
            <ul
              className={
                'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
              }
            >
              <li>{t('legal1')}</li>
              <li>{t('legal2')}</li>
              <li>{t('legal3')}</li>
            </ul>
            <Divider />
            <h4>{t('launch')}</h4>
            <ul
              className={
                'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
              }
            >
              <li
                dangerouslySetInnerHTML={{
                  __html: t('launch1').replace(
                    'orax-assets.com',
                    "<span className={'text-active'}>orax-assets.com</span>",
                  ),
                }}
              ></li>
              <li>{t('launch2')}</li>
            </ul>
            <Divider />
            <h4>{t('results')}</h4>
            <ul
              className={
                'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
              }
            >
              <li>{t('results1')}</li>
            </ul>
          </div>
        </Card>
        <Card
          className={
            'xxl:bg-[center_390%] bg-[url("/images/crypto/picCryptoLiquidity2.png")] bg-contain bg-[center_bottom] bg-no-repeat sm:bg-[right_80px] md:flex-1/3 md:bg-[center_bottom] lg:bg-[center_130%] xl:bg-[center_300%]'
          }
        >
          <h4 className={'mb-2'}>{t('withdraw')}</h4>
          <p className={'pb-20'}>{t('withdrawDescription')}</p>
        </Card>
        <Card
          className={
            'xxl:bg-[center_370%] bg-[url("/images/crypto/picCryptoLiquidity3.png")] bg-contain bg-[center_bottom] bg-no-repeat sm:bg-cover sm:bg-[center_80px] md:flex-1/3 md:bg-contain md:bg-[center_bottom] lg:bg-[center_130%] xl:bg-[center_290%]'
          }
        >
          <h4 className={'mb-2'}>{t('funds')}</h4>
          <p className={'pb-20'}>{t('fundsDescription')}</p>
        </Card>
      </div>
      <div className={'mt-6 md:mt-8'}>
        <Link href={'#contact'} className={'flex-[0_0_100%]'}>
          <UIButton rightIcon={<IconArrowUpRight color={'currentColor'} className={'size-4'} />}>
            {ct('contact')}
          </UIButton>
        </Link>
      </div>
    </section>
  )
}
