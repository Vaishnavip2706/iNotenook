const mongoose =  require('mongoose')


const mongoURI = "mongodb+srv://vaishnavipandey131:VkQ6TPXBhEfqRPnv@cluster.mongodb.net/inotebook"

const connectToMongo = async ()=>{
   await mongoose.connect(mongoURI);
        console.log("connected to mongo successfully")
}

module.exports= connectToMongo;