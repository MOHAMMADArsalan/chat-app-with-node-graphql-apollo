require('dotenv').config();

export default {
  db_URL: `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASS}@ds231460.mlab.com:31460/chat-app`,
};
