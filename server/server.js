import express from 'express'
const app = express()
const port = 8001
const {connectTomongoDB} = require('./connect')
const urlRoute = require('./routes/url')


connectTomongoDB("mongodb://localhost:27017/short-url")
.then(()=> console.log("MongoDB Connected"))
app.use(express.json());
app.use("/url", urlRoute);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port:${port}`)
})