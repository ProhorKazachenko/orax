import { Team } from '@/components/Team'
import { ContactForm } from '@/components/ContactForm'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className={''}>
      {children}
      <Team />
      <ContactForm />
    </div>
  )
}
