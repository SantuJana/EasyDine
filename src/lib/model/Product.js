import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    slug: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        require: true,
    },
    thumbImage: {
        type: String,
        require: true,
    },
    images: [{
        name: String,
        sequence: Number,
    }],
    price: {
        type: Number,
        require: true,
    },
    rating: {
        type: Number,
        require: false,
    },
})

export default mongoose.model('Product', productSchema)