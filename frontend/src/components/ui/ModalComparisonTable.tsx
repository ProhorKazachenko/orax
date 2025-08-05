import { Chip } from '@/components/ui/Chip'
import { Divider } from '@/components/ui/Divider'
import Image from 'next/image'
import afterChip from '@/assets/chipAfter.svg'
import { FC, Fragment } from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
interface Props {
  data: {
    label: string
    before: string
    after: string
  }[]
}

export const ModalComparisonTable: FC<Props> = ({ data }) => {
  const t = useTranslations('market.Modals')
  return (
    <>
      <div className={'block md:hidden'}>
        <div className='flex flex-col gap-3 bg-white/15 p-3'>
          <Chip label={t('before')} className={'!bg-white/7'} />
          {data.map((el, idx) => (
            <Fragment key={idx}>
              <div className='flex items-center justify-between gap-2'>
                <p>{el.label}</p>
                <p className={'h4-special font-heading text-end'}>{el.before}</p>
              </div>
              {idx < data.length - 1 && <Divider isLong />}
            </Fragment>
          ))}
        </div>

        <div className='bg-active text-bg flex flex-col gap-3 p-3'>
          <Image src={afterChip} alt={'after orax'} />
          {data.map((el, idx) => (
            <Fragment key={idx}>
              <div className='flex items-center justify-between gap-2'>
                <p>{el.label}</p>
                <p className={'h4-special font-heading text-end'}>{el.after}</p>
              </div>
              {idx < data.length - 1 && <Divider isLong />}
            </Fragment>
          ))}
        </div>
      </div>

      <div className='hidden p-10 md:block'>
        <table className='w-full table-fixed border-collapse'>
          <thead>
            <tr className='text-left text-[--text-muted]'>
              <th className='w-[16%]'></th>
              <th className='h4 font-heading rounded-tl-2xl bg-white/15 px-8 py-8'>
                {t('before')}
              </th>
              <th className='bg-active text-bg h4 font-heading rounded-tr-2xl px-8 py-8'>
                <Image src={afterChip} alt={'after orax'} />
              </th>
            </tr>
          </thead>
          <tbody className='divide-y'>
            {data?.map((el, idx) => (
              <tr className='' key={idx}>
                <td className='py-2'>{el.label}</td>
                <td
                  className={clsx('h4 font-heading bg-white/15 px-8 py-2', {
                    'px-8 py-2': idx !== data.length - 1,
                    'rounded-bl-2xl px-8 pb-8': idx === data.length - 1,
                  })}
                >
                  {el.before}
                </td>
                <td
                  className={clsx('bg-active text-bg h4 font-heading', {
                    'px-8 py-2': idx !== data.length - 1,
                    'rounded-br-2xl px-8 pb-8': idx === data.length - 1,
                  })}
                >
                  {el.after}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
