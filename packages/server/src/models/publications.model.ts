// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const publications = sequelizeClient.define('publications', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtile: DataTypes.STRING,
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    url: DataTypes.STRING,
    isOpenAcces: DataTypes.BOOLEAN,
    authors: DataTypes.JSONB,
    doi: DataTypes.STRING,
    abstract: DataTypes.TEXT,
    tags: DataTypes.JSONB
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (publications as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    models.publications.belongsTo(models.journals, {
      as: "journal"
    });
  };

  return publications;
}
