import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    emailId: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true },
    imageUrl: String,
    quizs: {
        type: [String],
    },
    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'response'
    }],
})

export default mongoose.model("User", userSchema);