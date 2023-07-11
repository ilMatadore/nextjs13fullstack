import { ThemeProvider } from '@/context/ThemeContext'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from '@/components/AuthProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJs 13 Project',
  description: 'NextJs 13 Project description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
                {children}
              <Footer />
            </div>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
