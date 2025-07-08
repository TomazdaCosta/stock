import React from 'react'
import { StockContext } from '../contexts/StockContext'
import { useSelector } from 'react-redux'
import InputComponent from '../components/InputComponent'
import PorductComponent from '../components/porductComponent'
import NavStock from '../components/NavStock'

const ProductRegistration = () => {
  const {productName, setProductName, productStock, setProductStock, sendNewProduct, productMarketing, setProductMarketing, removeProductSelected, editProductStock, setEditProductStock, sendNewProductStock} = React.useContext(StockContext)
  const stock = useSelector((state) => state.stock.products)

  return (
    <div className='grid lg:grid-cols-[auto_1fr]'>

      <NavStock />

      <div className='py-4 px-8'>
        <div className='mb-10'>
          <h2 className='text-xl font-bold'>Cadastro de produtos</h2>
        </div>

        <div className='mb-8'>
          <form className='grid grid-cols-2 *:mb-4' onSubmit={(ev) => sendNewProduct(ev)}>

            <InputComponent labelText={'Nome do produto'} inputId={'productName'} inputName={'productName'} inputType={'text'} inputValue={productName} setValue={setProductName} required />

            <InputComponent labelText={'Quantidade'} inputId={'productStock'} inputName={'productStock'} inputType={'number'} inputValue={productStock} setValue={setProductStock} required />

            <div className='*:block'>
              <label className='mb-1 w-max' htmlFor="productMarketing">Mercadológico</label>
              <select
                className='block bg-gray-50 border border-blue-200 px-1 py-1 mb-4 rounded-md'
                name="productMarketing"
                id="productMarketing"
                required
                value={productMarketing}
                onChange={({target}) => setProductMarketing(target.value)}
              >
                <option disabled></option>
                <option value="cereais">Cereais</option>
                <option value="hotifruti">Horti fruti</option>
                <option value="frios">Frios</option>
                <option value="frigorífico">Frigorífico</option>
                <option value="mercearia">Mercearia</option>
                <option value="padaria">Padaria</option>
                <option value="lightDiet">Light/Diet</option>
                <option value="liquida">Mercearia Líquida</option>
                <option value="bazar">Bazar</option>
                <option value="limpeza">Limpeza</option>
                <option value="perfumaria">Perfumaria</option>
              </select>

              <button className='bg-blue-300 hover:bg-blue-400 hover:cursor-pointer p-2 rounded-md' type="submit">Cadastrar</button>
            </div>
          </form>  
        </div>
        
        <div className='grid max-h-86 overflow-y-auto'>
          <table className='w-full'>
            <thead>
              <tr className='*:bg-blue-900 *:text-blue-50 *:text-start *:px-2 *:py-1 sticky top-0'>
                <th>Produto</th>
                <th>Estoque(und)</th>
                <th>Mercadológico</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody className='*:even:bg-blue-200'>
              {stock.length ? stock.map(product => (
                <tr className='*:text-start *:px-2 *:py-1' key={product.id}>
                  <PorductComponent productName={product.productName} productStock={product.productStock} id={product.id} productMarketing={product.productMarketing} editProduct={editProductStock} funcEdit={setEditProductStock} funcRemoveProductSelected={removeProductSelected} funcSendNewProductStock={sendNewProductStock} />
                </tr>
              )) : <tr><td>Nenhum produto cadasrtrado até o momento.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductRegistration
