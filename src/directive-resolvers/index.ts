import { getUserId, Context, getUser } from "../services/utils";

export const directiveResolvers = { 
  isAuthenticated: async(next, source, { role }, ctx: Context) => {
    const id = await getUserId(ctx)
    if (id !== undefined) return next()
    throw new Error('You Doesn\'t have Permission');
  },
  hasRole: async(next, source, { role }, ctx: Context) => {
    const user = await getUser(ctx)
    if (role === user.role) return next()
    throw new Error(`Must have role: ${role}, you have role: ${user.role}`)
  }
}