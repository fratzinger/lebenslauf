import { expect } from "chai";
import { Server } from "http";
import axios from "axios";
import url from "url";

import app from "../src/app";

const port = app.get("port") || 3030;
const getUrl = (pathname?: string): string => url.format({
  hostname: app.get("host") || "localhost",
  protocol: "http",
  port,
  pathname
});

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

  it("starts and shows the index page", async () => {
    const { data } = await axios.get(getUrl());
    expect(data.indexOf("<!DOCTYPE html>") !== -1, "starts with <html> tag").to.be.ok;
  });

  describe("404", function() {
    it("shows a 404 HTML page", async () => {
      try {
        await axios.get(getUrl("path/to/nowhere"), {
          headers: {
            "Accept": "text/html"
          }
        });
        expect.fail("should never get here");
      } catch (error) {
        const { response } = error;

        expect(response.status, "is 404").to.equal(404);
        expect(response.data.indexOf("<html>") !== -1, "is html").to.be.true;
      }
    });

    it("shows a 404 JSON error without stack trace", async () => {
      try {
        await axios.get(getUrl("path/to/nowhere"));
        expect.fail("should never get here");
      } catch (error) {
        const { response } = error;

        expect(response.status, "status is 404").to.equal(404);
        expect(response.data.code, "code is 404").to.equal(404);
        expect(response.data.message, "Page not found").to.equal("Page not found");
        expect(response.data.name, "NotFound").to.equal("NotFound");
      }
    });
  });

  it("has uploads static and profilePic loading", async () => {
    const response = await axios.get(getUrl("uploads/profilePic.jpg"));
    expect(response.status, "loaded profilePic").to.equal(200);
  });

  it("registeres all services", () => {
    servicePaths.forEach(path => {
      expect(app.service(path), `Registered the service ${path}`).to.be.ok;
    });
  });
});
