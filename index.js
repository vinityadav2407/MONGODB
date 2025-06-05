const mongoose = require('mongoose');

main().then((result)=>{
    console.log("connection successfuly stablised with the mongodb");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Collage_student');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//***************************** creat the schema with the help of mongoose*************** */
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});
//************ model into the mongoose is a class by which we create the document into the collection******** */
//****************while we creat the collection name it should start with capital letter and into the singular because mongoose conver in to mongodb into the samll letter and plural************** */

const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);

//************* insert data************* */

const user1=new User({
    name:"deepak_kumar",
    email:"deepak@gamil.com",
    age:22,
});
const user2=new User({
    name:"Monu_Chauhan",
    email:"monu@gmail.com",
    age:23,
});
user1.save();
user2.save().then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});