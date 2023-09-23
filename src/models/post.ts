import mongoose from "mongoose";

interface IPost {
    title: string
    description: string
    tags: string[]
    post: string
    isPublic: boolean
    time: Date
    readTime: number
    id: string
}

const postSchema = new mongoose.Schema<IPost>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    post: {
        type: String,
        required: true
    },
    isPublic: {
        type: Boolean,
        required: true
    },
    time: {
        type: Date,
        required: true,
        default: new Date()
    },
    readTime: {
        type: Number,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
})

export default mongoose.model("Post", postSchema)