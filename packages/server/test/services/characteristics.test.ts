import { expect } from "chai";
import app from "../../src/app";

const serviceName = "api/v1/characteristics";

describe("'characteristis' service", () => {
  it("registered the service", () => {
    const service = app.service(serviceName);

    expect(service, "Registered the service").to.be.ok;
    expect(service.Model, "has Model").to.exist;
  });
});
