import { MainHero } from '@/components/pages/mainpage/MainHero'
import { Strategies } from '@/components/Strategies'
import { PortfolioManagement } from '@/components/pages/mainpage/PortfolioManagement'
import { PortfolioRiskRating } from '@/components/pages/mainpage/PortfolioRiskRating'
import { AvoidRisks } from '@/components/pages/mainpage/AvoidRisks'
import { HowMakeMoney } from '@/components/pages/mainpage/HowMakeMoney'

export default function Home() {
  return (
    <div className='xs:bg-[right_100px] xxl:bg-size-[800px] xxl:bg-[right_top] bg-[url(/picHero.png)] bg-contain bg-[right_250px] bg-no-repeat sm:bg-size-[90%] sm:bg-[130px_50px] md:bg-contain md:bg-[right_top] lg:bg-size-[80%] xl:bg-size-[65%]'>
      <MainHero />
      <Strategies />
      <PortfolioManagement />
      <PortfolioRiskRating />
      <AvoidRisks />
      <HowMakeMoney />
    </div>
  )
}
