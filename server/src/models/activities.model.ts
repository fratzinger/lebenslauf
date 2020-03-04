// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const activities = sequelizeClient.define('activities', {
    title: DataTypes.STRING,
    establishment: DataTypes.STRING,
    icon: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    descriptions: DataTypes.JSONB,
    skills: DataTypes.JSONB
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (activities as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return activities;
}
