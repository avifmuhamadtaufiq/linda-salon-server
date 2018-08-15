import { reduce, filter, pluck, def, map, partial, merge, spreadArg } from './function-helper'

const xs = [ 
{ amount: 12,
  product: { id: 'cjkovboie001n0815m84jaubv', stock: 20 } },
{ amount: 8,
  product: { id: 'cjkovbxp3001r0815fxxml10z', stock: 10 } },
{ amount: 6,
  product: { id: 'cjkrqz7df00c10807iq1ddnma', stock: 40 } },
{ amount: 6,
  product: { id: 'cjkovboie001n0815m84jaubv', stock: 20 } },
{ amount: 6,
  product: { id: 'cjkovboie001n0815m84jaubv', stock: 20 } },
{ amount: 20,
  product: { id: 'cjkrqz7df00c10807iq1ddnma', stock: 40 } },
{ amount: 12,
  product: { id: 'cjkovboie001n0815m84jaubv', stock: 20 } },
{ amount: 1,
  product: { id: 'cjkovbxp3001r0815fxxml10z', stock: 10 } } 
]

const products = [
  {
    "id": "cjkovboie001n0815m84jaubv",
    "name": "kain",
    "stock": 20
  },
  {
    "id": "cjkovbxp3001r0815fxxml10z",
    "name": "gabus",
    "stock": 10
  },
  {
    "id": "cjkrqz7df00c10807iq1ddnma",
    "name": "baju j",
    "stock": 40
  },
  {
    "id": "cjkrwqx5n00rb0807nn2kzl1k",
    "name": "baju j",
    "stock": 40
  },
  {
    "id": "cjkuuhxbq000d0807niddi3ud",
    "name": "panggung",
    "stock": 50
  }
]

const getProduct = (array: any[]) => map(array, partial(pluck, 'product'))

const getId = (array: any[]) => map(array, partial(pluck, 'id'))

console.log(getId(getProduct(xs)))
var duplicates = (array: any[]) => array.reduce(function(acc, curr, i, arr) {
  const indexCurrOfArr = getId(getProduct(arr)).indexOf(curr.product.id)
  const indexCurrOfAcc = getId(acc).indexOf(curr.product.id)

  if ( indexCurrOfArr !== i && indexCurrOfAcc >= 0) {
    acc[indexCurrOfAcc].amount = curr.amount + acc[indexCurrOfAcc].amount
  }

  if ( indexCurrOfArr !== i && indexCurrOfAcc < 0) {
    acc.push({
      id: curr.product.id,
      amount: curr.amount + arr[indexCurrOfArr].amount
    })
  }

  return acc
}, []);

const exstrax = duplicates(xs)

const ProductFilter = (array: any[]) => array.map((val, i) => {
  const exstraxProductId = getId(exstrax).indexOf(val.id)
  if (exstraxProductId >= 0) {
    return {
      ...val,
      stock: val.stock - exstrax[exstraxProductId].amount
    }
  }
  return val
})

console.log('ult', ProductFilter(products))