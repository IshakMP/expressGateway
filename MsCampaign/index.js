let express = require('express');
let app = express();
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.get('/v1/campaign', (req, res, next) => {
  console.log(req.headers);

  res.json(req.headers['header1']);
});
