import { Sequelize } from 'sequelize';
import { Application } from './declarations';

const { argv } = require("yargs");

let isForce = (argv.init === true);

export default function (app: Application) {
  const c = app.get("postgres");
  const connectionString = `postgres://${c.user}:${c.password}@${c.host}:${c.port}/${c.database}`;
  const sequelize = new Sequelize(connectionString, {
    dialect: 'postgres',
    logging: false,
    define: {
      freezeTableName: true
    }
  });
  const oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function (...args) {
    const result = oldSetup.apply(this, args);

    // Set up data relationships
    const models = sequelize.models;
    Object.keys(models).forEach(name => {
      if ('associate' in models[name]) {
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
