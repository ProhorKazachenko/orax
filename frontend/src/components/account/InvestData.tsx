'use client'
import { Card } from '@/components/ui/Card'
import { UIDropdown } from '@/components/ui/UIDropdown'
import { useState } from 'react'

const curencyOptions = [
  { value: 'USDT', label: 'USDT' },
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
]

export const InvestData = () => {
  const [curency, setCurrency] = useState('USDT')
  return (
    <div className={'mt-8 flex flex-1 flex-col gap-8 sm:mt-10 md:mt-16'}>
      <div className='flex flex-col items-stretch gap-3 md:flex-row md:gap-4'>
        <Card className={'flex-1/2'}>
          <h4>Strategy S1</h4>
          <div className='my-6 flex items-end gap-2'>
            <p className={'h1 font-heading'}>100 500</p>
            <UIDropdown
              options={curencyOptions}
              label={curency}
              onChangeAction={(value) => setCurrency(value)}
              active={curency}
            />
          </div>
          <p>Start of deposit: 21.07.2025</p>
        </Card>
        <Card
          green
          className={
            'flex-1/2 bg-[url("/images/study/picStudyCasesFull.png")] bg-contain bg-[calc(100%+100px)_center] bg-no-repeat lg:bg-[calc(100%+140px)_center]'
          }
        >
          <h4>Income</h4>
          <div className='my-6 flex items-end gap-2'>
            <p className={'h1 font-heading'}>500</p>
            <UIDropdown
              options={curencyOptions}
              label={curency}
              onChangeAction={(value) => setCurrency(value)}
              active={curency}
            />
          </div>
          <p>Remaining term: 245 days</p>
        </Card>
      </div>
    </div>
  )
}
