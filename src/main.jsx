import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import Filme from './Filme.jsx'

const paginas = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/filme/:id', element: <Filme /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={paginas}></RouterProvider>,
)
