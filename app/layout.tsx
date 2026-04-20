import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Aqareo',
  description: 'Luxury UAE real estate website concept'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
