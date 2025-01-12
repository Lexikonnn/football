import express from 'express'

const port = process.env.PORT || 8000
const app = express()

app.get('/', function (req, res) {
  res.send('IM ALIVE!!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });