import { StockContextProvider } from './contexts/StockContextProvider'
import { RouterProvider } from 'react-router-dom'
import router from './routers'

const App = () => {
  return (
    <StockContextProvider>
      <RouterProvider router={router}/>
    </StockContextProvider>
  )
}

export default App
