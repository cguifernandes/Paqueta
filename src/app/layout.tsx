import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import { ReactNode } from 'react';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import { ContextStoraged } from '@/hooks/localStorage';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <html lang='pt-br'>
      <body>
        <ContextStoraged>
          <Toaster />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ContextStoraged>
      </body>
    </html>
  )
}

export default Layout;