# Welcome to Flights and Services.

### Project Setup

- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the download project
- Create a `.env` file in the root directory and add the following environment variables.
  . `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.

```
 {
    "development": {
    "username": <YOUR_DB_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Airline_And_Search",
    "host": "127.0.0.1",
    "dialect": "mysql"
    }
}
```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute the `npx sequelize db:create`.
- Create the model than write and execute the code that is `npx sequelize model:generate --name '[Write_Your_DB_Name] --attributes name:string'`

- After this command we Execute the `npx execute db:migrate`

## DB Design

    - Airplane Table
    - Flights
    - Airport
    - City

- A flight belongs to an airplane but one airplane can be used in multiple flights.
- A city has many airports but one airport belongs to a city.
- One airport can have many flights, but a flight belongs to one airport.

## Tables :

### City -> id , name , created_at , updated_at

### Airport -> id , name , address , cityId , created_at , updated_at.

    - Relationship -> city has many airports and Airports belongs to a city ( One to many ) relationship.
