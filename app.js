var redis = require("redis"),
    client = redis.createClient();
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
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
  
  const db = require("./server/db/db.config.js");
  
  // force: true will drop the table if it already exists
  db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and Resync with { force: false }");
  });
  
  const controller = require("./server/db/redisInfoController")(redisInfo);

  //Create port and http server (this is the port that the API will run on)
  const port = process.env.PORT || "8088";
  app.set("port", port);
  const server = http.createServer(app);
  server.listen(port, () => console.log(`API running on localhost:${port}`));
  


  client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        let data = {
          md5 :reply.md5,
          port:reply.port,
          host:reply.host,
          password:reply.password,
          addTime:Date.now()
        }
        let mm = require("./server/db/commonModel")(redisInfo);
        mm.create(data)
          .then(result => {
            res.json(result);
          })
          .catch(ee => {
            console.log("in Create -> " + ee.message);
            throw Error("An error occurred in create.");
          });
      
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});