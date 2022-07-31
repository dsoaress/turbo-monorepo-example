import express from 'express'

const app = express()

app.listen(3010, () =>
  console.log('ready - started server on 0.0.0.0:3010, url: http://localhost:3010')
)
