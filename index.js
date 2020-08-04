let express = require("express");
let app = express();
let path = require("path");
let routes = require("./routes/routes")

let bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  //intercepts OPTIONS method
  if ("OPTIONS" === req.method) {
    //respond with 200
    res.send(200);
  } else {
    //move on
    next();
  }
});
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
    });
}

app.get("/",(req,res,next)=>{
    res.send("woof");
})

app.use("/",routes);

let port = process.env.PORT || 9000;
app.listen(port);