import Image from 'next/image'
import productReview from '@/assets/image/b1/B1Investment.svg'
import { useTranslations } from 'next-intl'

export const B1Product = () => {
  const t = useTranslations('b1.Product')
  return (
    <section className={'section container'}>
      <h2
        className='subheading md:max-lg:max-w-2/3'
        dangerouslySetInnerHTML={{ __html: t('title') }}
      ></h2>
      <Image src={productReview} alt={'APY Review'} className='h-auto w-full' />
    </section>
  )
}
