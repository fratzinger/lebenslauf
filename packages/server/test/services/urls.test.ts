import { expect } from "chai";
import app from "../../src/app";

const serviceName = "api/v1/urls";

describe("'urls' service", () => {
  it("registered the service", () => {
    const service = app.service(serviceName);

    expect(service, "Registered the service").to.be.ok;
    expect(service.Model, "has Model").to.exist;
  });
});
