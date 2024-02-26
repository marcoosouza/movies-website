import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Movies from './pages/Movies'
import { GlobalStyle } from './global/styles.tsx'
import Home from './pages/Home.tsx'
import Search from './pages/Search.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/movies",
    element: <Movies></Movies>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
