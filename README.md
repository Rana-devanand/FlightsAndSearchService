# Welcome to Flights and Services.

### Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downlaod project
- Create a `.env` file in the root directory and add the following environment variables.
  . `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.

```
 {
    "development": {
    "username": "root",
    "password": "root",
    "database": "Airline_And_Search",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute the `npx sequelize db:create`.

```

```
