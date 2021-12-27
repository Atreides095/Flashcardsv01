import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const cardSchema = new mongoose.Schema({
    front: String,
    back: String,
});

const deckSchema = new mongoose.Schema({
    name: String,
    // user: mongoose.SchemaType.ObjectId,
    cards: [cardSchema],
    tags: [String],
});

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    password: { type: String, required: true },
    test: { type: Boolean, default: false },
    decks: [deckSchema],
});

userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
