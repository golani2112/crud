const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
});

const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to DB"));
db.once('open',()=>console.log("Connected to DB"));

module.exports=db;
