import { MarketHero } from '@/components/pages/market/MarketHero'
import { MarketResults } from '@/components/pages/market/MarketResults'
import { MarketAiMaking } from '@/components/pages/market/MarketAiMaking'
import { MarketStudyCases } from '@/components/pages/market/MarketStudyCases'
import { MarketIngredients } from '@/components/pages/market/MarketIngredients'
import { MarketBenefits } from '@/components/pages/market/MarketBenefits'
import { MarketExchanges } from '@/components/pages/market/MarketExchanges'
import { MarketCryptoLiquidity } from '@/components/pages/market/MarketCryptoLiquidity'
import { MarketIntegration } from '@/components/pages/market/MarketIntegration'

export default function MarketPage() {
  return (
    <div className='xs:bg-[right_100px] ixs:bg-[right_150px] xxl:bg-size-[800px] xxl:bg-[right_top] bg-[url(/picHero.png)] bg-contain bg-[right_250px] bg-no-repeat sm:bg-size-[90%] sm:bg-[130px_100px] md:bg-contain md:bg-[right_top] lg:bg-size-[80%] xl:bg-size-[65%]'>
      <MarketHero />
      <MarketResults />
      <MarketAiMaking />
      <MarketStudyCases />
      <MarketIngredients />
      <MarketBenefits />
      <MarketExchanges />
      <MarketCryptoLiquidity />
      <MarketIntegration />
    </div>
  )
}
