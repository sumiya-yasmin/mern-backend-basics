const {z} = require("zod"); 

const IdSchema = z.object({
    _id: z.string()
})

const nameSchema = z.object({
    name: z.string()
})

const DateMixin = z.object({
    createdAt : z.union([z.string(), z.date()]).optional(),
    updatedAt:  z.union([z.string(), z.date()]).optional()
})
module.exports = {
    IdSchema,
    nameSchema,
    DateMixin
}