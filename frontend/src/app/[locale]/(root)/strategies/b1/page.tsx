import { BOneHero } from '@/components/pages/b1/BOneHero'
import { B1Conditions } from '@/components/pages/b1/B1Conditions'
import { B1Product } from '@/components/pages/b1/B1Product'
import { B1TrackRecord } from '@/components/pages/b1/B1TrackRecord'
import { B1Profitability } from '@/components/pages/b1/B1Profitability'
import { B1Glossary } from '@/components/pages/b1/B1Glossary'
import { B1Risks } from '@/components/pages/b1/B1Risks'
import { B1InterestRates } from '@/components/pages/b1/B1InterestRates'
import { Strategies } from '@/components/Strategies'
// TODO: Desktop, TRANSLATION
const BOnePage = () => {
  return (
    <div className='xs:bg-[right_100px] xxl:bg-size-[800px] xxl:bg-[right_top] ism:bg-size-[70%] bg-[url(/picHero.png)] bg-contain bg-[right_130px] bg-no-repeat sm:bg-[right_top] md:bg-size-[90%] md:bg-[right_130px] lg:bg-size-[80%] xl:bg-size-[65%] xl:bg-[right_top]'>
      <BOneHero />
      <B1Conditions />
      <B1Product />
      <B1TrackRecord />
      <B1Profitability />
      <B1Glossary />
      <B1Risks />
      <B1InterestRates />
      <Strategies hide={['b1']} />
    </div>
  )
}

export default BOnePage
