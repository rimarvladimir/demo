const express = require('express')
const app = express()
const port = 3000
const https = require('https');

function BTC() {
    let data = '';
    https.get('https://blockchain.info/ticker', (resp) => {

        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data));
        });

        app.get('/', (req, res) => {
            res.send(JSON.parse(data))
        })

    })
    setInterval(BTC, 100000)
}

BTC();
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})