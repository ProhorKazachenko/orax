import { FC } from 'react'
import { Modal } from '@/components/ui/Modal'

import { useTranslations } from 'next-intl'
import { ModalComparisonTable } from '@/components/ui/ModalComparisonTable'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const Perf1Modal: FC<Props> = ({ isOpen, onClose }) => {
  const t = useTranslations('market.Modals')
  const data = [
    {
      label: t('marketCap'),
      before: '$ 90K +',
      after: '$ 1M +',
    },
    {
      label: t('volume'),
      before: `$ 61K (${t('moderate')})`,
      after: '$ 180K +',
    },
    {
      label: t('capacity'),
      before: '$ 2K',
      after: '$ 15K +',
    },
    {
      label: t('confidence'),
      before: t('low'),
      after: t('high'),
    },
    {
      label: t('sync'),
      before: t('notAvailable'),
      after: t('medium'),
    },
    {
      label: t('screener'),
      before: t('notAvailable'),
      after: t('available'),
    },
    {
      label: t('exchanges'),
      before: 'MEXC',
      after: 'MEXC, UniSwap',
    },
    {
      label: t('performance'),
      before: '-',
      after: '1 258 %',
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()} className={'!p-0'}>
      <ModalComparisonTable data={data} />
    </Modal>
  )
}
