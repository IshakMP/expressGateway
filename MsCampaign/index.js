let express = require('express');
let app = express();
app.listen(5000, () => {
  console.log('Server running on port 5000');
});

app.get('/actors', (req, res, next) => {
  let array_actors = [
    'Tom Cruise',
    'Johnny Depp',
    'Di Caprio',
    'Russel Crowe',
    'Tom Hanks',
  ];
  res.json(array_actors);
});
