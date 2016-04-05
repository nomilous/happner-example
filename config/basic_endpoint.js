require('dotenv').config();

module.exports = {
  name: 'basic_endpoint',
  datalayer: {
    host: process.env.BASIC_ENDPOINT_HOST,
    port: process.env.BASIC_ENDPOINT_PORT,
  },
  modules: {
    'component': {
      path: __dirname + '/../lib/basic/component',
    }
  },
  components: {
    'component': {
      startMethod: 'start',
    }
  }
}