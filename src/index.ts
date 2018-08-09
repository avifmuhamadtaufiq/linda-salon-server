import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated/prisma'
import resolvers from './resolvers'
import { directiveResolvers } from './directive-resolvers'
import ultimateSchemaString from './schema'
// import schemaDirectives from './schema-directive'
import options from './options-server'
import * as cors from 'cors'

const server = new GraphQLServer({
  typeDefs: ultimateSchemaString,
  resolvers,
  directiveResolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
})

server.express.use('/*', cors()) // allow cors

server.start(options, () => console.log(`Server is running on http://localhost:4000`))