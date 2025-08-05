import { FC } from 'react'
import { Modal } from '@/components/ui/Modal'

import { useTranslations } from 'next-intl'
import { ModalComparisonTable } from '@/components/ui/ModalComparisonTable'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const Perf2Modal: FC<Props> = ({ isOpen, onClose }) => {
  const t = useTranslations('market.Modals')
  const data = [
    {
      label: t('marketCap'),
      before: '$ 150K',
      after: '$ 900K +',
    },
    {
      label: t('volume'),
      before: `$ 63K (${t('moderate')})`,
      after: '$ 120K +',
    },
    {
      label: t('capacity'),
      before: '$ 2,5K',
      after: '$ 25K +',
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
      after: 'MEXC',
    },
    {
      label: t('performance'),
      before: '-',
      after: '426 %',
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()} className={'!p-0'}>
      <ModalComparisonTable data={data} />
    </Modal>
  )
}
