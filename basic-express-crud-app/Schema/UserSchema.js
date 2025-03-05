const {z} = require('zod');
const { IdSchema, nameSchema, DateMixin } = require('./Mixin');

const ReviewSchema = z.object({
    
    ...IdSchema.shape,
    ...nameSchema.shape,
    rating: z.number(),
    comment: z.string(),
    ...DateMixin.shape,
})
const  UserSchema = z.object({
    ...IdSchema.shape,
    ...nameSchema.shape,
    email: z.string(),
    userId: z.string(),
    password: z.string(),
    metadata: z.object({
        isFeatured: z.boolean().optional().default(false),
    }).optional(),
    ...DateMixin.shape,
    reviews: z.array(ReviewSchema).optional()
})

module.exports = {
    ReviewSchema,
    UserSchema
}