import Footer from '@/components/Footer/footer';
import Header from '@/components/Header/header';
import { ReactNode } from 'react';
import '../styles/globals.css';

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children } : LayoutProps) => {
  return (
    <html lang='pt-br'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default Layout;