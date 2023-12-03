const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('user',UserSchema);