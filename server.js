const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: 'https://placeimg.com/64/64/1',
            name: 'test1',
            age: '20',
            job: 'Marketer',
          },
          {
            id: 2,
            image: 'https://placeimg.com/64/64/2',
            name: 'test1',
            age: '28',
            job: 'Customs Specialist',
          },
          {
            id: 3,
            image: 'https://placeimg.com/64/64/3',
            name: 'test1',
            age: '30',
            job: 'Programmer',
          },
    ]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
