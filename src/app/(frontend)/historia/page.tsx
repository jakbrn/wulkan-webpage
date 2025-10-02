import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export default function HistoriaPage() {
  const historiaPeriods = [
    {
      title: 'Początki i pierwsze kroki',
      years: 'lata 80.',
      period: '1985-1989',
      color: 'red',
      content: `Korzenie 4 Lubelskiej Drużyny Harcerzy „Wulkan" sięgają początków lat osiemdziesiątych, kiedy to przy parafii Niepokalanego Serca NMP na Poczekajce działała drużyna harcerzy. To od niej obecny „Wulkan" zaczerpnął nazwę, pierwszego drużynowego i kontakty z parafią. 

W 1985 roku bracia Krzysztof i Adam Piekarczykowie założyli nowy „Wulkan", który początkowo działał w oparciu o grupę młodzieży z parafii „Oaza". W tym czasie drużyna nosiła zielone chusty, a w 1987 roku przyjęła brązowy mundur „Zawiszy" i podzieliła się na część żeńską („Tarnina") oraz męską („Wulkan"). Drużynowym został Tomasz Kubiatowski HO.`,
      achievements: [
        'Założenie drużyny przez braci Piekarczyków',
        'Podział na sekcje żeńską i męską',
        'Przyjęcie brązowego munduru Zawiszy',
      ],
    },
    {
      title: 'Rozwój i zmiany w strukturach',
      years: '1989-2002',
      period: '1989-2002',
      color: 'blue',
      content: `W listopadzie 1989 roku drużyna zmieniła mundury na zielone i dołączyła do nowo powstałego Związku Harcerstwa Rzeczypospolitej. Jej drużynowym został pwd. Piotr Nurzyński HO. 

W kolejnych latach z „Wulkanu" wyłoniły się dwie nowe jednostki: 1 Lubelska Gromada Zuchów „Leśni ludzie" oraz 2 Lubelska Drużyna Wędrowników „Wierch". Po odejściu Piotra Nurzyńskiego funkcję drużynowego przejęli pwd. Michał Karnawalski HO, a następnie pwd. Paweł Paluszyński HO i ćw. Karol Stanowski. Ostatecznie w 2004 roku drużynowym został ćw. Michał Dys.`,
      achievements: [
        'Dołączenie do ZHR',
        'Powstanie Gromady Zuchów',
        'Założenie Drużyny Wędrowników',
      ],
    },
    {
      title: 'Kryzysy i reaktywacja',
      years: '2005-2011',
      period: '2005-2011',
      color: 'red',
      content: `W 2005 roku z powodu opuszczenia ZHR przez większość kadry oraz drużynowego, drużyna „Wulkan" została rozwiązana na dwa lata. W międzyczasie działała 12 LDH „Bractwo". 

Dopiero 6 września 2009 roku drużyna „Wulkan" została reaktywowana pod wodzą ćw. Mikołaja Żurka. Działały w niej dwa zastępy: „Vulcanus" i „Prometeusz". W 2010 roku doszło do połączenia sił z „Bractwem", co zaowocowało reaktywacją 4 LDH Wulkan w 2011 roku. Drużyna szybko zaczęła odnosić sukcesy, m.in. w czerwcu 2011 roku zdobyła tytuł Drużyny Orlej, wygrywając Turniej Drużyn Leśnych.`,
      achievements: [
        'Reaktywacja drużyny w 2009',
        'Tytuł Drużyny Orlej w 2011',
        'Zwycięstwo w Turnieju Drużyn Leśnych',
      ],
    },
    {
      title: 'Lata sukcesów i stabilizacji',
      years: '2011-2017',
      period: '2011-2017',
      color: 'blue',
      content: `5 września 2011 roku drużynowym został ćw. Maciej Ruszkowski, a jego przybocznym ćw. Bogdan Słomka. Pod ich wodzą drużyna zdobywała liczne wyróżnienia, m.in. dwa razy zajęła drugie miejsce na TDLach (2012 i 2013) oraz ponownie została Drużyną Orlą w 2014 roku. 

Po Macieju Ruszkowskim funkcję drużynowego objął ćw. Bogdan Słomka, a później, we wrześniu 2015 roku, ćw. Adrian Karaś. Rok 2017 przyniósł kolejne sukcesy, w tym wygranie TDLu w Lubartowie i odzyskanie tytułu Drużyny Orlej.`,
      achievements: [
        'Dwa drugie miejsca na TDL',
        'Tytuł Drużyny Orlej w 2014',
        'Zwycięstwo TDL w Lubartowie 2017',
      ],
    },
    {
      title: 'Nowa kadra i kolejne osiągnięcia',
      years: '2018-2024',
      period: '2018-2024',
      color: 'red',
      content: `W 2018 roku drużynowym został HO Franciszek Lewocki, który doprowadził drużynę do wygranej w TDL w 2019 roku. W październiku 2020 roku funkcję drużynowego ponownie objął pwd. Adrian Karaś HO. 

W tym okresie drużyna zrealizowała swoje długoletnie marzenie, biorąc udział w Turnieju Drużyn Puszczańskich, gdzie zajęła 4. miejsce, potwierdzając swoją wysoką pozycję w harcerskich strukturach. W listopadzie 2024 roku następnym drużynowym został pwd. Filip Jan Dobosz HO. We wrześniu 2024 roku Wulkan zwyciężył na TDL i aspiruje by w kolejnym roku wystąpić na TDP.`,
      achievements: ['Zwycięstwo TDL w 2019', '4. miejsce na TDP', 'Zwycięstwo TDL w 2024'],
    },
  ]

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
          <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 bg-clip-text text-transparent mb-4 leading-tight flex justify-center gap-[0.2ch]">
            Historia
            <span className="block text-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Wulkanu
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground max-w-4xl mx-auto leading-relaxed font-semibold">
            Poznaj 40-letnią historię 4 Lubelskiej Drużyny Harcerzy „Wulkan" im. św. Franciszka
            Ksawerego - od założenia przez braci Piekarczyków po współczesne sukcesy w ZHR.
          </p>
        </div>
      </section>

      {/* Timeline - Modern Historical Periods */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Historia w okresach</h3>
            <p className="text-gray-600">Kluczowe etapy rozwoju drużyny</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {historiaPeriods.map((period, index) => (
              <div key={index} className="relative">
                {/* Timeline line - only show between items, not after last */}
                {index < historiaPeriods.length - 1 && (
                  <div className="hidden md:block absolute left-2 top-15 w-0.5 h-full bg-gray-200 z-0 -translate-x-1/2"></div>
                )}

                <div className="flex items-start gap-6 flex-col md:flex-row">
                  {/* Timeline dot and period info */}
                  <div className="flex-shrink-0 text-center flex items-center gap-2 mt-7 ml-2 md:ml-0">
                    <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                    <div className="text-sm font-medium text-gray-600">{period.period}</div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-gray-800">
                        {period.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2">
                          <div className="space-y-3">
                            {period.content.split('\n\n').map((paragraph, pIndex) => (
                              <p key={pIndex} className="text-gray-700 text-sm leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-800 text-sm">
                            Kluczowe osiągnięcia
                          </h4>
                          <div className="space-y-2">
                            {period.achievements.map((achievement, aIndex) => (
                              <div key={aIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 text-xs leading-relaxed">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drużynowi Timeline */}
      <section className="py-16 relative bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Drużynowi na przestrzeni lat</h3>
            <p className="text-gray-600">Chronologiczny przegląd przywódców Wulkanu</p>
          </div>

          {/* Timeline container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

            <div className="space-y-8">
              {[
                {
                  name: 'Tomasz Kubiatowski HO',
                  period: '1987-1989',
                  description: 'Pierwszy drużynowy po podziale na sekcje',
                },
                {
                  name: 'pwd. Piotr Nurzyński HO',
                  period: '1989-1995',
                  description: 'Wprowadził drużynę do ZHR',
                },
                {
                  name: 'pwd. Michał Karnawalski HO',
                  period: '1995-1998',
                  description: 'Okres rozwoju struktury drużyny',
                },
                {
                  name: 'pwd. Paweł Paluszyński HO',
                  period: '1998-2001',
                  description: 'Kontynuacja rozwoju organizacyjnego',
                },
                {
                  name: 'ćw. Karol Stanowski',
                  period: '2001-2004',
                  description: 'Dalszy rozwój drużyny',
                },
                {
                  name: 'ćw. Michał Dys',
                  period: '2004-2005',
                  description: 'Ostatni drużynowy przed kryzysem',
                },
                {
                  name: 'Przerwa w działalności',
                  period: '2005-2009',
                  description: 'Drużyna rozwiązana, działało "Bractwo"',
                },
                {
                  name: 'ćw. Mikołaj Żurek',
                  period: '2009-2011',
                  description: 'Reaktywacja drużyny, tytuł Drużyny Orlej',
                },
                {
                  name: 'ćw. Maciej Ruszkowski',
                  period: '2011-2013',
                  description: 'Drugie miejsca na TDL (2012, 2013)',
                },
                {
                  name: 'ćw. Bogdan Słomka',
                  period: '2013-2015',
                  description: 'Tytuł Drużyny Orlej w 2014',
                },
                {
                  name: 'ćw. Adrian Karaś',
                  period: '2015-2018',
                  description: 'Zwycięstwo TDL w Lubartowie 2017',
                },
                {
                  name: 'HO Franciszek Lewocki',
                  period: '2018-2020',
                  description: 'Zwycięstwo TDL w 2019',
                },
                {
                  name: 'pwd. Adrian Karaś HO',
                  period: '2020-2024',
                  description: '4. miejsce na TDP, marzenie zrealizowane',
                },
                {
                  name: 'pwd. Filip Jan Dobosz HO',
                  period: '2024-obecnie',
                  description: 'Zwycięstwo TDL 2024, aspiracje do TDP',
                },
              ].map((druzynowy, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className="w-3 h-3 bg-white border-2 border-blue-500 rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                      <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200">
                        <div
                          className={
                            'flex gap-2 items-end ' + (index % 2 === 0 ? 'md:flex-row-reverse' : '')
                          }
                        >
                          <h4 className="font-semibold text-gray-800">{druzynowy.name}</h4>
                          <div className="text-sm text-blue-600 font-medium">
                            {druzynowy.period}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{druzynowy.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
