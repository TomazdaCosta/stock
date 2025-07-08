import React from 'react'
import { useSelector } from 'react-redux'
import InputComponent from '../components/InputComponent'
import NavStock from '../components/NavStock'
import { StockContext } from '../contexts/StockContext'

const StockHome = () => {
  const {sendProduct, setSendProduct} = React.useContext(StockContext)
  const list = sendProduct === '' ? 'products' : 'filters'
  const stock = useSelector((state) => state.stock[list])

  return (
    <div className='grid lg:grid-cols-[auto_1fr] *:text-blue-950 mb-2'>
      <NavStock />

      <div className='py-4 px-8'>
        <div className='mb-10'>
          <h2 className='text-xl font-bold'>Pesquisa de produto</h2>
        </div>

        <div className='mb-8'>
          <InputComponent labelText='Nome do produto' inputName='searchProductName' inputId='searchProductName' inputType='text' inputValue={sendProduct} setValue={setSendProduct} />
        </div>

        <div className='grid max-h-124 overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='*:bg-blue-900 *:text-blue-50 *:text-start *:px-2 *:py-1 sticky top-0'>
                <th>Produto</th>
                <th>Estoque(und)</th>
                <th>Mercadológico</th>
              </tr>
            </thead>
            <tbody className='*:even:bg-blue-200'>
              {stock.length ? stock.map(product => (
                <tr className='*:text-start *:px-2 *:py-1' key={product.id}>
                  <td>{product.productName}</td>
                  <td>{product.productStock}</td>
                  <td>{product.productMarketing}</td>
                </tr>
              )) : <tr><td>Nenhum produto cadastrado até o momento.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  )
}

export default StockHome
