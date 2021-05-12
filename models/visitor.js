const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    slug: String,
    company: {
        type: String,
        required: [true, 'Please add company'],
        maxlength: [500, 'Name cannot be more than 50 characters']
    },
     phone: {
        type: String,
        maxlength: [20, 'Phone Number cannot be more than 20 characters']
    },
    email: {
        type: String 
    },
    laptop: {
        type: String,
        required: [true, 'Please add address'],
    },
    lsn: {
        type: String
    },
    host: {
        type: String,
        required: [true, 'Please add host'],
    },
    purpose: {
        type: String,
        required: [true, 'Please add purpose'],
    },
    appointment: {
        type: String,
        required: [true, 'Please add appointment'],
    },

    photo: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Visitor', VisitorSchema);