const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/recipe-app';
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected To MongoDB'))
  .catch((err) => console.log(err));

app.use('/api/recipes/', require('./routes/api/recipes'));
app.use('/api/users/', require('./routes/api/users'));
app.use('/api/auth/', require('./routes/api/auth'));

//Serve static files
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

//custom error handler
app.use((err, req, res, next) => {
  const { status = 500, message = 'Something Went Wrong!' } = err;
  res.status(status).json({ msg: message });
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
