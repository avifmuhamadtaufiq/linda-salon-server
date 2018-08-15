import { getUserId, Context } from '../services/utils'
import { Booking, Item } from '../generated/prisma';
import { map, flatten, reduce } from '../services/function-helper';
var areRangesOverlapping = require('date-fns/are_ranges_overlapping')

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
  
  file(parent, { id }, ctx: Context, info) {
    return ctx.db.query.file({ where: { id } }, info)
  },
  
  files(parent, args, ctx: Context, info) {
    return ctx.db.query.files(args, info)
  },

  async productByDate(parent, args, ctx: Context, info) {
    console.log('dddd', parent)
    return ctx.db.query.products(args, info)
  },

  async tester(parent, args, ctx: Context, info) {
    const bookings = await ctx.db.query.bookings({}, `{
      id
      forDate
      toData
      items {
        amount
        product {
          id
          stock
        }
      }
    }`)

    const products = await ctx.db.query.products({}, `{
      id
      name
      stock
    }`)

    let dataItems = []

    if (bookings) {
      const filterBookingsByDateGiven = (booking: Booking) => {
        const data1 = "2018-08-17T00:00:00.000Z"
        const data2 = "2018-08-21T00:00:00.000Z"

        const filter = areRangesOverlapping(
          booking.forDate,
          booking.toData,
          data1,
          data2
        )
        
        return filter ? booking.items : null
      }

      const filtering = flatten(map(bookings, filterBookingsByDateGiven))
      const filterProduct = (item: Item) => {
        return item 
      }

      const reduceSameProduct = (memo: any[], item) => {
        if (memo) {
          return memo.concat(item)
        }
      }

      const reducex = reduce(filtering, reduceSameProduct, [])
      console.log('filtering', filtering)
      console.log('reducing', reducex)


      bookings.map(booking => {
        const data1 = "2018-08-17T00:00:00.000Z"
        const data2 = "2018-08-21T00:00:00.000Z"

        const testDate = areRangesOverlapping(
          booking.forDate,
          booking.toData,
          data1,
          data2
        )
        if (testDate) {
          booking.items.map(item => {
            dataItems.push(item)
          })
        }
      })
    }

    let data9 = []
    

    let productFilter = []

    products.map(product => {
      let itemCek = null

      dataItems.map(item => {
        if (item.product.id === product.id) {
          itemCek = { stock: product.stock - item.amount }
        }
      })
      console.log('itemcek', itemCek)
      productFilter.push({...product, ...itemCek})
    })
    
    return productFilter
  }
}
