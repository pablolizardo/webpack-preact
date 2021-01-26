import {h, render} from 'preact'

import {useState, useEffect} from 'preact/hooks'
import './index.scss'


const Counter = () => {
    const [counter, setCounter ] = useState(JSON.parse(localStorage.getItem('preact-counter')) || 0) 
    const add = () => { setCounter( counter => counter += 1 ) }
    useEffect(() => {
        counter && localStorage.setItem('preact-counter',counter)
    }, [counter])
    return <div>
        <h1>{counter}</h1>
        <button onClick={add}>+</button>
    </div>
}

export default Counter;