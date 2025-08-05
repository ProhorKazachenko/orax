'use client'
import { Card } from '@/components/ui/Card'
import { Chip } from '@/components/ui/Chip'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'
import { IconArrowUp } from '@/components/icons/IconArrowUp'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { TokenRankModal } from '@/components/TokenRankModal'
import { CapitalizationModal } from '@/components/CapitalizationModal'
import { Perf1Modal } from '@/components/Perf1Modal'
import { Perf2Modal } from '@/components/Perf2Modal'

export const MarketStudyCases = () => {
  const [modalRankOpen, setModalRankOpen] = useState(false)
  const [modalCapitalizationOpen, setModalCapitalizationOpen] = useState(false)
  const [modalPerf1Open, setModalPerf1Open] = useState(false)
  const [modalPerf2Open, setModalPerf2Open] = useState(false)
  const t = useTranslations('market.MarketStudyCases')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <p className={'mt-2 mb-3 max-w-[500px] sm:mb-6 md:mt-4'}>{t('description')}</p>
      <div className='flex flex-col gap-2 md:grid md:auto-rows-[220px] md:grid-cols-2 md:gap-4 lg:grid-cols-3'>
        <Card
          className={
            'group flex cursor-pointer flex-col justify-between gap-6 bg-[url("/images/study/mobile/1.png")] bg-contain bg-[right_bottom] bg-no-repeat md:row-span-2 md:bg-[url("/images/study/desktop/1.png")] md:bg-[right_-15px]'
          }
          onClick={() => setModalRankOpen(true)}
        >
          <div className='flex justify-between gap-2'>
            <div className='flex flex-wrap gap-1 !text-xs md:gap-2'>
              <Chip small label={'Coinbase'} />
              <Chip small label={'KuCoin'} />
              <Chip small label={'Gate'} />
              <Chip small label={'Huobi'} />
              <Chip small label={'Crypto.com'} />
              <Chip small label={'HitBTC'} />
              <Chip small label={'7+'} />
            </div>
            <IconArrowUpRight
              className={'group-hover:text-active group-active:text-accent shrink-0'}
              color={'currentColor'}
            />
          </div>
          <div className={'font-heading'}>
            <div className={'h2 flex items-center gap-2'}>
              <IconArrowUp className={'size-5'} />
              <p>2 400</p>
            </div>
            <p className={'h4'}>{t('rank')}</p>
          </div>
        </Card>
        <Card
          className={
            'group relative flex cursor-pointer flex-col justify-between gap-6 overflow-hidden bg-[url("/images/study/mobile/2.png")] bg-cover bg-no-repeat md:bg-[url("/images/study/desktop/21.png")] md:bg-size-[75%] md:bg-[left_-20px] lg:col-span-2 lg:bg-size-[40%] lg:bg-[left_top] xl:bg-size-[280px] xl:bg-[left_-12px]'
          }
          onClick={() => setModalCapitalizationOpen(true)}
        >
          <div className='flex justify-between gap-2'>
            <div className='flex flex-wrap gap-1 !text-xs md:gap-2'>
              <Chip small label={'MEXC'} />
              <Chip small label={'Bitmart'} />
              <Chip small label={'Raydium'} />
              <Chip small label={'Nominex'} />
            </div>
            <Image
              src={'/images/study/desktop/22.png'}
              alt={'bg2'}
              className={'absolute top-0 right-0 z-[-1] hidden h-auto w-[194px] md:block'}
              width={194}
              height={222}
            />
            <IconArrowUpRight
              className={'group-hover:text-active group-active:text-accent shrink-0'}
              color={'currentColor'}
            />
          </div>
          <div className={'font-heading'}>
            <div className={'h2 flex items-center gap-2'}>
              <p>X33</p>
            </div>
            <p className={'h4'}>{t('capitalization')}</p>
          </div>
        </Card>
        <Card
          className={
            'group flex cursor-pointer flex-col justify-between gap-6 bg-[url("/images/study/mobile/3.png")] bg-contain bg-[left_bottom] bg-no-repeat md:bg-[url("/images/study/desktop/3.png")]'
          }
          onClick={() => setModalPerf1Open(true)}
        >
          <div className='flex justify-between gap-2'>
            <div className='flex flex-wrap gap-1 !text-xs md:gap-2'>
              <Chip small label={'MEXC'} />
              <Chip small label={'UniSwap'} />
            </div>
            <IconArrowUpRight
              className={'group-hover:text-active group-active:text-accent shrink-0'}
              color={'currentColor'}
            />
          </div>
          <div className={'font-heading'}>
            <div className={'h2 flex items-center gap-2'}>
              <p>1 258%</p>
            </div>
            <p className={'h4'}>{t('performance')} </p>
          </div>
        </Card>
        <Card
          className={
            'group flex cursor-pointer flex-col justify-between gap-6 bg-[url("/images/study/mobile/4.png")] bg-cover bg-no-repeat md:col-span-2 md:bg-[url("/images/study/desktop/4.png")] md:bg-contain md:bg-[right_bottom] lg:col-span-1'
          }
          onClick={() => setModalPerf2Open(true)}
        >
          <div className='flex justify-between gap-2'>
            <div className='flex flex-wrap gap-1 !text-xs md:gap-2'>
              <Chip small label={'MEXC'} />
              <Chip small label={'UniSwap'} />
            </div>
            <IconArrowUpRight
              className={'group-hover:text-active group-active:text-accent shrink-0'}
              color={'currentColor'}
            />
          </div>
          <div className={'font-heading !text-lg'}>
            <div className={'h2 flex items-center gap-2'}>
              <p>426%</p>
            </div>
            <p className={'h4'}>{t('performance')} </p>
          </div>
        </Card>
      </div>
      <TokenRankModal isOpen={modalRankOpen} onClose={() => setModalRankOpen(false)} />
      <CapitalizationModal
        isOpen={modalCapitalizationOpen}
        onClose={() => setModalCapitalizationOpen(false)}
      />
      <Perf1Modal isOpen={modalPerf1Open} onClose={() => setModalPerf1Open(false)} />
      <Perf2Modal isOpen={modalPerf2Open} onClose={() => setModalPerf2Open(false)} />
    </section>
  )
}
