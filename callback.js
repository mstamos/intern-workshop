const request = require('request')

request('https://api.wazirx.com/api/v2/trades?market=btcusdt',{json: true}, (error, resp) => {
   if (error) { return console.log(err); }
  console.log(resp.toJSON())
  const results = resp.toJSON();
  console.log(results.body)
});
