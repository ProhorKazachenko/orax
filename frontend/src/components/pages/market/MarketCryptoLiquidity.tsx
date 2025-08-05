'use client'
import { Card } from '@/components/ui/Card'
import { Divider } from '@/components/ui/Divider'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import { useLocale, useTranslations } from 'next-intl'
import { Modal } from '@/components/ui/Modal'
import Image from 'next/image'
import { useState } from 'react'
import chartEn from '@/assets/image/market/CryptoLiquidityModalEng.svg'
import chartPl from '@/assets/image/market/CryptoLiquidityModalPl.svg'

export const MarketCryptoLiquidity = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const t = useTranslations('market.MarketCryptoLiquidity')
  const locale = useLocale()
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='flex flex-col gap-2 max-md:items-stretch md:flex-row md:flex-wrap md:gap-4'>
        <Card
          className={
            'group ism:bg-[100%_top] lg:b cursor-pointer bg-contain bg-[130%_top] bg-no-repeat sm:bg-[url("/images/crypto/picCryptoLiquidityfull.png")] md:flex-[0_0_100%] md:bg-contain md:bg-[100%_top] lg:bg-size-[50%]'
          }
          onClick={() => setModalOpen(true)}
        >
          <div className='ism:max-w-[480px] flex flex-col gap-2 sm:max-w-[310px] md:gap-4 lg:max-w-[450px] xl:max-w-[626px]'>
            <h4>{t('1title')}</h4>
            <ul
              className={
                'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
              }
            >
              <li>{t('11li')}</li>
              <li>{t('12li')}</li>
              <li>{t('13li')}</li>
              <li>{t('14li')}</li>
            </ul>
            <Divider isLong />
            <div
              className={
                'h4 group-hover:text-active group-active:text-accent font-heading flex items-center gap-2.5 tracking-tight'
              }
            >
              <span>{t('link')}</span>
              <IconArrowUpRight color={'currentColor'} className={'size-4 md:size-5'} />
            </div>
          </div>
        </Card>
        <Card
          className={
            'xxl:bg-[right_110px] xxl:bg-size-[80%] bg-[url("/images/crypto/picCryptoLiquidity2.png")] bg-contain bg-[center_bottom] bg-no-repeat sm:bg-[right_80px] md:flex-1/3 md:bg-[center_bottom] lg:bg-[center_110%] xl:bg-size-[80%] xl:bg-[right_110px]'
          }
        >
          <h4 className={'mb-2'}>{t('2title')}</h4>
          <p className={'pb-20'}>{t('2description')}</p>
        </Card>
        <Card
          className={
            'xxl:bg-[left_110px] bg-[url("/images/crypto/picCryptoLiquidity3.png")] bg-contain bg-[center_bottom] bg-no-repeat sm:bg-cover sm:bg-[center_80px] md:flex-1/3 md:bg-contain md:bg-[center_bottom] lg:bg-[center_130%] xl:bg-size-[80%] xl:bg-[left_110px]'
          }
        >
          <h4 className={'mb-2'}>{t('3title')}</h4>
          <p className={'pb-20'}>{t('3description')}</p>
        </Card>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Image
          src={locale === 'pl' ? chartPl : chartEn}
          className={'h-auto w-full'}
          alt={'chart'}
        />
      </Modal>
    </section>
  )
}
