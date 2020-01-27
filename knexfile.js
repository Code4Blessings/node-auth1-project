// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/auth.db3'
    },
    useNullAsDefault: true,
  },

  migrations: {
    directory: './data/migrations',
  },

  seeds: {
    directory: "./data/seeds"
  },

    pool: {
      //SQLite will NOT enforce Foreign Keys
      afterCreate: (conn, done) => {
        conn, run('PRAGMA foreign_keys = ON', done);
      }
    },
    

};
