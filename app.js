var redis = require("redis"),
    client = redis.createClient();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var md5 = require("md5");

app.use(bodyParser.json());

const http = require("http");
const path = require("path");

process.on("unhandledRejection", err => {
    //  fs.writeSync(1, `Caught exception: ${err}\n`);
    console.log(`Caught unhandledRejection: ${err}`);
  });
  
  process.on("uncaughtException", err => {
    //  fs.writeSync(1, `Caught exception: ${err}\n`);
    console.log(`Caught uncaughtException:  ${err}`);
    console.log(err.stack);
  });
  
 
  
  //Set location of build path for when we ng build the Angular app:
  app.use(express.static(path.join(__dirname, "public")));
  
  const cors = require("cors");
  const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));
  
  let mm = require('./server/db/redisInfoModel');

  mm.sync()  
  // force: true will drop the table if it already exists
  // mm.sync({ force: true }).then(() => {
  //   console.log("Drop and Resync with { force: true }");
  // });
  
  //Create port and http server (this is the port that the API will run on)
  const port = process.env.PORT || "8088";
  app.set("port", port);
  const server = http.createServer(app);
  server.listen(port, () => console.log(`API running on localhost:${port}`));
  
  client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("host", "127.0.0.1", redis.print);
client.hset("host", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);

client.hkeys("hash key", function (err, replies) {
    // console.log(replies.length + " replies:");
     replies.forEach(function (reply, i) {
      // console.log("----------------------"+ reply);

        let data = {
          md5 :md5hash(Date.now()),
          port:12,
          host:'test',
          password:'test',
         
        }
        mm.create(data)
          .then(result => {
            return result;
          })
          .catch(ee => {
            console.log("in Create -> " + ee);
            throw Error("An error occurred in create.");
          });
      
      });
    client.quit();
});

let md5hash = (data)=>{
  return md5(data)
}