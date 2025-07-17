import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('/api/todos')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setTodos(data)
            })
            .catch((err) => console.error('API fetch error:', err))
    }, [])

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>

            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.desc} - {todo.completed ? '✅' : '❌'}</li>
                ))}
            </ul>
        </>
    )
}

export default App
