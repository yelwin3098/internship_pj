const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CommentSchema=new Schema({
    body:{
        type:String,
        require:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'user'
    },
    date:{
        type:Date,
        default:Date.now()
    },
    commentIsApproved:{
        type:Boolean,
        default:false
    }
});

const Comment = module.exports = mongoose.model('comment', CommentSchema);