require('dotenv').config()
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const { DATBASE_URL } = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
})


module.exports = sequelize;

const ourOwnMiddlewareFunction = (req, res, next) => {
  console.log("I'm IN THE MIDDLEWARE FUNCTION ", req.body);
  //if some conditions are met and you want to end the call early
  // res.json({message: "missing input fields!"})
  next();
};

//THIS IS THE HOLY TRINITY
app.use(express.json()); //bodyparser middleware
app.use(express.urlencoded({ extended: true })); //url parser middleware
app.use(express.static("frontend"));
//THE FATHER SON AND SPIRIT!

app.use(ourOwnMiddlewareFunction);
//first way, start with ? at the end of the route or endpoint, after that you can send key value pairs with the pattern
//firstName=chad&lastName=tao separated by &
//express will convert it into a query object on the req object, looking like this - { firstName: 'chad', lastName: 'tao' }
// app.get("/", (req, res) => {
//   console.log(req.query);
//   res.send("Hello world!");
// });

//second way, to send info on a get request, by putting information in the route itself, using the URL params object
// app.get("/:name", (req, res) => {
//   res.send(`HELLO ${req.params.name}`);
// });

app.post("/", (req, res) => {
  console.log(req.body);
  res.send({ data: "YOU HIT THE POST ROUTE!" });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/index.html"));
});

sequelize.sync({ force: true })
.then(() => {
  app.listen(PORT, () => console.log(`server is up and running on port - http://localhost:${PORT} 🚀`));
});