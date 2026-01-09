const mongoose=require('mongoose');
require('dotenv').config()
const mongoUrl=process.env.MONGO_URI

async function main(){
    await mongoose.connect(mongoUrl);
}

module.exports=main