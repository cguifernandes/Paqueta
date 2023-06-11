import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import { ReactNode } from 'react';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <html lang='pt-br'>
      <body>
        <Toaster />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default Layout;