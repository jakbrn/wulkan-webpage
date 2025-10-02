import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function PunktacjaPage() {
  const payload = await getPayload({ config })
  const patrols = await payload.find({
    collection: 'patrols',
    sort: '-points',
    limit: 100,
  })

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
          sizes="100vw"
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
                  {patrols.docs.map((patrol, index) => (
                    <TableRow
                      key={patrol.id}
                      className={`hover:bg-gray-100 transition-all duration-200 ${
                        (index + 1) % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <TableCell className="text-center">
                        <Badge className={`${getBadgeColor(index + 1)} font-bold`}>
                          {index + 1}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-blue-900">{patrol.name}</TableCell>
                      <TableCell className="text-gray-700">{patrol.leader}</TableCell>
                      <TableCell className="text-center font-bold">{patrol.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <div className="mt-4">
            <p className="text-sm text-gray-600 italic text-center md:text-left">
              Punktacja zaktualizowana dnia{' '}
              {(() => {
                const timestamps = patrols.docs
                  .map((patrol) => new Date(patrol.updatedAt).getTime())
                  .filter((t) => !isNaN(t))
                if (timestamps.length === 0) return 'brak danych'
                return new Date(Math.max(...timestamps)).toLocaleDateString('pl-PL')
              })()}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
