const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        default: Date.now
    },
    // role:{
    //     type: String,
    //     enum: ['client', 'employee','manager','teamleader'],
    //     default: 'user',
    //     required: true
    // }

})
const User = mongoose.model('user', UserSchema);

module.exports = mongoose.model('user', UserSchema)