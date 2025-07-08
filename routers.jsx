import { createHashRouter } from "react-router-dom";
import ProductRegistration from "./pages/ProductRegistration";
import StockHome from "./pages/StockHome";
import InputOutputProducts from "./pages/InputOutputProducts";

const router = createHashRouter([
  {
    path: '/',
    element: <StockHome />,
    index: true
  },
  {
    path: '/productRegistration',
    element: <ProductRegistration />
  },
  {
    path: '/inputOutputProducts',
    element: <InputOutputProducts />
  },
])

export default router