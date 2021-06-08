import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://admin:Admin2021@cluster0.b8xmu.mongodb.net/rollingtimesdb';
// const connectionString = 'mongodb://localhost:27017/rollingtimesdb';

 mongoose.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

 const connection = mongoose.connection;

 connection.once('open',()=>{
     console.log('DB connected');
 });
