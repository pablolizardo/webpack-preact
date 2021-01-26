import { h, render } from 'preact'

import { createContext } from "preact";

export const AppContext = createContext()

const AppProvider = ({children}) => {
    const config = { name: 'pablo lizardo', age: 37, email:'plizardo@aerolab.co'}
    return <AppContext.Provider value={config}>
        {children}
    </AppContext.Provider>
}

export default AppProvider