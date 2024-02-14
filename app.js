const express = require("express");
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) =>
{
    console.log("'/' call");
    return res.type('html').send('work');
});

app.get("/get_data", (req, res, next) => {
    console.log("'/get_data' call");
    axios.get("https://line52w.bk6bba-resources.com/line/desktop/topEvents3?place=live&sysId=1&lang=ru&scopeMarket=1600")
        .then(data => { 
            console.log(data.data)
            res.json(data.data)
        })
        .catch(err => next(err));
  })

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
