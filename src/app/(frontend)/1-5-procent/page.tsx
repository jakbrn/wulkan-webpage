import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function OneFivePercentPage() {
  return (
    <div className="flex flex-col">
      <section className="h-[50svh] flex items-center justify-center shadow-lg relative">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center absolute inset-0 z-0 top-0 bottom-0"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 z-0 backdrop-blur-xs" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Przekaż <span className="text-blue-600">1,5%</span> podatku
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground max-w-4xl mx-auto leading-relaxed font-semibold">
            Możesz wesprzeć działalność drużyny harcerskiej WULKAN przekazując 1,5% swojego podatku
            dochodowego. To nic Cię nie kosztuje, a nam bardzo pomaga!
          </p>
        </div>
      </section>

      {/* Instrukcja */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Jak przekazać 1,5% podatku?</h3>
            <p className="text-gray-600">Postępuj zgodnie z poniższą instrukcją</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">1</span>
                  </div>
                  <CardTitle className="text-xl">Pobierz formularz</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Pobierz formularz PIT-OP z urzędu skarbowego lub skorzystaj z e-PIT.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">2</span>
                  </div>
                  <CardTitle className="text-xl">Wypełnij dane</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Wpisz numer KRS organizacji oraz kwotę odpowiadającą 1,5% Twojego podatku.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200 shadow-sm">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">3</span>
                  </div>
                  <CardTitle className="text-xl">Złóż deklarację</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    Złóż wypełnioną deklarację podatkową do 30 kwietnia następnego roku.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Dane organizacji */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">Dane organizacji</CardTitle>
                  <CardDescription>Wpisz te dane w formularzu PIT-OP</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="text-sm font-medium text-gray-500">Nazwa organizacji:</label>
                    <p className="font-semibold text-gray-800">
                      Związek Harcerstwa Rzeczypospolitej
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="text-sm font-medium text-gray-500">Numer KRS:</label>
                    <p className="font-bold text-gray-800 text-xl">0000 XXX XXX</p>
                    <p className="text-sm text-gray-600 mt-1">
                      *Aktualny numer KRS - skontaktuj się z drużyną
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <label className="text-sm font-medium text-gray-500">Cel szczegółowy:</label>
                    <p className="font-semibold text-gray-800">Drużyna Harcerska WULKAN - Lublin</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-800">
                    Na co przeznaczymy środki?
                  </CardTitle>
                  <CardDescription>Twoje wsparcie pomoże nam w działalności</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🏕️</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">Obozy i biwaki</h5>
                      <p className="text-gray-600 text-sm">
                        Organizacja letnich i zimowych obozów harcerskich
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎒</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">Sprzęt harcerski</h5>
                      <p className="text-gray-600 text-sm">
                        Zakup mundurów, sprzętu turystycznego i pionierskiego
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <h5 className="font-semibold text-gray-800">Nagrody</h5>
                      <p className="text-gray-600 text-sm">
                        Zakup nagród dla zwycięzców wyjazdów i punktacji zastępów
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
