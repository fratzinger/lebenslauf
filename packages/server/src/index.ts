import logger from "./logger";
import app from "./app";
import { argv } from "yargs";

import initDb from "./init";

const port = app.get("port");
const server = app.listen(port);

process.on("unhandledRejection", (reason, p) =>
  logger.error("Unhandled Rejection at: Promise ", p, reason)
);

server.on("listening", () =>
  logger.info("Feathers application started on http://%s:%d", app.get("host"), port)
);

app.on("sequelizeSynced", () => {
  logger.info("Sequelize synced");
  console.log(argv.init);
  if (argv.init) { initDb(app); }
});
