// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/lib/hooks";


export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const publications = sequelizeClient.define("publications", {
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
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (publications as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    models.publications.belongsTo(models.journals, {
      as: "journal"
    });
  };

  return publications;
}
