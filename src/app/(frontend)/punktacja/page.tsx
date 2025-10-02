import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Header from '@/components/Header'
import Image from 'next/image'

export default function PunktacjaPage() {
  // Przykładowe dane zastępów - w prawdziwej aplikacji pobierane z bazy danych
  const zastepy = [
    {
      id: 1,
      nazwa: 'Zastęp Orłów',
      prowadzacy: 'pwd. Anna Kowalska',
      punkty: 485,
      pozycja: 1,
      ostatnieAkcje: ['Zbiórka żywności', 'Rajd po Kazimierzu', 'Ćwiczenia pionierskie'],
    },
    {
      id: 2,
      nazwa: 'Zastęp Wilków',
      prowadzacy: 'pwd. Piotr Nowak',
      punkty: 442,
      pozycja: 2,
      ostatnieAkcje: ['Sprzątanie parku', 'Konkurs wiedzy harcerskiej', 'Pomoc w domu opieki'],
    },
    {
      id: 3,
      nazwa: 'Zastęp Sokołów',
      prowadzacy: 'pwd. Maria Wiśniewska',
      punkty: 398,
      pozycja: 3,
      ostatnieAkcje: ['Warsztaty survival', 'Turniej sportowy', 'Akcja charytatywna'],
    },
    {
      id: 4,
      nazwa: 'Zastęp Żubrów',
      prowadzacy: 'pwd. Jan Kowalczyk',
      punkty: 367,
      pozycja: 4,
      ostatnieAkcje: ['Wędrówka po Roztoczu', 'Nauka pierwszej pomocy', 'Gra terenowa'],
    },
    {
      id: 5,
      nazwa: 'Zastęp Rysiów',
      prowadzacy: 'pwd. Katarzyna Mazur',
      punkty: 334,
      pozycja: 5,
      ostatnieAkcje: ['Próby na sprawności', 'Obserwacje przyrody', 'Makramowe warsztaty'],
    },
  ]

  const getMedalIcon = (pozycja: number) => {
    switch (pozycja) {
      case 1:
        return '🥇'
      case 2:
        return '🥈'
      case 3:
        return '🥉'
      default:
        return '🏆'
    }
  }

  const getBadgeColor = (pozycja: number) => {
    switch (pozycja) {
      case 1:
        return 'bg-amber-400 text-white'
      case 2:
        return 'bg-amber-800 text-white'
      case 3:
        return 'bg-gray-500 text-white'
      default:
        return 'bg-gray-400 text-white'
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="h-[50svh] flex items-center justify-center shadow-lg relative">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover object-center absolute inset-0 z-0 top-0 bottom-0"
          priority
          quality={100}
        />
        <div className="absolute inset-0 z-0 backdrop-blur-xs" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 bg-clip-text text-transparent mb-4 leading-tight flex justify-center gap-[0.2ch]">
            Punktacja{' '}
            <span className="block text-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              zastępów
            </span>
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground max-w-4xl mx-auto leading-relaxed font-semibold">
            Sprawdź aktulną punktację zastępów drużyny WULKAN. Punkty przyznawane są za udział w
            zbiórkach, akcjach społecznych, zdobywanie sprawności i aktywność harcerską.
          </p>
        </div>
      </section>

      {/* Przejrzysty Ranking Table */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <Card className="py-0">
            <CardContent className="p-0">
              <Table className="rounded-xl overflow-hidden">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16 text-center font-semibold">#</TableHead>
                    <TableHead className="font-semibold">Zastęp</TableHead>
                    <TableHead className="font-semibold">Prowadzący</TableHead>
                    <TableHead className="w-20 text-center font-semibold">Punkty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {zastepy.map((zastep) => (
                    <TableRow
                      key={zastep.id}
                      className={`hover:bg-gray-100 transition-all duration-200 ${
                        zastep.pozycja % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <TableCell className="text-center">
                        <Badge className={`${getBadgeColor(zastep.pozycja)} font-bold`}>
                          {zastep.pozycja}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-blue-900">{zastep.nazwa}</TableCell>
                      <TableCell className="text-gray-700">{zastep.prowadzacy}</TableCell>
                      <TableCell className="text-center font-bold">{zastep.punkty}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
