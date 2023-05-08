import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from '@biblia/views/pages/Router'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <GlobalStyle />
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   </React.StrictMode>
)
