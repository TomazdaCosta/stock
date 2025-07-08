import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'stock',
  initialState: {
    products: [],
    filters: []
  },
  reducers: {
    funcInicial(state, action) {
      state.products = action.payload.stockInicial
    },
    addProduct(state, action) {
      state.products.push(action.payload)
    },
    removeProduct(state, action) {
      state.products = state.products.filter(product => product.id !== action.payload.id)
    },
    editProduct(state, action) {
      const index = state.products.findIndex(product => product.id === action.payload.id)
      state.products[index].productStock = action.payload.editProductStock
    },
    sendProducts(state, action) {
      if(action.payload.sendProduct !== '') {
        state.filters = state.products.filter(product => product.productName.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(action.payload.sendProduct.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
      } else {
        state.filters = []
      }
    },
    inputStock(state, action) {
      const index = state.products.findIndex(product => product.id === action.payload.id)
      const getProsuctStock = +state.products[index].productStock
      const totalStock = getProsuctStock + +action.payload.input
      state.products[index].productStock = totalStock
    },
    outputStock(state, action) {
      const index = state.products.findIndex(product => product.id === action.payload.id)
      const getProsuctStock = +state.products[index].productStock
      if(getProsuctStock > 0) {
        const totalStock = getProsuctStock - +action.payload.output
        state.products[index].productStock = totalStock
      }
    }
  }
})

export const { addProduct, removeProduct, editProduct, sendProducts, inputStock, outputStock, funcInicial } = slice.actions
export default slice.reducer
