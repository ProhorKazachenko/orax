import { FC } from 'react'
import { Modal } from '@/components/ui/Modal'

import { useTranslations } from 'next-intl'
import { ModalComparisonTable } from '@/components/ui/ModalComparisonTable'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const CapitalizationModal: FC<Props> = ({ isOpen, onClose }) => {
  const t = useTranslations('market.Modals')
  const data = [
    {
      label: t('CMC'),
      before: t('notAvailable'),
      after: '↑ 642',
    },
    {
      label: t('marketCap'),
      before: '$ 290K',
      after: '$ 10M +',
    },
    {
      label: t('volume'),
      before: `$ 6K`,
      after: '$ 1,3M +',
    },
    {
      label: t('capacity'),
      before: '$ 1,3K',
      after: '$ 130K +',
    },
    {
      label: t('confidence'),
      before: t('low'),
      after: t('high'),
    },
    {
      label: t('holders'),
      before: '14',
      after: '5 780',
    },
    {
      label: t('sync'),
      before: t('notAvailable'),
      after: t('high'),
    },
    {
      label: t('screener'),
      before: t('notAvailable'),
      after: t('highSense'),
    },
    {
      label: t('exchanges'),
      before: 'Raydium',
      after: 'MEXC, Bitmart, Raydium, Nominex',
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()} className={'!p-0'}>
      <ModalComparisonTable data={data} />
    </Modal>
  )
}
