
import { StockContextProvider } from './Contexts/StockContext'
import Router from './Router'
import {RouterProvider } from 'react-router-dom'


function App() {

  return <StockContextProvider>
            <RouterProvider router= {Router}/>
          </StockContextProvider>
  
  
}

export default App
