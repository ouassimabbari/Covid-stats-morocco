const express = require("express");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const oracledb = require("oracledb");

dotenv.config();

const app = express();

mongoose.connect(
  process.env.DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("connected to the database");
    }
  }
);

//Middlewares
app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

//require APIs
const regionRoutes = require("./routes/region");
const cityRoutes = require("./routes/city");
const statsRoutes = require("./routes/stats");

app.use("/api", regionRoutes);
app.use("/api", cityRoutes);
app.use("/api", statsRoutes);

//oracledb
var connAttrs = {
  user: "ouassim",
  password: "oracledb",
  connectString:
    "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))",
};

app.get("/oracledb", function (req, res) {
  "use strict";

  oracledb.getConnection(connAttrs, function (err, connection) {
    if (err) {
      res.set("Content-Type", "application/json");
      res.status(500).send(
        JSON.stringify({
          status: 500,
          message: "Error connecting to DB",
          detailed_message: err.message,
        })
      );
      return;
    }
    connection.execute(
      "SELECT * FROM region_table",
      {},
      {
        outFormat: oracledb.OBJECT, // Return the result as Object
      },
      function (err, result) {
        if (err) {
          res.set("Content-Type", "application/json");
          res.status(500).send(
            JSON.stringify({
              status: 500,
              message: "Error getting the dba_tablespaces",
              detailed_message: err.message,
            })
          );
        } else {
          res.header("Access-Control-Allow-Origin", "*");
          res.header("Access-Control-Allow-Headers", "Content-Type");
          res.header(
            "Access-Control-Allow-Methods",
            "GET,PUT,POST,DELETE,OPTIONS"
          );
          res.contentType("application/json").status(200);
          res.send(JSON.stringify(result.rows));
        }
        // Release the connection
        connection.release(function (err) {
          if (err) {
            console.error(err.message);
          } else {
            console.log("GET /sendTablespace : Connection released");
          }
        });
      }
    );
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("listening on 3000!!");
  }
});
