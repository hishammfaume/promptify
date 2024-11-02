import '@styles/globals.css'
import { Children } from 'react';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptify',
  description: 'Discover and share the best prompts for writing, art, and more.'

}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className="name">
                <div className="gradient"/>
            </div>

            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout