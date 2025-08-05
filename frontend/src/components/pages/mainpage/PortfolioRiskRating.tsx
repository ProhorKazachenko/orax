'use client'
import { Card } from '@/components/ui/Card'
import Image from 'next/image'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import { useLocale, useTranslations } from 'next-intl'
import { useState } from 'react'
import { Modal } from '@/components/ui/Modal'
import chartEn from '@/assets/image/modals/PortfolioModalEng.svg'
import chartPl from '@/assets/image/modals/PortfolioModalPl.svg'

export const PortfolioRiskRating = () => {
  const t = useTranslations('PortfolioRiskRating')
  const [modalOpen, setModalOpen] = useState(false)
  const locale = useLocale()
  return (
    <section className={'section container'}>
      <h2 className={'lg:max-xl:max-w-2/3'}>{t('title')}</h2>
      <p className={'mt-2 mb-3 max-lg:max-w-[500px] sm:mb-6 md:mt-4'}>{t('description')}</p>
      <div className='flex flex-col gap-2 md:flex-row md:flex-wrap md:gap-4'>
        <Card
          className={
            'flex flex-col justify-between !pr-0 !pb-0 md:min-h-[423] md:flex-1/3 lg:min-h-[453px]'
          }
        >
          <h4 className={'mb-6 sm:mb-8'}>{t('losses')}</h4>
          <Image
            src={
              locale === 'en'
                ? '/images/portfolio/picPortfolioeng.svg'
                : '/images/portfolio/picPortfoliopl.svg'
            }
            alt={'portfolio'}
            width={268}
            height={223}
            className={'ml-auto h-auto w-3/4 rounded-r-3xl md:rounded-r-4xl'}
          />
        </Card>
        <Card className={'md:flex-1/3'}>
          <h4 className={'mb-2 md:mb-3'}>{t('how')}</h4>
          <ul
            className={
              'marker:text-active ml-4 flex list-disc flex-col gap-2 marker:size-5 md:gap-3'
            }
          >
            <li>{t('how1')}</li>
            <li>{t('how2')}</li>
            <li>{t('how3')}</li>
          </ul>
        </Card>
        <Card
          className={
            'group cursor-pointer bg-contain bg-[200%_center] bg-no-repeat sm:bg-[url(/images/portfolio/picPortfolioBG.png)] sm:bg-[130%_center] md:flex-auto md:bg-[right_center]'
          }
          onClick={() => setModalOpen(true)}
        >
          <div className={'flex h-full flex-col gap-2 text-white sm:max-w-2/3 sm:gap-3'}>
            <h4>{t('methodology')}</h4>
            <p>{t('methodologyDescription')}</p>
            <hr
              className='h-px w-full border-0'
              style={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 4.23%, rgba(255, 255, 255, 0) 59.62%)',
              }}
            />
            <div
              className={
                'h4 group-hover:text-active group-active:text-accent font-heading flex items-center gap-2.5 tracking-tight'
              }
            >
              <span>{t('findOut')}</span>
              <IconArrowUpRight color={'currentColor'} className={'size-4 md:size-5'} />
            </div>
          </div>
        </Card>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} className={'xl:max-w-[70dvw]'}>
        <Image src={locale === 'en' ? chartEn : chartPl} alt={'chart'} className='h-auto w-full' />
        <p className={'h4 font-heading mt-2 md:mt-4'}>{t('modalText')}</p>
      </Modal>
    </section>
  )
}
