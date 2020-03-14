import { expect } from "chai";
import app from "../../src/app";
import { NotAuthenticated } from "@feathersjs/errors";

const serviceName = "api/v1/uploads";

const service = app.service(serviceName);

describe("'uploads' service", () => {
  it("registered the service", () => {

    expect(service, "Registered the service").to.be.ok;
    expect(service.Model, "has Model").to.exist;
  });

  it("'create' has activated authentication", async () => {
    await app.service(serviceName)
      .find({ query: {}, provider: "socketio" })
      .catch(e => expect(e).to.be.an.instanceof(NotAuthenticated) );
  });
});
