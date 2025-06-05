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

// const user1=new User({
//     name:"deepak_kumar",
//     email:"deepak@gamil.com",
//     age:22,
// });
// const user2=new User({
//     name:"Monu_Chauhan",
//     email:"monu@gmail.com",
//     age:23,
// });
// user1.save();
// user2.save().then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });

//*********************************** insert many**************************************** */

// User.insertMany([{name:"Yogesh_Ravat",email:"yogesh@gamil.com",age:22},
//     {name:"Gullu",email:"gullu@gamil.com",age:23},
//     {name:"Shubhangi",email:"shubhangi@gmail.com",age:24}
// ]).then((result)=>{
//     console.log(result);
// });

// **************************find into the model return a query object(not a promise but thenable(have the then method))********************************/
// it find all the data from the collection
User.find().then((result)=>{
    console.log(result);
});
// ************** it find the data based on condition or filter*************************************/
User.find({age:{$gt:22}}).then((result)=>{
    console.log(result);
})

//******************** it find the user data based on the id *************** */
User.findById('68409f7d44cc44091c07ba6b').then((result)=>console.log(result));
//************************ it find the only one data based on filter or condition*************************** */
User.findOne({_id:'6841386a5dec06940b09a993'}).then((result)=>console.log(result));
//*********************************** update into the model******************* */
//********** update one document into the collection(it also return the query object)*************** */
// User.updateOne({name:"Gullu"}, {age:23}).then(result=>{console.log(result)});
// // update many

// User.updateMany({age:{$lt:24}},{age:22}).then(result=>{console.log(result)});
// ************************* find one and update (it return the updated result if {new:true} otherwise it return old query object and update also)
User.findOneAndUpdate({name:"Gullu"},{age:26},{new:true}).then((result)=>console.log(result));
//*************** delete(also return a query object) **** */
// User.deleteOne({name:"Shubangi"}).then(result=>{console.log(result)});
// User.deleteMany(<filter>);
//***************** it delete the data and return the result*************//
User.findByIdAndDelete({_id:'6841386a5dec06940b09a993'}).then(result=>{console.log(result)});
// User.findOneAndDelete()

