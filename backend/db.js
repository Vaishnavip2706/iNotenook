const mongoose =  require('mongoose')


const mongoURI = "mongodb+srv://vaishnavipandey131:HMseAV7QLxqct35j@cluster0.yrev3gk.mongodb.net/"

const connectToMongo = async ()=>{
   await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true, // important for MongoDB Atlas
    });
        console.log("connected to mongo successfully")
}

module.exports= connectToMongo;
