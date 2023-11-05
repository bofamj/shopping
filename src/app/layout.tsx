import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './nav-bar/NavBar'
import Footer from './footer'

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
        <NavBar />

        <main className=" mt-40 min-w-[300px] max-w-7xl  px-20 pt-10 md:mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
