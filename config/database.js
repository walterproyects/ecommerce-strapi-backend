const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'strapi_db',
      user:  'postgres',
      password: 'sebas123',
      ssl: false,
    },
    useNullAsDefault: true,
  },
});
