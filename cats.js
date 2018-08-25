var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/cat_app', { useNewUrlParser: true }); 
 
 var catSchema = new mongoose.Schema({
     name: String,
     age: Number,
     temperament: String,
 });
var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//   name:"Mrs.Norris",
//   age: 7,
//   temperament: "Evil",
// });

// george.save(function(err,cat){
//    if(err){
//        console.log("Something went wrong!");
//    }  else{
//          console.log("We saved a cat to the DB");
//          console.log(cat);
//    }
// });

Cat.create({
 name: "Oreo",
 age: 12,
 temperament: "Asshole",
},function(err,cat){
   if(err){
    console.log("Whoops!");
    console.log(err);
   } else{
    console.log(cat);
    console.log("Another cat was added to the DB");
   }
   
});

Cat.find({},function(err, cats){
    if(err){
     console.log("something went wrong");
     console.log(err);
    }  else{
     console.log("All the cats");
     console.log(cats);
    }
});