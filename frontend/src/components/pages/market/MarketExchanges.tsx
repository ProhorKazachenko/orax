import Image from 'next/image'
import exchange1 from '@/assets/image/exchanges/Supported 1.png'
import exchange2 from '@/assets/image/exchanges/Supported 2.png'
import exchange3 from '@/assets/image/exchanges/Supported 3.png'
import exchange4 from '@/assets/image/exchanges/Supported 4.png'
import exchange5 from '@/assets/image/exchanges/Supported 5.png'
import exchange6 from '@/assets/image/exchanges/Supported 6.png'
import exchange7 from '@/assets/image/exchanges/Supported 7.png'
import exchange8 from '@/assets/image/exchanges/Supported 8.png'
import exchange9 from '@/assets/image/exchanges/Supported 9.png'
import exchange10 from '@/assets/image/exchanges/Supported 10.png'
import exchange11 from '@/assets/image/exchanges/Supported 11.png'
import exchange12 from '@/assets/image/exchanges/Supported 12.png'
import exchange13 from '@/assets/image/exchanges/Supported 13.png'
import exchange14 from '@/assets/image/exchanges/Supported 14.png'
import exchange15 from '@/assets/image/exchanges/Supported 15.png'
import exchange16 from '@/assets/image/exchanges/Supported 16.png'
import exchange17 from '@/assets/image/exchanges/Supported 17.png'
import exchange18 from '@/assets/image/exchanges/Supported 18.png'
import exchange19 from '@/assets/image/exchanges/Supported 19.png'
import exchange20 from '@/assets/image/exchanges/Supported 20.png'
import exchange21 from '@/assets/image/exchanges/Supported 21.png'
import exchange22 from '@/assets/image/exchanges/Supported 22.png'
import exchange23 from '@/assets/image/exchanges/Supported 23.png'
import exchange24 from '@/assets/image/exchanges/Supported 24.png'
import { useTranslations } from 'next-intl'

export const MarketExchanges = () => {
  const t = useTranslations('market.MarketExchanges')
  return (
    <section className={'section container'}>
      <h2 className={'subheading'}>{t('title')}</h2>
      <div className='grid grid-cols-4 md:grid-cols-6 md:gap-4 lg:grid-cols-9'>
        <Image src={exchange1} alt={`exchange 1`} />
        <Image src={exchange2} alt={`exchange 2`} />
        <Image src={exchange3} alt={`exchange 3`} />
        <Image src={exchange4} alt={`exchange 4`} />
        <Image src={exchange5} alt={`exchange 5`} />
        <Image src={exchange6} alt={`exchange 6`} />
        <Image src={exchange7} alt={`exchange 7`} className={'lg:col-start-2'} />
        <Image src={exchange8} alt={`exchange 8`} />
        <Image src={exchange9} alt={`exchange 9`} />
        <Image src={exchange10} alt={`exchange 10`} />
        <Image src={exchange11} alt={`exchange 11`} />
        <Image src={exchange12} alt={`exchange 12`} />
        <Image src={exchange13} alt={`exchange 13`} className={'lg:col-start-3'} />
        <Image src={exchange14} alt={`exchange 14`} />
        <Image src={exchange15} alt={`exchange 15`} />
        <Image src={exchange16} alt={`exchange 16`} />
        <Image src={exchange17} alt={`exchange 17`} />
        <Image src={exchange18} alt={`exchange 18`} />
        <Image src={exchange19} alt={`exchange 19`} className={'lg:col-start-4'} />
        <Image src={exchange20} alt={`exchange 20`} />
        <Image src={exchange21} alt={`exchange 21`} />
        <Image src={exchange22} alt={`exchange 22`} />
        <Image src={exchange23} alt={`exchange 23`} />
        <Image src={exchange24} alt={`exchange 24`} />
      </div>
    </section>
  )
}
