const mongoose=require('mongoose')

const connectDb=async ()=>{
    const con=await mongoose.connect(process.env.MONGODB_URL);

    console.log(`Mongodb connected : ${con.connection.host}`.cyan)
}

module.exports=connectDb;