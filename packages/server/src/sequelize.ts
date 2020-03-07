import { Sequelize } from "sequelize";
import { Application, ServiceTypes } from "./declarations";
import feathersExpress = require("@feathersjs/express");

import { argv } from "yargs";

const isForce = (argv.init === true);

export default function (app: Application): void {
  const connectionString = app.get("postgres");
  const sequelize = new Sequelize(connectionString, {
    dialect: "postgres",
    logging: false,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set("sequelizeClient", sequelize);

  app.setup = function (...args): feathersExpress.Application<ServiceTypes> {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const {models} = sequelize;
    Object.keys(models).forEach(name => {
      if ("associate" in models[name]) {
        (models[name] as any).associate(models);
      }
    });

    // Sync to the database
    sequelize.sync({
      force: isForce
    }).then(() => {
      app.emit("sequelizeSynced");
    });

    return result;
  };
}
