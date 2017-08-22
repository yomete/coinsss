"use latest"
const axios = require("axios").default;

function sendToSlack(url, data) {
    axios.post(url, {'text': data})
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}

module.exports = function (ctx, done) {
    axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
        .then(response => {
            let btc = "A bitcoin costs " + response.data.USD + " dollars"
            sendToSlack(ctx.data.url, btc)
        })
        .catch(error => {
            console.log(error)
        })
    done(null, ctx.data.url);
}