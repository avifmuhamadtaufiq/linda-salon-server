import { Options } from 'graphql-yoga'
import costAnalysis from 'graphql-cost-analysis'
import * as depthLimit from 'graphql-depth-limit'

export default {
  validationRules: (req) => [
    costAnalysis({
      variables: req.query.varibles,
      maximumCost: 50,
    }),
    depthLimit(10),
  ]
}