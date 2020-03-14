import { expect } from "chai";
import { Server } from "http";

import app from "../src/app";

const port = app.get("port") || 8998;

const servicePaths = [
  "api/v1/activities",
  "api/v1/characteristics",
  "api/v1/jobs",
  "api/v1/journals",
  "api/v1/publications",
  "api/v1/skills",
  "api/v1/studies",
  "api/v1/uploads",
  "api/v1/urls",
  "api/v1/users"
];

describe("Feathers application tests", () => {
  let server: Server;

  before(function(done) {
    server = app.listen(port);
    server.once("listening", () => done());
  });

  after(function(done) {
    server.close(done);
  });

  it("registeres all services", () => {
    servicePaths.forEach(path => {
      expect(app.service(path), `Registered the service ${path}`).to.be.ok;
    });
  });
});
