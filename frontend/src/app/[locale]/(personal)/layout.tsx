export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={
        'flex min-h-[calc(100dvh-46px)] flex-col items-stretch bg-[url(/picHero.png)] bg-contain bg-[right_calc(100%+120px)] bg-no-repeat'
      }
    >
      {children}
    </div>
  )
}
