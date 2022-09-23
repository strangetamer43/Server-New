import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    emailId: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    password: {type: String, required: true},
    imageUrl: String,
})

export default mongoose.model("User", userSchema);