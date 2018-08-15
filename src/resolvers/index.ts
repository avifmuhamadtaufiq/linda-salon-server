import { Query } from './Query'
// import { Subscription } from './Subscription'
import { auth } from './Mutation/auth'
import { AuthPayload } from './AuthPayload'
import { fileUploadMutation } from './Mutation/fileUpload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...fileUploadMutation,
  },
  AuthPayload,
}
