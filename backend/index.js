require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

let HoldingModel = require("./models/HoldingModel.js");
const PositionModel = require("./models/PositionModel.js");
const OrderModel = require("./models/OrderModel.js");
let port = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const autoRoutes = require("./routes/AuthRoute.js");
const app = express();
// use for parse the data from backend to frontend

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "https://zerodha01.netlify.app/",
      "https://dashb0.netlify.app/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use("/", autoRoutes);

// app.get("/addHolding", async (req, res) => {
//   let newHolding = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   newHolding.forEach((item) => {
//     let holding = new HoldingModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     holding.save();
//   });
//   res.send("done");
// });

// app.get("/addPositon", (req, res) => {
//   let temPosition = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   temPosition.forEach((posi) => {
//     let newPosition = new PositionModel({
//       product: posi.product,
//       name: posi.name,
//       qty: posi.qty,
//       avg: posi.avg,
//       price: posi.price,
//       net: posi.net,
//       day: posi.day,
//       isLoss: posi.isLoss,
//     });
//     newPosition.save().then((d) => {
//       console.log(d);
//     });
//   });
// });

app.get("/", (req, res, next) => {
  res.send("backend is  started");
});
app.get("/allHolding", async (req, res) => {
  let allHolding = await HoldingModel.find();

  res.json(allHolding);
});

app.get("/allPosition", async (req, res) => {
  let allPosition = await PositionModel.find();

  res.json(allPosition);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrderModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  //   res.json(newOrder);
  res.send("order send");
});

// mongoose
//   .connect(MONGO_URL)
//   .then(() => {
//     console.log("database connected");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.listen(port, () => {
  console.log("backend is started");
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("database started");
    })
    .catch((err) => {
      console.log(err);
    });
});
