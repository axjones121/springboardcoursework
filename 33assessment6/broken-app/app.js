const express = require('express');
let axios = require('axios');
///was var app
let app = express();

//forgot app.use..
app.use(express.json());

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch (err){
    next(err);
  }
});

app.listen(3000, function() {
  console.log('go on local host 3000');
});
