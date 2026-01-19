import PageTitle from '@/components/PageTitle';

export const metadata = {
  title: 'Oferta – Jolanta Kwilman',
  description: 'Zakres oferowanych prac - projektowanie wnętrz domów, mieszkań oraz budynków użyteczności publicznej',
};

export default function Oferta() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <PageTitle>Oferta</PageTitle>

      <article className="bg-white px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 shadow-sm">
        <div className="entry-content max-w-[750px] mx-auto">
          <div className="entry mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-5">Zakres oferowanych prac</h2>
            
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm text-foreground font-light">
              <li>wykonuję projekty wnętrz domów, mieszkań oraz budynków użyteczności publicznej</li>
              <li>do projektowania wnętrz wykorzystuję programy architektoniczne, a także wykonuję rysunki odręczne, indywidualnie dla potrzeb klienta</li>
              <li>często projekt rozpoczyna się już na etapie pracy dewelopera (dokonuję zmian układu wnętrza dla potrzeb danego klienta)</li>
              <li>dzięki osiągnięciom najnowszej techniki komunikacji realizuję projekty na terenie całego kraju</li>
              <li>moim klientom oferuję pełną dokumentację projektową, nadzór autorski, współpracę ze sprawdzonymi wykonawcami, pomoc przy zakupie materiałów wykończeniowych/wyposażenia wnętrza</li>
              <li>jeśli zaprojektowanie kompleksowo całego wnętrza nie jest wymagane, proponuję usługę konsultacji projektowej</li>
              <li>oferuję usługę home stagingu – przygotowanie nieruchomości do sprzedaży lub wynajmu</li>
            </ul>
          </div>

          <div className="entry">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-5">Współpracę z klientem traktuję dwu-etapowo:</h2>
            
            <p className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">Sporządzenie dokumentacji projektowej zawierającej następujące pozycje:</p>
            
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm text-foreground font-light mb-4 sm:mb-5">
              <li>rzut techniczny z proponowanymi zmianami</li>
              <li>projekt funkcjonalny (rzut z umeblowaniem)</li>
              <li>projekt punktów elektrycznych</li>
              <li>projekt punktów hydraulicznych i instalacji co</li>
              <li>projekt zabudowy kuchennej – rzut, widoki ścian</li>
              <li>projekt łazienki – rzut, widoki ścian, ułożenie okładzin ściennych i podłogowych</li>
              <li>rzut podłóg</li>
              <li>rzut sufitów podwieszanych</li>
              <li>projekt budowy ścianek gipsowo-kartonowych</li>
              <li>projekt kolorystyczny</li>
              <li>wizualizacje 3D</li>
            </ul>

            <div className="text-sm text-foreground font-light mb-4 sm:mb-5">
              <p className="mb-2">Czynności nie objęte dokumentacją projektową, a stanowiące integralną część projektu:</p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1">
                <li>wskazanie i dobór materiałów wykończeniowych/wyposażenia wnętrze oraz dodatków</li>
                <li>możliwość współpracy z poleconymi wykonawcami</li>
              </ul>
            </div>

            <p className="font-semibold text-foreground mb-4 sm:mb-5 text-sm sm:text-base">
              Nadzór autorski nad projektem oraz pomoc w wyborze i zakupie materiałów wykończeniowych/wyposażenia wnętrza
            </p>

            <div className="text-sm text-foreground font-light">
              <p className="mb-2"><strong>Wykonuję również:</strong></p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-1">
                <li>indywidualne projekty mebli wbudowanych i wolnostojących</li>
                <li>projekt kominków</li>
                <li>projekt dekoracji i detali</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
