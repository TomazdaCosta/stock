import React from "react"
import { StockContext } from "./StockContext"
import { useDispatch } from "react-redux"
import { addProduct, removeProduct, editProduct, sendProducts, inputStock, outputStock, funcInicial } from "../store/stock"
import stockInicial from "../StockInicial"

export function StockContextProvider({children}) {
  const [productName, setProductName] = React.useState('')
  const [productStock, setProductStock] = React.useState('')
  const [productMarketing, setProductMarketing] = React.useState('')
  const [sendProduct, setSendProduct] = React.useState('')
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(funcInicial({stockInicial}))
  }, [dispatch])

  React.useEffect(() => {
    dispatch(sendProducts({sendProduct}))
  }, [sendProduct, dispatch])

  const sendNewProduct = (ev) => {
    ev.preventDefault()

    const id = Math.floor(Math.random() * 1000000)
    dispatch(addProduct({id, productName, productStock, productMarketing }))
    setProductName('')
    setProductStock('')
    setProductMarketing('')
  }

  const removeProductSelected = (id) => {
    dispatch(removeProduct({id}))
  }

  const sendNewProductStock = (ev, id, editProductStock) => {
    ev.preventDefault()

    dispatch(editProduct({id, editProductStock}))
  }

  const sendInput = (id, input) => {
    dispatch(inputStock({id, input}))
  }

  const sendOutput = (id, output) => {
    dispatch(outputStock({id, output}))
  }

  const data = {
    // cadastro
    productName,
    setProductName,
    sendNewProduct,
    productStock,
    setProductStock,
    productMarketing,
    setProductMarketing,
    removeProductSelected,
    sendNewProductStock,

    // procurar produto
    sendProduct,
    setSendProduct,

    // entrada e saída
    sendInput,
    sendOutput,
  }

  return (
    <StockContext.Provider value={data}>
      {children}
    </StockContext.Provider>
  )
}