import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: { type: String, unique: true },
    sex: String,
    age: Number,
    password: String,
    role: { type: String, default: 'user' },
    products: [
        {
            id: String,
            title: String,
            description: String,
            price: Number,
            stock: Number,
            category: String
        }
    ]
}, { timestamps: true });

export const UserModel = mongoose.model('User', userSchema);
