import { FC, Fragment } from 'react'
import clsx from 'clsx'
import { Card } from '@/components/ui/Card'

interface Props {
  chip: string
  cards: {
    title: string
    cards: {
      text: string
    }[]
  }[]
}

export const CardGrid: FC<Props> = ({ cards, chip }) => {
  return (
    <div className={'flex flex-col gap-2 md:gap-4'}>
      {cards.map((cardRow, rowIdx) => (
        <div
          className={clsx(
            'flex flex-col gap-2 max-lg:flex-wrap sm:flex-row sm:items-stretch md:gap-4',
          )}
          key={rowIdx}
        >
          <div
            className={clsx(
              'flex items-end justify-between gap-2 max-lg:flex-[1_0_100%] lg:flex-1/3 lg:flex-col-reverse lg:justify-center lg:gap-10',
              {
                'flex-row-reverse lg:order-10': rowIdx % 2,
                'lg:items-start': rowIdx % 2 === 0,
              },
            )}
          >
            <h4>{cardRow.title}</h4>
            <p className={'font-heading text-[70px] leading-[100%] font-extrabold text-white/15'}>
              0{rowIdx + 1}
            </p>
          </div>
          {cardRow.cards.map((card, idx) => (
            <Fragment key={idx}>
              <Card
                staticChip={idx % 2 === 1}
                green={idx % 2 === 1}
                className={
                  'flex min-h-[180px] flex-col items-start justify-between gap-2 sm:min-h-[230px] sm:flex-1/3'
                }
                chip={chip}
              >
                <p>{card.text}</p>
              </Card>
            </Fragment>
          ))}
        </div>
      ))}
    </div>
  )
}
