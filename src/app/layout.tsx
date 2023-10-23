import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shep Shope',
  description: 'the best place to buy whatever you imagine',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main className='p-4 max-w-7xl min-w-[300px] m-auto'>
        {children}
      </main>
        </body>
    </html>
  )
}
