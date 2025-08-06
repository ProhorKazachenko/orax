import { AOneHero } from '@/components/pages/a1/AOneHero'
import { A1Description } from '@/components/pages/a1/A1Description'
import { A1Comparison } from '@/components/pages/a1/A1Comparison'
import { A1PortfolioStrategy } from '@/components/pages/a1/A1PortfolioStrategy'
import { Strategies } from '@/components/Strategies'

// TODO: Mobile no translation
const AOnePage = () => {
  return (
    <div className='xs:bg-[right_100px] xxl:bg-size-[800px] xxl:bg-[right_top] ism:bg-size-[70%] bg-[url(/picHero.png)] bg-contain bg-[right_130px] bg-no-repeat sm:bg-size-[80%] sm:bg-[right_100px] md:bg-size-[90%] md:bg-[120px_130px] lg:bg-size-[70%] lg:bg-[right_200px] xl:bg-size-[65%] xl:bg-[right_25px]'>
      <AOneHero />
      <A1Description />
      <A1Comparison />
      <A1PortfolioStrategy />
      <Strategies hide={['a1']} />
    </div>
  )
}

export default AOnePage
