import { Context } from '../../services/utils'
import { processUpload } from '../../modules/fileApi'


export const fileUploadMutation = {
  async uploadFile(parent, { file } , ctx: Context, info) {
    return await processUpload(await file, ctx)
  },

  async uploadFiles(parent, { files }, ctx: Context, info) {
    return Promise.all(files.map(file => processUpload(file, ctx)))
  },

  async deleteFile(parent, { id }, ctx: Context, info) {
    return await ctx.db.mutation.deleteFile({ where: { id } }, info)
  },
}