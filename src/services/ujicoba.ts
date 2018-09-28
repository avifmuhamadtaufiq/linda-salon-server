import { ProductHasMinusStock, isProductHasMinusStock } from "./filter-products";

const xs = [ 
{ amount: 12,
  product: { id: 'cjkovboie001n0815m84jaubv', stock: 20 } },
{ amount: 8,
  product: { id: 'cjkovbxp3001r0815fxxml10z', stock: 10 } },
{ amount: 6,
  product: { id: 'cjkovboie001n0815m84jaubv', stock: 20 } },
{ amount: 6,
  product: { id: 'cjkovboie001n0815m84jaubv', stock: 20 } },
{ amount: 20,
  product: { id: 'cjkrqz7df00c10807iq1ddnma', stock: 40 } },
{ amount: 1,
    product: { id: 'cjkrqz7df00c10807iq1ddnma', stock: 40 } },
{ amount: 12,
  product: { id: 'cjkovboie001n0815m84jaubv',  stock: 20 } },
{ amount: 1,
  product: { id: 'cjkovbxp3001r0815fxxml10z', stock: 10 } },
{
  amount: 1,
  product: { id: 'cjkuuhxbq000d0807niddi3ud', stock: 50 }
},
{
  amount: 1,
  product: { id: 'cjkrwqx5n00rb0807nn2kzl1k', stock: 40 },
},
{
  amount: 200,
  product: { id: 'cjkuuhxbq000d0807niddi3ud', stock: 50 }
}
]

const products2 = [
  {
    "node": {
      "id": "cjkovboie001n0815m84jaubv",
      "name": "kain",
      "stock": 20
    }
  },
  {
    "node": {
      "id": "cjkovbxp3001r0815fxxml10z",
      "name": "gabus",
      "stock": 10
    }
  },
  {
    "node": {
      "id": "cjkrqz7df00c10807iq1ddnma",
      "name": "baju j",
      "stock": 40
    }
  },
  {
    "node": {
      "id": "cjkrwqx5n00rb0807nn2kzl1k",
      "name": "baju j",
      "stock": 40
    }
  },
  {
    "node": {
      "id": "cjkuuhxbq000d0807niddi3ud",
      "name": "panggung",
      "stock": 50
    }
  }
]

const getIdsProductInNode = (array: any[]) => array.map(val => val.node.id)
const getIds = (array: any[]) => array.map(val => val.id)
const getIdsProduct = (array: any[]) => array.map(val => val.product.id)

const reduceRightProduct = (idsProd: any[], idsItemsR: any[], arrayR: any) => idsProd.reduce((acc, curr) => {
  if(idsItemsR.indexOf(curr) >= 0) {
    acc.push(arrayR[idsItemsR.lastIndexOf(curr)])
  }
  return acc
}, [])

const reduceProduct = (idsItemHasProduct: any[], idsProducts: any[], itemHasProducts: any[]) => idsItemHasProduct.reduce(function(acc, curr, i) {
  if (idsProducts.indexOf(curr) >= 0 && getIds(acc).indexOf(curr) >= 0) {
    acc.push({
      ...itemHasProducts[i].product,
      stock: acc[getIds(acc).lastIndexOf(curr)].stock - itemHasProducts[i].amount
    })
  }
  if (idsProducts.indexOf(curr) >= 0 && getIds(acc).indexOf(curr) < 0) {
    acc.push({
      ...itemHasProducts[i].product,
      stock: itemHasProducts[i].product.stock - itemHasProducts[i].amount
    })
  }
  return acc
}, []);

const join = (arrProd: any[], idsArrR: any[], arrR: any[]) => arrProd.map((prod, i) => {
  if(idsArrR.indexOf(prod.node.id) >= 0) return {
    "node": {
      ...prod.node,
      stock: arrR[idsArrR.indexOf(prod.node.id)].stock
    }
  }
  console.log(idsArrR)
  return prod
})

const filterProducts = (arrItems: any[], arrProd: any[]) => {
  // conver all to array ids
  const idsItemR = getIdsProduct(arrItems)
  const idsProd = getIdsProductInNode(arrProd)

  // reduce product
  const filter1 = reduceProduct(idsItemR, idsProd, arrItems)

  // reduce righr product
  const filter2 = reduceRightProduct(idsProd, idsItemR, filter1)

  // conver result filter1 to array ids
  const IdsRFilter = getIds(filter2)

  // finally join to product
  return join(arrProd, IdsRFilter, filter2)
}

const idsItemR = getIdsProduct(xs)
const idsProd = getIdsProductInNode(products2)

const xyz = reduceProduct(idsItemR, idsProd,xs)
const idss = getIds(xyz)
console.log(filterProducts(xs, products2))

// const getAmountD = reduceProduct(idsItemsHP, idsProd, xs)
// const xyz = reduceRightProduct(idsProd, idsItemsHP, getAmountD)
// const idss = getIds(xyz)
// const ultimate = join(products2, idss, xyz)
// console.log(getAmountD)
// console.log('ultimate', ultimate)
// console.log('products', products2)
