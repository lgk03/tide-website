import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Imprint' })

export default function ImprintPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="space-y-8 pt-12 pb-16">
        <h1 className="text-5xl leading-none font-medium tracking-tight text-gray-900 sm:text-6xl dark:text-gray-100">
          Impressum
        </h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Organisation</h2>
          <div className="space-y-1 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <p className="font-semibold">TIDE e.V.</p>
            <p>Vereinsregisternummer: VR 211365</p>
            <p>Adresse: Arcistrasse 21, 80333 München</p>
            <p>Vertreter: Tim Baumeister, Luca Kollmer, Johannes Kirchner, Arthur Gersbacher</p>
            <p>
              Mail:{' '}
              <a
                href="mailto:team@tum-tide.com"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                team@tum-tide.com
              </a>
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Haftung für Inhalte
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
            diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
            wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Haftung für Links
          </h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
            übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
            Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
            Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der
            verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend
            entfernen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Urheberrecht</h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
            nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
            dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
            entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
            Inhalte umgehend entfernen.
          </p>
        </section>
      </div>
    </div>
  )
}
