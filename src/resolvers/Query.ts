import { getUserId, Context } from '../services/utils'

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}
