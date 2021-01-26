import { h , render } from 'preact'
import { useContext } from 'preact/hooks'
import { AppContext } from './context'

const Footer = () => {
    const {name} = useContext(AppContext)
    return <footer>
        {name}
    </footer>
}
export default Footer