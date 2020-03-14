import { expect } from "chai";
import app from "../../src/app";
import { NotAuthenticated } from "@feathersjs/errors";

const serviceName = "api/v1/users";

describe("'users' service", () => {
  it("registered the service", () => {
    const service = app.service(serviceName);

    expect(service, "Registered the service").to.be.ok;
    expect(service, "has Model").to.exist;
  });

  it("all methods have activated authentication", async () => {
    await app.service(serviceName)
      .find({ query: {}, provider: "socketio" })
      .catch(e => expect(e).to.be.an.instanceof(NotAuthenticated) );

    await app.service(serviceName)
      .get(1, { provider: "socketio" })
      .catch(e => expect(e).to.be.an.instanceof(NotAuthenticated) );

    await app.service(serviceName)
      .create({}, { provider: "socketio" })
      .catch(e => expect(e).to.be.an.instanceof(NotAuthenticated) );

    await app.service(serviceName)
      .update(-1, {}, { provider: "socketio" })
      .catch(e => expect(e).to.be.an.instanceof(NotAuthenticated) );

    await app.service(serviceName)
      .patch(-1, {}, { provider: "socketio" })
      .catch(e => expect(e).to.be.an.instanceof(NotAuthenticated) );

    await app.service(serviceName)
      .remove(-1, { provider: "socketio" })
      .catch(e => expect(e).to.be.an.instanceof(NotAuthenticated) );
  });
});
