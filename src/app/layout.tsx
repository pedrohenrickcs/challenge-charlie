import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Challenge Charlie</title>
        <meta name="Challenge Charlie" content="Criado por Pedro Henrick" />
      </head>
      <body className={inter.className}>
        <div className="container mx-auto px-4 m-4">{children}</div>
      </body>
    </html>
  )
}
