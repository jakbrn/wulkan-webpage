import { headers as getHeaders } from 'next/headers.js'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'
import Image from 'next/image'

import config from '@/payload.config'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Header from '@/components/Header'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="flex flex-col">
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
        <div className="container mx-auto px-4 text-center z-10">
          <h2 className="text-6xl font-bold mb-8 leading-tight space-x-[0.5ch] text-secondary drop-shadow-2xl drop-shadow-black">
            <span>4</span>
            <span>Lubelska drużyna harcerzy</span>
            <span className="text-7xl block bg-gradient-to-r from-blue-600 via-30% via-blue-700 to-red-600 bg-clip-text text-transparent mt-2">
              WULKAN
            </span>
          </h2>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-4">
              Wulkan w liczbach
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              40 lat tradycji harcerskich w statystykach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Rok założenia */}
            <Card className="backdrop-blur-lg bg-gradient-to-br from-blue-500/90 to-blue-600/90 border border-blue-300/30 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300 text-white">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-3 text-white drop-shadow-lg">1985</div>
                  <div className="text-blue-100 font-medium text-lg">Rok założenia</div>
                </div>
              </CardContent>
            </Card>

            {/* Lata tradycji */}
            <Card className="backdrop-blur-lg bg-gradient-to-br from-red-500/90 to-red-600/90 border border-red-300/30 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300 text-white">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-3 text-white drop-shadow-lg">40</div>
                  <div className="text-red-100 font-medium text-lg">Lat tradycji</div>
                </div>
              </CardContent>
            </Card>

            {/* Drużyna Orla */}
            <Card className="backdrop-blur-lg bg-gradient-to-br from-orange-500/90 to-red-500/90 border border-orange-300/30 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300 text-white">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-3 text-white drop-shadow-lg">4x</div>
                  <div className="text-orange-100 font-medium text-lg">Drużyna Orla</div>
                </div>
              </CardContent>
            </Card>

            {/* Zwycięstwa TDL */}
            <Card className="backdrop-blur-lg bg-gradient-to-br from-purple-500/90 to-blue-600/90 border border-purple-300/30 shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300 text-white">
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="text-5xl font-bold mb-3 text-white drop-shadow-lg">3x</div>
                  <div className="text-purple-100 font-medium text-lg">Drużyna Puszczańska</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Historia */}
            <Card className="hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
              <Link href="/historia" className="block h-full">
                <CardHeader className="flex flex-col items-center gap-2">
                  <span className="bg-gray-100 p-4 rounded-full shadow mb-2 group-hover:scale-110 transition-transform">
                    <svg
                      width={32}
                      height={32}
                      className="text-gray-700"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19 21V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 3v4"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 21h8"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <CardTitle className="text-2xl text-gray-900">Historia</CardTitle>
                  <CardDescription className="text-gray-600">
                    Poznaj dzieje naszej drużyny
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center mt-6">
                  <Badge
                    variant="outline"
                    className="text-lg px-6 py-2 border-gray-300 text-gray-700 bg-white group-hover:bg-gray-100 group-hover:text-primary transition-colors"
                  >
                    Przejdź
                  </Badge>
                </CardContent>
              </Link>
            </Card>

            {/* Punktacja */}
            <Card className="hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
              <Link href="/punktacja" className="block h-full">
                <CardHeader className="flex flex-col items-center gap-2">
                  <span className="bg-gray-100 p-4 rounded-full shadow mb-2 group-hover:scale-110 transition-transform">
                    <svg
                      width={32}
                      height={32}
                      className="text-gray-700"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 20v-6"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="4"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 20h16"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <CardTitle className="text-2xl text-gray-900">Punktacja</CardTitle>
                  <CardDescription className="text-gray-600">
                    Sprawdź aktualne wyniki i zasady
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center mt-6">
                  <Badge
                    variant="outline"
                    className="text-lg px-6 py-2 border-gray-300 text-gray-700 bg-white group-hover:bg-gray-100 group-hover:text-primary transition-colors"
                  >
                    Przejdź
                  </Badge>
                </CardContent>
              </Link>
            </Card>

            {/* 1,5% */}
            <Card className="hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 bg-white">
              <Link href="/jeden-i-pol-procent" className="block h-full">
                <CardHeader className="flex flex-col items-center gap-2">
                  <span className="bg-gray-100 p-4 rounded-full shadow mb-2 group-hover:scale-110 transition-transform">
                    <svg
                      width={32}
                      height={32}
                      className="text-gray-700"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 12h4v4"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <CardTitle className="text-2xl text-gray-900">1,5% podatku</CardTitle>
                  <CardDescription className="text-gray-600">
                    Wesprzyj drużynę swoim podatkiem
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center mt-6">
                  <Badge
                    variant="outline"
                    className="text-lg px-6 py-2 border-gray-300 text-gray-700 bg-white group-hover:bg-gray-100 group-hover:text-primary transition-colors"
                  >
                    Dowiedz się więcej
                  </Badge>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
