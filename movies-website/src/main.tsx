import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './global/styles.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Search from './pages/Search'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Search/:query" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
