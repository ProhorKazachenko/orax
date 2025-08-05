import { FC } from 'react'
import { Card } from '@/components/ui/Card'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import { IconArrowUpRight } from '@/components/icons/IconArrowUpRight'

interface Props {
  hide?: Array<'a1' | 'b1' | 's1'>
}

export const Strategies: FC<Props> = ({ hide = [] }) => {
  const t = useTranslations('Strategies')
  const hiddenImages = ['/images/experience/picExp2.png', '/images/experience/picExp3.png']
  const cards = [
    {
      description: t('B1Text'),
      title: `${t('strategy')}  B1`,
      image: '/images/experience/picExp1.png',
      href: '/strategies/b1',
      id: 'b1',
    },
    {
      description: t('S1Text'),
      title: `${t('strategy')}  S1`,
      image: '/images/experience/picExp2.png',
      href: '/strategies/s1',
      id: 's1',
    },
    {
      description: t('A1Text'),
      title: `${t('strategy')}  A1`,
      image: '/images/experience/picExp3.png',
      href: '/strategies/a1',
      id: 'a1',
    },
  ].filter((card) => hide.indexOf(card.id as 'a1' | 'b1' | 's1') === -1)
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{hide.length > 0 ? t('other') : t('title')}</h2>
      <div
        className={clsx('grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4', {
          'lg:grid-cols-3': hide.length < 1,
          'md:grid-rows-1 lg:grid-cols-2': hide.length > 0,
        })}
      >
        {cards?.map((card, idx) => (
          <Link
            href={card.href}
            key={idx}
            className={clsx({
              'md:row-span-2 lg:row-span-1': idx === 0 && hide.length < 1,
            })}
          >
            <Card
              className={clsx(
                `group flex h-full min-h-[220px] flex-col justify-end gap-2 bg-cover bg-[center_-90px] bg-no-repeat sm:bg-[center_90%] md:min-h-[252px] md:bg-[center_-95px] lg:min-h-[341px]`,
                {
                  'md:bg-contain md:bg-[center_-20px] lg:bg-cover lg:bg-[center_-100px]':
                    idx === 0 && hide.length < 1,
                  'sm:row-span-2 md:bg-cover md:bg-[center_120%]': hide.length > 0,
                },
              )}
              style={{
                backgroundImage: `url(${hide.length > 0 ? hiddenImages[idx] : card.image})`,
              }}
            >
              <p className={'font-serif text-white'}>{card.description}</p>
              <div className='group-hover:text-active group-active:text-accent flex items-center gap-2'>
                <p className={'h4'}>{card.title}</p>
                <IconArrowUpRight color={'currentColor'} className={'size-4 md:size-5'} />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
