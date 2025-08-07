'use client'
import { Card } from '@/components/ui/Card'
import { UIDropdown } from '@/components/ui/UIDropdown'
import { useState } from 'react'
import { useSelfData } from '@/lib/api/user/user.queries'
import dayjs from 'dayjs'

const curencyOptions = [
  { value: 'USDT', label: 'USDT' },
  { value: 'BTC', label: 'BTC' },
  { value: 'ETH', label: 'ETH' },
]

export const InvestData = () => {
  const { data } = useSelfData()
  const [curency, setCurrency] = useState('USDT')
  return (
    <div className={'mt-8 flex flex-1 flex-col gap-8 sm:mt-10 md:mt-16'}>
      <div className='flex flex-col items-stretch gap-3 md:flex-row md:flex-wrap md:gap-4'>
        <Card className={'md:flex-1/3'}>
          <h4>{data?.strategy_name}</h4>
          <div className='my-6 flex flex-wrap items-end gap-2'>
            <p className={'h1 font-heading'}>{data?.deposit?.toLocaleString('ru-RU')}</p>
            <UIDropdown
              options={curencyOptions}
              label={curency}
              onChangeAction={(value) => setCurrency(value)}
              active={curency}
            />
          </div>
          <p>Start of deposit: {dayjs(data?.start_of_deposit).format('DD.MM.YYYY')}</p>
        </Card>
        <Card
          green
          className={
            'bg-[url("/images/study/picStudyCasesFull.png")] bg-contain bg-[calc(100%+100px)_center] bg-no-repeat md:flex-1/3 lg:bg-[calc(100%+140px)_center]'
          }
        >
          <h4>Income</h4>
          <div className='my-6 flex flex-wrap items-end gap-2'>
            <p className={'h1 font-heading'}>{data?.income?.toLocaleString('ru-RU')}</p>
            <UIDropdown
              options={curencyOptions}
              label={curency}
              onChangeAction={(value) => setCurrency(value)}
              active={curency}
            />
          </div>
          <p>
            Remaining term: {data?.remaining_term} day{data?.remaining_term === 1 ? '' : 's'}
          </p>
        </Card>
      </div>
    </div>
  )
}
