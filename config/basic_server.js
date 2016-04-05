require('dotenv').config();

module.exports = {
  name: 'mesh1',
  datalayer: {
    host: process.env.BASIC_SERVER_HOST,
    port: process.env.BASIC_SERVER_PORT,
  }
}