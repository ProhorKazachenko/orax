import { SOneHero } from '@/components/pages/s1/SOneHero'
import { TermSheet } from '@/components/pages/s1/TermSheet'
import { S1Profit } from '@/components/pages/s1/S1Profit'
import { S1Earning } from '@/components/pages/s1/S1Earning'
import { S1Plans } from '@/components/pages/s1/S1Plans'
import { S1Faq } from '@/components/pages/s1/S1Faq'
import { Strategies } from '@/components/Strategies'

const SOnePage = () => {
  return (
    <div className='xs:bg-[right_100px] xxl:bg-size-[800px] xxl:bg-[right_top] ism:bg-size-[70%] bg-[url(/picHero.png)] bg-contain bg-[right_130px] bg-no-repeat sm:bg-size-[80%] sm:bg-[right_100px] md:bg-size-[90%] md:bg-[120px_130px] lg:bg-size-[70%] lg:bg-[right_200px] xl:bg-size-[65%] xl:bg-[right_25px]'>
      <SOneHero />
      <TermSheet />
      <S1Profit />
      <S1Earning />
      <S1Plans />
      <S1Faq />
      <Strategies hide={['s1']} />
    </div>
  )
}

export default SOnePage
