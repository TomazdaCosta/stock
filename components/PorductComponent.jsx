const PorductComponent = ({productName, productStock, id, productMarketing, funcRemoveProductSelected}) => {

  return (
    <>
      <td>{productName}</td>
      <td>{productStock}</td>
      <td>{productMarketing}</td>
      <td><button className='bg-red-300 hover:bg-red-400 hover:cursor-pointer p-2 rounded-md' onClick={() => funcRemoveProductSelected(id)}>Excluir</button></td>
    </>
  )
}

export default PorductComponent
