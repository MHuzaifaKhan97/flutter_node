const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        const conn = await mongoose.connect('mongodb+srv://huzaifa97:qw4hddqcrg@cluster0.fpmt9.mongodb.net/flutter_node?retryWrites=true&w=majority', {
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