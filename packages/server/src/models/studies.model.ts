// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes, Model } from "sequelize";
import { Application } from "../declarations";
import { HookReturn } from "sequelize/types/lib/hooks";

export default function (app: Application): typeof Model {
  const sequelizeClient: Sequelize = app.get("sequelizeClient");
  const studies = sequelizeClient.define("studies", {
    title: DataTypes.STRING,
    graduation: DataTypes.STRING,
    grade: DataTypes.STRING,
    establishment: DataTypes.STRING,
    icon: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    theses: DataTypes.JSONB
  }, {
    hooks: {
      beforeCount(options: any): HookReturn {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (studies as any).associate = function (models: any): void {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

  };

  return studies;
}
