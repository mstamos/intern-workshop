const axios = require('axios')

axios.get('https://api.wazirx.com/api/v2/trades?market=btcusdt').then(data => {
  if (!data) {
    return
  }
  console.log(data)
});
