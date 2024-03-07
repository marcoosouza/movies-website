import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './global/styles.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Search from './pages/Search.tsx'
import MovieInfo from './pages/MovieInfo.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:genre/:page" element={<Movies />} />
        <Route path="/search/:keyword" element={<Search />} />
        <Route path="/movie/:name/" element={<MovieInfo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
