require('dotenv').config();

module.exports = {
  name: 'basic_server',
  datalayer: {
    host: process.env.BASIC_SERVER_HOST,
    port: process.env.BASIC_SERVER_PORT,
  },
  endpoints: {
    'basic_endpoint': {
      config: {
        host: process.env.BASIC_ENDPOINT_HOST,
        port: process.env.BASIC_ENDPOINT_PORT,
      }
    }
  }
}
