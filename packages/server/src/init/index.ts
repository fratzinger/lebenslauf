import { argv } from "yargs";
import { Application, ServiceTypes } from '../declarations';
import { ServiceAddons } from '@feathersjs/feathers';
import logger from "../logger";

import asArray from "./services";
import { Service } from "feathers-sequelize/types";

export default async (app:  Application) => {
  if (argv.init !== true) { return; }

  logger.info("init started");

  const isFake = (argv.fake === true);

  for (let i = 0, len = asArray.length; i < len; i++) {
    const data = asArray[i];

    try {

    if (!data.service || !app.service(data.service)) {
      throw "service not found";
    }
    if (!isFake && !data.isFake) continue;
    if (!Array.isArray(data.entries)) continue;


      await (app.service(data.service) as Service).create(data.entries);
    } catch(ex) {
      console.log(ex);
    } finally {

    }
  }

  logger.info("init finished");
}
