// Initializes the `uploads` service on path `/uploads`
import path from "path";
import { ServiceAddons } from "@feathersjs/feathers";
import { authenticate }  from "@feathersjs/express";
import multer from "multer";

import { Application } from "../../declarations";
import { Uploads } from "./uploads.class";
import createModel from "../../models/uploads.model";
import hooks from "./uploads.hooks";

// Add this service to the service type index
declare module "../../declarations" {
  interface ServiceTypes {
    "api/v1/uploads": Uploads & ServiceAddons<any>;
  }
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, "uploads"),
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${ file.originalname }`);
  }
});

const upload = multer({
  storage,
  limits: {
    fieldSize: 1e+8, // Max field value size in bytes, here it's 100MB
    fileSize: 1e+7 //  The max file size in bytes, here it's 10MB
    // files: the number of files
    // READ MORE https://www.npmjs.com/package/multer#limits
  }
});

export default function (app: Application): void {
  const paginate = app.get("paginate");
  const options = {
    Model: createModel(app),
    paginate,
    multi: true // allowing us to store multiple instances of the model, in the same request
  };

  app.use(
    "api/v1/uploads",
    (req, res, next) => {
      if (req.method !== "GET") authenticate("jwt")(req, res, next);
      else next();
    },
    upload.array("files"),
    (req, res, next) => {
      const { method } = req;
      if (req.files && method === "POST" || method === "PATCH") {
        if (req.feathers?.files) req.feathers.files = req.files;

        const body = [];
        for (let i = 0; i < req.files.length; i++) {
          const file: any = (req.files as [])[i];
          console.log(file);
          body.push({
            description: req.body.description,
            orignalName: file.originalname,
            fileName: file.filename
          });
        }
        req.body = method === "POST" ? body : body[0];
      }
      next();
    },
    new Uploads(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service("api/v1/uploads");

  service.hooks(hooks);
}
