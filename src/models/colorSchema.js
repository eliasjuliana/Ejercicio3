import mongoose from 'mongoose';

const Color = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    hex: {
        type: String,
        required: true,
    },
    rgb: {
        type: String,
        required: true,
    },
    isActive: Boolean,
});

export default mongoose.model('Colors', Color);
