import React from 'react'
import NavStock from '../components/NavStock'
import { useSelector } from 'react-redux'
import ProductInputOutput from '../components/ProductInputOutput'
import { StockContext } from '../contexts/StockContext'

const InputOutputProducts = () => {
  const {sendInput, sendOutput} = React.useContext(StockContext)
  const stock = useSelector((state) => state.stock.products)

  return (
    <div className='grid lg:grid-cols-[auto_1fr]'>

      <NavStock />

      <div className='py-4 px-8'>
        <div className='mb-10'>
          <h2 className='text-xl font-bold'>Entrada e Saída de produtos</h2>
        </div>

        <div className='grid max-h-146 overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='*:bg-blue-900 *:text-blue-50 *:text-start *:px-2 *:py-1 sticky top-0'>
                <th>Produto</th>
                <th>Estoque(und)</th>
                <th>Mercadológico</th>
                <th>Entrada</th>
                <th>Saída</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className='*:even:bg-blue-200'>
              {stock.length ? stock.map(product => (
                <tr className='*:text-start *:px-2 *:py-1' key={product.id}>
                  <ProductInputOutput id={product.id} productName={product.productName} productStock={product.productStock} productMarketing={product.productMarketing} funcSendInput={sendInput} funcSendOutput={sendOutput} />
                </tr>   
              )): <tr><td>Nenhum produto cadastrado até o momento.</td></tr>}
            </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default InputOutputProducts
