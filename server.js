const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const path = require('path');

app = express();

app.use(express.json());

const db = process.env.MONGODB_URI || config.get('mongoURI');

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected To MongoDB'))
  .catch(err => console.log(err));

app.use('/api/recipes/', require('./routes/api/recipes'));
app.use('/api/users/', require('./routes/api/users'));
app.use('/api/auth/', require('./routes/api/auth'));

//Serve static files
if (process.env.NODE_ENV === 'production') {
  // Set static folderl
  app.use(express.static('client/build'));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
