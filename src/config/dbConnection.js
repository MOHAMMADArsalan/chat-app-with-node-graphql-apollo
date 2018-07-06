/* eslint-disable no-console */
import mongoose from 'mongoose';
import config from './config';

const { connection } = mongoose;
mongoose.Promise = global.Promise;
mongoose.connect(config.db_URL);
mongoose.set('debug', true);

connection.once('open', () => {
  console.log('Connected to db successfully');
});
connection.on('error', (err) => {
  console.log('DB connection error: ', err);
});
