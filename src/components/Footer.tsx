import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background/20 backdrop-blur-lg shadow p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
        <Image src="/logo.svg" alt="WULKAN Logo" width={40} height={40} className="md:absolute" />
        <div className="flex flex-col gap-2 items-center mx-auto">
          <div>
            <a href="mailto:wulkan.zhr@gmail.com" className="underline">
              wulkan.zhr@gmail.com
            </a>{' '}
            &bull;{' '}
            <a href="tel:699848065" className="underline">
              699 848 065
            </a>
          </div>
          <div className="flex items-center gap-3 text-center">
            <div>
              &copy; {new Date().getFullYear()} Drużyna Harcerska WULKAN. Wszelkie prawa
              zastrzeżone.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
