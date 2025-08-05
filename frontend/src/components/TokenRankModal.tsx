import { FC } from 'react'
import { Modal } from '@/components/ui/Modal'

import { useTranslations } from 'next-intl'
import { ModalComparisonTable } from '@/components/ui/ModalComparisonTable'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const TokenRankModal: FC<Props> = ({ isOpen, onClose }) => {
  const t = useTranslations('market.Modals')
  const data = [
    {
      label: t('CMC'),
      before: '↓ 2 900',
      after: '↑ 500',
    },
    {
      label: t('marketCap'),
      before: '$ 12M',
      after: '$ 50M +',
    },
    {
      label: t('volume'),
      before: `$ 640K (${t('moderate')})`,
      after: '$ 70M +',
    },
    {
      label: t('capacity'),
      before: '$ 14K',
      after: '$ 50K +',
    },
    {
      label: t('confidence'),
      before: t('low'),
      after: t('high'),
    },
    {
      label: t('sync'),
      before: t('low'),
      after: t('high'),
    },
    {
      label: t('screener'),
      before: t('notAvailable'),
      after: t('available'),
    },
    {
      label: t('exchanges'),
      before: 'KuCoin, UniSwap, HitBTC',
      after: 'Coinbase, KuCoin, Gate, Huobi Global, Crypto.com, HitBTC, Hoo and 7 Exchanges',
    },
  ]

  return (
    <Modal isOpen={isOpen} onClose={() => onClose()} className={'!p-0'}>
      <ModalComparisonTable data={data} />
    </Modal>
  )
}
