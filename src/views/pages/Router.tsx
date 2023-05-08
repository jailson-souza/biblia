import { Routes, Route } from 'react-router-dom'
import App from './App'

export default function Router() {
   return (
      <Routes>
         <Route index Component={App} />
      </Routes>
   )
}
