import Image from 'next/image'
import table1 from '@/assets/image/documents/table 1 pl.svg'
import table2 from '@/assets/image/documents/table 2 pl.svg'
import table3 from '@/assets/image/documents/table 3 pl.svg'
import table4 from '@/assets/image/documents/table 4 pl.svg'
import table5 from '@/assets/image/documents/table 5 pl.svg'
import table6 from '@/assets/image/documents/table 6 pl.svg'

export const RiskAssesmentPl = () => {
  return (
    <div className={'longText'}>
      <h2>Ocena ryzyka i polityka apetytu na ryzyko</h2>
      <h4>Ocena ryzyka</h4>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>Wstęp</p>
      <p>
        Ocena ryzyka to dokument, który określa kryteria i działania niezbędne do proaktywnej
        identyfikacji i rozwiązywania ryzyka prania pieniędzy i finansowania terroryzmu w
        Coinrate.pro Asset Management LLC.
      </p>
      <p>
        Choć uznaje się, że ryzyka nigdy nie da się wyeliminować, skuteczna identyfikacja ryzyka
        powiązana z należytą starannością klienta powinna zmniejszyć ryzyko, że przestępcy
        wykorzystają Coinrate.pro Asset Management LLC do działań przestępczych, zwłaszcza
        związanych z praniem pieniędzy i finansowaniem terroryzmu.
      </p>
      <p>
        Ta ocena ryzyka identyfikuje ryzyko, ocenia zakres ryzyka i ustala kryteria określania
        profilu ryzyka klienta. Procedura AML ustala działania, które należy podjąć w celu
        zmniejszenia zidentyfikowanych ryzyk, zgodnie z profilem ryzyka każdego klienta.
      </p>
      <p>
        Niniejsza ocena ryzyka jest zgodna z ustawą Saint Vincent i Grenadyny o dochodach z
        przestępstw z 2013 r., przepisami dotyczącymi przeciwdziałania praniu pieniędzy i
        finansowaniu terroryzmu z 2014 r., ustawą o przeciwdziałaniu finansowaniu terroryzmu i
        proliferacji z 2015 r., kodeksem przeciwdziałania praniu pieniędzy i finansowaniu terroryzmu
        z 2017 r., ustawą Organizacji Narodów Zjednoczonych (środki antyterrorystyczne), rozdziałem
        183 zmienionych ustaw z 2009 r., wytycznymi dotyczącymi zapobiegania praniu pieniędzy oraz
        innymi stosownymi przepisami i regulacjami SVG.
      </p>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>Kategorie ryzyka</p>
      <p>
        W celu identyfikacji, oceny i analizy ryzyka prania pieniędzy i finansowania terroryzmu
        związanego ze swoją działalnością Coinrate.pro Asset Management LLC bierze pod uwagę
        następujące kategorie ryzyka:
      </p>
      <p>
        a) ryzyka związane z klientami;
        <br />
        b) ryzyka związane z krajami, obszarami geograficznymi lub jurysdykcjami;
        <br />
        c) ryzyka związane z produktami, usługami lub transakcjami;
        <br />
        d) ryzyko związane z komunikacją, mediacją lub produktami, usługami, transakcjami lub
        kanałami dostaw pomiędzy podmiotem zobowiązanym a klientami.
      </p>
      <p>
        Coinrate.pro Asset Management LLC identyfikuje i ocenia ryzyka, które są istotne w
        kontekście modelu biznesowego Coinrate.pro Asset Management LLC w kategoriach określonych w
        Ustawie.
      </p>
      <p>a) Ryzyka związane z klientami Coinrate.pro Asset Management LLC</p>
      <Image src={table1} alt={'table 1'} className={'h-auto w-full'} />
      <p>b) Ryzyka związane z krajami, obszarami geograficznymi lub jurysdykcjami</p>
      <Image src={table2} alt={'table 2'} className={'h-auto w-full'} />
      <p>c) Ryzyka związane z produktami, usługami lub transakcjami</p>
      <Image src={table3} alt={'table 3'} className={'h-auto w-full'} />
      <p className={'font-heading text-active font-extrabold md:text-lg'}>Matryca ryzyka</p>
      <p>
        „Prawdopodobieństwo” wystąpienia czynnika ryzyka podzielone jest na 5-stopniową skalę
        obejmującą „Bardzo mało prawdopodobne wystąpienie”, „Mało prawdopodobne wystąpienie”, „Może
        wystąpić”, „Prawdopodobne wystąpienie” i „Prawie pewne wystąpienie”.
      </p>
      <p>
        a) Bardzo mało prawdopodobne: Prawdopodobieństwo wystąpienia zdarzenia jest mniejsze niż
        10%;
        <br />
        b) Mało prawdopodobne: prawdopodobieństwo wystąpienia zdarzenia wynosi od 10% do 35%;
        <br />
        c) Może się zdarzyć: prawdopodobieństwo wystąpienia 35% do 60%;
        <br />
        d) Prawdopodobieństwo wystąpienia: 60% do 90% szansy wystąpienia;
        <br />
        e) Prawie pewne wystąpienie: Ponad 90% szans na wystąpienie.
      </p>
      <p>
        „Wpływ” czynnika ryzyka jest również podzielony na 5-stopniową skalę, obejmującą wpływ
        „Znikomy”, „Nieznaczny”, „Umiarkowany”, „Istotny” i „Ekstremalny”.
      </p>
      <p>a) Nieistotny</p>
      <ul className='list-inside list-disc'>
        <li>Strata finansowa do 10 000 USD</li>
        <li>Zgłaszane do organu regulacyjnego</li>
        <li>Niezadowolenie personelu ogólnego</li>
      </ul>
      <p>b) Umiarkowane</p>
      <ul className='list-inside list-disc'>
        <li>Strata finansowa od 50 001 USD do 100 000 USD</li>
        <li>Krajowe krótkoterminowe relacje w mediach</li>
        <li>
          Należy zgłosić to organowi regulacyjnemu i potencjalnie wymagać zmiany wewnętrznych
          procesów
        </li>
        <li>Część personelu może zdecydować się na odejście</li>
      </ul>
      <p>c) Majorze</p>
      <ul className='list-inside list-disc'>
        <li>Strata finansowa od 100 001 USD do 300 000 USD</li>
        <li>Długoterminowe ogólnokrajowe relacje w mediach</li>
        <li>
          Wymaga zgłoszenia do organu regulacyjnego i pewna potrzeba zmiany procesów wewnętrznych
        </li>
        <li>Wykwalifikowany personel może zdecydować się na odejście</li>
      </ul>
      <p>e) Ekstremalne</p>
      <ul className='list-inside list-disc'>
        <li>Strata finansowa przekraczająca 300 001 USD</li>
        <li>Relacje w mediach międzynarodowych</li>
        <li>
          Działania te skutkują karami finansowymi nałożonymi przez Organ Regulacyjny i mogą
          potencjalnie prowadzić do różnych sporów sądowych
        </li>
      </ul>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>Ocena ryzyka (tabele)</p>
      <Image src={table4} alt={'scoring table'} className={'h-auto w-full'} />
      <Image src={table5} alt={'scoring legend'} className={'h-auto w-full'} />
      <p>
        a) Ryzyka ocenione na skali 1-5: są uważane za niskie ryzyko i dlatego są tolerowane przez
        Coinrate.pro Asset Management LLC. Działanie: Akceptacja ryzyka, tj. nie robienie nic
        (Tolerowanie)
        <br />
        b) Ryzyka ocenione na 6-8: są uważane za ryzyka umiarkowane i należy nimi zarządzać, aby
        były jak najniższe. Działanie: Kontynuuj działanie, ale aktywnie pracuj nad łagodzeniem
        ryzyka (leczenie).
        <br />
        c) Ryzyka oznaczone punktami od 9 do 12 są uważane za wysokie. Ryzyka te muszą być
        rozpatrywane, tzn. należy opracować i wdrożyć plan działania, który będzie miał na celu
        zmniejszenie potencjalnego wpływu ryzyka (tzn. obniżenie punktacji ryzyka). Działanie:
        Przeniesienie ryzyka, np. zlecenie go innej organizacji (transfer).
        <br />
        d) Ryzyka ocenione na 15-25 punktów są uważane za ryzyka ekstremalne. Ryzyka te muszą być
        traktowane, tzn. należy opracować i wdrożyć plan działania, który będzie miał na celu
        zmniejszenie potencjalnego wpływu ryzyka (tzn. obniżenie wyniku ryzyka). Ryzyka te zostaną
        dodane do rejestru ryzyka i zostaną poddane przeglądowi. Działanie: Preferowanym działaniem
        jest zatrzymanie działalności, ponieważ jest ona zbyt ryzykowna. Jeśli w wyjątkowych
        okolicznościach Zarząd może skutecznie i znacząco złagodzić ryzyko, wówczas nowe,
        zmniejszone ryzyko może zostać zaakceptowane (Zakończenie).
      </p>

      <h4>Apetyt na ryzyko</h4>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>Wstęp</p>
      <p>
        Apetyt na ryzyko wraz z oceną ryzyka ustanawia podejście, poprzez które apetyt na ryzyko
        jest ustalany, komunikowany i monitorowany, w tym oświadczenie o apetycie na ryzyko, progi
        ryzyka i limity dla istotnych ryzyk oraz zarys ról i obowiązków osób nadzorujących wdrażanie
        i monitorowanie apetytu na ryzyko Coinrate.pro Asset Management LLC.
      </p>
      <p>
        Apetyt na ryzyko stanowi podstawę zasad zarządzania ryzykiem i działań związanych z
        podejmowaniem ryzyka oraz ustanawia wizję i strategię ryzyka, które Coinrate.pro Asset
        Management LLC jest gotowe zaakceptować i zarządzać w celu realizacji swoich celów
        biznesowych.
      </p>
      <p>
        Celem apetytu na ryzyko jest ustanowienie odpowiednich i spójnych powiązań między strategią
        biznesową Coinrate.pro Asset Management LLC, strategią ryzyka i środkami ograniczającymi
        ryzyko. Apetyt na ryzyko opiera się na strategii Coinrate.pro Asset Management LLC.
      </p>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>
        Opracowanie, zatwierdzenie i utrzymanie Apetytu na Ryzyko
      </p>
      <p>
        Apetyt na ryzyko jest zatwierdzany przez Zarząd. Apetyt na ryzyko będzie następnie
        weryfikowany co najmniej raz w roku, biorąc pod uwagę zmiany w obowiązujących przepisach i
        regulacjach oraz plany strategiczne Coinrate.pro Asset Management LLC. W przypadku zmian w
        obowiązujących przepisach i regulacjach apetyt na ryzyko zostanie zmieniony tak szybko, jak
        to możliwe lub w ramach czasowych obowiązywania nowych wymogów.
      </p>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>Definicje</p>
      <p>
        ««Apetyt na ryzyko» oznacza łączny poziom i rodzaje ryzyka, które Coinrate.pro Asset
        Management LLC jest skłonne przyjąć w ramach swoich możliwości podejmowania ryzyka, zgodnie
        ze swoim modelem biznesowym, aby osiągnąć swoje cele strategiczne.
      </p>
      <p>
        «Możliwość podejmowania ryzyka» oznacza maksymalny poziom ryzyka, jakie Coinrate.pro Asset
        Management LLC jest w stanie przyjąć, biorąc pod uwagę swoją bazę kapitałową, możliwości
        zarządzania ryzykiem i kontroli oraz ograniczenia regulacyjne. Możliwość podejmowania ryzyka
        oznacza maksymalny poziom ryzyka, jakie Coinrate.pro Asset Management LLC może przyjąć,
        biorąc pod uwagę swój obecny poziom zasobów przed naruszeniem ograniczeń określonych przez
        potrzeby kapitału regulacyjnego i płynności, środowisko operacyjne (np. infrastruktura
        techniczna, możliwości zarządzania ryzykiem, wiedza specjalistyczna) oraz zobowiązania wobec
        deponentów, akcjonariuszy, inwestorów o stałym dochodzie, a także innych klientów.
      </p>
      <p>
        «Profil ryzyka» oznacza ocenę w czasie brutto i, w stosownych przypadkach, netto narażenia
        na ryzyko Coinrate.pro Asset Management LLC (po uwzględnieniu wszelkich czynników
        łagodzących) zagregowanych w obrębie i pomiędzy każdą odpowiednią kategorią ryzyka w oparciu
        o założenia dotyczące przyszłości.
      </p>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>Oświadczenie ogólne</p>
      <p>a) Wizja Coinrate.pro Asset Management LLC</p>
      <p>
        Ogólne podejście Coinrate.pro Asset Management LLC do ryzyka charakteryzuje się tolerancją
        ryzyka związanego z misją i wizją oraz niechęcią do podejmowania wszelkich innych ryzyk.
      </p>
      <p>b) Klienci Coinrate.pro Asset Management LLC</p>
      <p>
        Coinrate.pro Asset Management LLC nie nawiązuje relacji biznesowych z osobami o
        następujących cechach:
      </p>
      <ul className='list-inside list-disc'>
        <li>Obywatele lub rezydenci krajów wysokiego ryzyka / krajów objętych zakazem;</li>
        <li>
          Uzyskanie dalszych stosownych informacji dotyczących historii klienta Coinrate.pro Asset
          Management LLC;
        </li>
        <li>
          Żądanie stosownych informacji finansowych, takich jak sprawozdania finansowe, źródło
          opieki zdrowotnej/środków finansowych, wartość netto lub podobne;
        </li>
        <li>
          Uzyskanie bardziej szczegółowych informacji o źródle i strukturze majątku klienta
          Coinrate.pro Asset Management LLC
        </li>
        <li>Przeprowadzanie przeszukiwań Internetu i mediów.</li>
      </ul>
      <p>Ryzyko operacyjne:</p>
      <p>
        a) Ryzyko operacyjne Coinrate.pro Asset Management LLC wynika z ryzyka straty wynikającej z
        nieodpowiednich lub wadliwych procesów wewnętrznych, ludzi i systemów lub ze zdarzeń
        zewnętrznych. Ze względu na planowane działania ryzyko operacyjne jest jednym z
        najistotniejszych ryzyk dla Coinrate.pro Asset Management LLC.
      </p>
      <p className={'font-heading text-active font-extrabold md:text-lg'}>
        Kluczowe elementy ram apetytu na ryzyko
      </p>
      <p>
        Zarząd ustala ogólne zasady i apetyt na ryzyko poprzez zatwierdzenie niniejszego
        oświadczenia o apetycie na ryzyko oraz innych wewnętrznych dokumentów i strategii, a także
        ich regularną rewizję, biorąc pod uwagę między innymi zmiany w działalności i środowisku
        operacyjnym lub strategii Coinrate.pro Asset Management LLC.
      </p>
      <p>
        Ostateczna odpowiedzialność za właściwe zarządzanie apetytem na ryzyko i profilem ryzyka
        spoczywa na Zarządzie i musi on przestrzegać następujących warunków:
      </p>
      <ul className='list-inside list-disc'>
        <li>
          Ramy apetytu na ryzyko powinny uwzględniać wszystkie istotne ryzyka, na które narażona
          jest spółka Coinrate.pro Asset Management LLC, a Zarząd powinien ustalić limity,
          tolerancję i progi ryzyka dla wszystkich ryzyk uznawanych za istotne;
        </li>
        <li>
          Apetyt na ryzyko i strategia podejmowania ryzyka są spójne i wdrażane w odpowiedni sposób;
        </li>
        <li>
          Ramy apetytu na ryzyko są zorientowane na przyszłość i zgodne z horyzontem planowania
          strategicznego, a także podlegają regularnemu przeglądowi;
        </li>
        <li>
          Strategia ryzyka odpowiednio uwzględnia zasoby finansowe Coinrate.pro Asset Management
          LLC;
        </li>
        <li>Akceptacja ryzyka jest dokumentowana w formie pisemnej;</li>
        <li>
          Pracownicy Coinrate.pro Asset Management LLC są informowani o skłonności do podejmowania
          ryzyka.
        </li>
      </ul>
      <p>
        Zarząd jest odpowiedzialny za wprowadzenie procedur do Coinrate.pro Asset Management LLC,
        które opierają się na solidnych praktykach zarządzania źródłami i wymogach, aby zapewnić
        przestrzeganie procedur oraz zapewnić monitorowanie i zgodność z apetytem na ryzyko.
      </p>
      <p>
        Zarządzanie ryzykiem monitoruje profil ryzyka za pomocą wewnętrznych procedur opracowanych i
        wdrożonych przez Zarząd.
      </p>
      <p>Załącznik 1 Skala apetytu na ryzyko</p>
      <Image src={table6} alt={'table 6'} className={'h-auto w-full'} />
    </div>
  )
}
