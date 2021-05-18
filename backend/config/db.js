const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        const conn = await mongoose.connect("url", {
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(e){
        console.log(`Error: ${e.message}`);
        process.exit(1); // that's means exit with failure
    }
}

module.exports = connectDB;