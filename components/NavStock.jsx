import { Link } from 'react-router-dom'

const NavStock = () => {
  return (
    <div className='p-4'>
      <span className='text-blue-950 text-2xl font-bold block mb-8'>STOCK</span>
        <ul className='grid gap-2 *:px-2 *:py-2 *:text-sm *:text-blue-950 *:hover:text-blue-800 *:hover:cursor-pointer *:uppercase *:bg-gradient-to-r *:from-blue-100 *:to-blue-300 *:border-r-4 *:border-blue-300 *:hover:border-blue-900'>
          <Link to='/'><li>Painel inicial</li></Link>
          <Link to='/productRegistration'><li>Cadastro de produtos</li></Link>
          <Link to='/inputOutputProducts'><li>Entrada/Saída de produtos</li></Link>
        </ul>
    </div>
  )
}

export default NavStock
