const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const BAS_URL = process.env.BASE_URL;

var cors = require('cors')

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb+srv://{Username}:{Password}@{Cluster_Name}.egtjcsa.mongodb.net/short-url?retryWrites=true&w=majority").then(() =>
  console.log("Mongodb connected")
);

// app.set("view engine", "ejs");
app.use(cors()) 

app.use(express.json());

app.use("/url", urlRoute);



app.get('/url', async (req, res) => {
  try {
    const data = await URL.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
