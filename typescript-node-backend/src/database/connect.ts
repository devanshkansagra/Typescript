import mongoose from "mongoose";

export default async function connect(DB: string):Promise<typeof mongoose> {
    return await mongoose.connect(DB);
}