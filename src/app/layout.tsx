import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <title>Challenge Charlie</title>
      <meta name="Challenge Charlie" content="Criado por Pedro Henrick" />
      <div className={`${inter.className} container mx-auto px-4 m-4`}>
        {children}
      </div>
    </>
  )
}
