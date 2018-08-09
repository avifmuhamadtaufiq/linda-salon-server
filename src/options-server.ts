import { Options } from 'graphql-yoga'
import costAnalysis from 'graphql-cost-analysis'
import * as depthLimit from 'graphql-depth-limit'

export default {
  validationRules: req => [
    costAnalysis({
      variables: req.body.variables,
      maximumCost: 1000,
    }),
    depthLimit(10),
  ]
} as Options