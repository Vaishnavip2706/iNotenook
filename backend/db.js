const mongoose =  require('mongoose')


const mongoURI = "mongodb+srv://vaishnavipandey131:HMseAV7QLxqct35j@cluster0.yrev3gk.mongodb.net/"

const connectToMongo = async ()=>{
   await mongoose.connect(mongoURI);
        console.log("connected to mongo successfully")
}

module.exports= connectToMongo;
