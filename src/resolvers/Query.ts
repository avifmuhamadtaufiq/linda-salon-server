import { getUserId, Context } from '../services/utils'

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
}
