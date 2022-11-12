import './globals.css';
import Header from './components/header';
import Nav from './components/nav';

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      {/*
      
      */}
      <head />
      <body className='bg-slate-500 '>
        <div className='max-w-4xl m-auto items-center justify-center'>
          <div className='h-full  bg-gray-50'>
            <Header />
            {children}
            <Nav />
          </div>
        </div>
      </body>
    </html>
  );
}
