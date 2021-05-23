import mongoose from 'mongoose'

const connectionString = 'mongodb://localhost:27017/rollingtimesdb';

 mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true});

 const connection = mongoose.connection;

 connection.once('open',()=>{
     console.log('DB connected');
 });
