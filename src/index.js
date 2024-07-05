const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const setupAndStartService = async () => {
  // Create the Server Object
  const app = express();

  // Create the middleWares
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );

  // PORT setup where our Machine is in Running mode..
  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
    const repo = new CityRepository();
    repo.createCity({ name: "Punjab" });
  });
};

setupAndStartService();
