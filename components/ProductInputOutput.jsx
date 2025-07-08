import React from 'react'
import InputComponent from './InputComponent'

const ProductInputOutput = ({id, productName, productStock, productMarketing, funcSendInput, funcSendOutput}) => {
  const [modalInput, setModalInput] = React.useState(false)
  const [modalOutput, setModalOutput] = React.useState(false)
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')

  const sendInput = (ev) => {
    ev.preventDefault()

    funcSendInput(id, input)
    setInput('')
    setModalInput(false)
  }

  const sendOutput = (ev) => {
    ev.preventDefault()

    funcSendOutput(id, output)
    setOutput('')
    setModalOutput(false)
  }

  return (
    <>
      <td>{productName}</td>
      <td>{productStock}</td>
      <td>{productMarketing}</td>
      <td>{modalInput && <form className='grid grid-cols-[auto_auto] gap-1' onSubmit={(ev) => sendInput(ev)}>
        <InputComponent inputId='input' inputName='input' inputType='number' inputValue={input} setValue={setInput} />

        <button className='bg-blue-300 hover:bg-blue-400 hover:cursor-pointer p-2 rounded-md' type="submit">Salvar</button>
      </form>}</td>
      <td>{modalOutput && <form className='grid grid-cols-[auto_auto] gap-1' onSubmit={(ev) => sendOutput(ev)}>
        <InputComponent inputId='output' inputName='output' inputType='number' inputValue={output} setValue={setOutput} />

        <button className='bg-blue-300 hover:bg-blue-400 hover:cursor-pointer p-2 rounded-md' type="submit">Salvar</button>
      </form>}</td>
      <td className='grid grid-cols-[auto_auto] gap-1'>
        <button className='bg-green-200 hover:bg-green-300 hover:cursor-pointer p-2 rounded-md' onClick={() => {
          setModalInput((state) => !state)
          setModalOutput(false)
        }}>Entrada</button>
        <button className='bg-red-300 hover:bg-red-400 hover:cursor-pointer p-2 rounded-md' onClick={() => {
          setModalOutput((state) => !state)
          setModalInput(false)
        }}>Saída</button>
      </td>
    </>
  )
}

export default ProductInputOutput
