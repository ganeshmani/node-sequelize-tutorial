## Building REST API in Node/Express App using Sequelize,Postgres

This Repository is building REST API Design in Node/Express App using Sequelize and Postgres.

### PreRequisites
- [Postgres](https://www.postgresql.org/download/)
- [Node](https://nodejs.org/en/download/)

### Setup
```
 $ npm install
 $ node_modules/.bin/sequelize init
```
Sequelize init will creat a folder `config`,`controller`,`migrations` and `models`

create a file called `.sequelizerc`
```
const path = require('path');

module.exports = {
  "config": path.resolve('./server/config', 'config.json'),
  "models-path": path.resolve('./server/models'),
  "seeders-path": path.resolve('./server/seeders'),
  "migrations-path": path.resolve('./server/migrations')
};
```

Create a Database `testdb` in Postgres Dashboard

```
$ node_modules/.bin/sequelize db:migrate      
```

#### To Run Application

```
$ node index.js
```