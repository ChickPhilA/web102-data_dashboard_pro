import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router"
import './index.css'

import App from './App.jsx'
import Layout from './routes/Layout.jsx'
import About from './routes/About.jsx'
import DetailedView from './routes/DetailedView.jsx'
import NotFound from './routes/NotFound.jsx'

createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <Routes>
    {/* In this nested Route below, all child routes will have the layout present in each page. */}
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="pubDetails/:id" element={<DetailedView/>} />
    </Route>
    <Route path="*" element={ <NotFound /> } />
  </Routes>
</BrowserRouter>
)
