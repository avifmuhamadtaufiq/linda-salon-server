import { Context } from '../../services/utils'

export const booking = {
  booking(parent, { id }, ctx: Context, info) {
    return ctx.db.query.booking({
      where: {
        id
      }
    }, info)
  },
  searchBookingsByUser(parent, { idUser, first, skip }, ctx: Context, info ) {
    return ctx.db.query.bookingsConnection({
      first,
      skip,
      where: {
        AND: {
          userBooking: {
            id: idUser
          },
          status_not: "CREATED"
        }
      },
      orderBy: "createdAt_DESC"
    }, info)
  },
  searchBookingUserStatusCreated(parent, { idUser }, ctx: Context, info) {
    return ctx.db.query.bookings({
      where: {
        AND: {
          userBooking: {
            id: idUser
          },
          status: "CREATED"
        }
      }
    })
  },
  bookingConnection(parent, {first, skip}, ctx: Context, info) {
    return ctx.db.query.bookingsConnection({
      first,
      skip,
      orderBy: "createdAt_DESC"
    }, `{
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      aggregate {
        count
      }
      edges {
        node {
          id
          startDate
          endDate
          noWhatsApp
          address
          message
          status
          userBooking {
            id
            name
          }
          items {
            id
            product {
              id
            }
          }
        }
      }
    }`)
  }
}