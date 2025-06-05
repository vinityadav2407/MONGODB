const mongoose=require("mongoose");
main().then((result)=>{
    console.log("connection successfuly stablised with the mongodb");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//****************** (Validation schema(rules for the schema)***************************************** */
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[50 ,"Price is too low for this book"], // error handling
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    }
});
const Book=mongoose.model("Book",bookSchema);

//******************** insert data*********/
// const book1=new Book({
//     title:"Engineering-Math",
//     author:"xyz ",
//     price:1200,
//     category:"non-fiction",
// });

// book1.save()
// .then((result)=>  {console.log(result)})
// .catch((err)=>{console.log(err)});
//****************** validation in Updation and error********** */
// so runValidators is used to update according to the schema constrint otherwise at the time of updation schema constarin not applied  & it only apply at the time of insertion
Book.findByIdAndUpdate({_id:'68417b8207eb85dd9ccf48ca'},{price:40},{runValidators:true})
.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err.errors.price.properties.message);
});