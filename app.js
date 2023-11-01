const express = require('express');
const userRouter = require('./routes/userRouter');
const { Sequelize } = require('sequelize');
const config = require('./config/config.json');

const app = express();
const port = 3000;

const sequelize = new Sequelize(config.development);

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
