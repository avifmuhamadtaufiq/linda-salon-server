import { getUserId } from "../services/utils";

export const directiveResolvers = { 
  isAuthenticated: async(next, source, { role }, ctx) => {
    const id = getUserId(ctx)
    if (id !== undefined) {
      return next()
    }
    throw new Error('Private');
  },
}