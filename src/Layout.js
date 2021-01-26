import { h, render } from 'preact'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div id='container'>
            <header>
                This is the header
            </header>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
