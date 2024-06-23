import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const User = mongoose.model('user', schema);
export default User;
