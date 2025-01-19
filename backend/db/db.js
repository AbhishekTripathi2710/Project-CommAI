import mongoose from "mongoose";
 
function connectToDb(){
    mongoose.connect(process.env.DB_CONNECT)
        .then(()=>{console.log('Connected to Db')})
        .catch(err => {console.log(err)});
}

export default connectToDb;