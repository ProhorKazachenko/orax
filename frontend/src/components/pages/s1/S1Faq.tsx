import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/Card'
import { useTranslations } from 'next-intl'

export const S1Faq = () => {
  const t = useTranslations('s1.FAQ')
  return (
    <section className='section bg-[url("/images/picFAQ.png")] bg-size-[60%] bg-[right_top] bg-no-repeat md:bg-[right_center] lg:bg-size-[40%] xl:bg-size-[25%]'>
      <div className={'container'}>
        <h2 className='subheading'>{t('title')}</h2>
        <div className='flex flex-col gap-2 md:max-w-[480px] lg:max-w-3/4'>
          <Card>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>{t('question1')}</AccordionTrigger>
                <AccordionContent>{t('answer1')}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          <Card>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>{t('question2')}</AccordionTrigger>
                <AccordionContent>{t('answer2')}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          <Card>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>{t('question3')}</AccordionTrigger>
                <AccordionContent>{t('answer3')}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          <Card>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>{t('question4')}</AccordionTrigger>
                <AccordionContent>{t('answer4')}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
          <Card>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>{t('question5')}</AccordionTrigger>
                <AccordionContent>{t('answer5')}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  )
}
