import { h, render } from 'preact'

import { useState, useEffect } from 'preact/hooks'
import AppProvider from './context'
import Counter from './Counter'
import './index.scss'
import Layout from './Layout'


const App = () => {
    return <AppProvider><Layout>
        <Counter />
    </Layout>
    </AppProvider>
}

export default App;