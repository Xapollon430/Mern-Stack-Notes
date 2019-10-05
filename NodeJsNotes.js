const fs = require("fs"); //Including the file system
const http = require("http"); //Including the http module to help us make servers
fs.writeFileSync("hello.txt", "Hello From Node.js"); //Writing to a file in this directory

// Modules
// Global features: Keywords like const or function but also some global objects like process
// Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")
// Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

// EXPORTING IMPORTING IN NODEJS
function Cat(name) {
  this.age = 0;
  this.name = name;
}

// now we export the class, so other modules can create Cat objects
module.exports = {
  Cat: Cat
};

let cats = require("./cat");
let Cat = cats.Cat;

// creates some cats
let cat1 = new Cat("Manny");
let cat2 = new Cat("Lizzie");


//--------------------------------------------------------------------------//

//SERVING STATIC FILES
app.use(express.stati(path.join(__dirname + "public")));

//--------------------------------------------------------------------------//
//Fat arrow functions arent good candidates for object methods. They dont bind their own THIS, they take the this of the surrounding enviroment

const anan = {
  fem: 123,
  baban: "meltem",
  behi: () => {
    console.log(this); // {}
  },
  fehmi: function() {
    console.log(this); // anan
  },
  solution() {
    console.log(this); // way to keep the syntax short
  }
};
//--------------------------------------------------------------------------//
//To make a restful api with query strings

app.get("/weather", (req, res) => { // they can go a get request to this adress localhost/weather?adress=virginia
  req.query // {adress: virginia}
})

// https://softwareengineering.stackexchange.com/questions/331049/why-do-req-params-req-query-and-req-body-exist\
// req.body req.params req.query