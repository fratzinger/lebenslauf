import { BaseModel } from "../client";

export default class Url extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Url";
  static instanceDefaults() {
    return {
    };
  }

  static setupInstance(data, { models, store }) {
    data.createdAt = data.createdAt && new Date(data.createdAt);
    data.updatedAt = data.updatedAt && new Date(data.updatedAt);
    data.deletedAt = data.deletedAt && new Date(data.deletedAt);

    return data;
  }
}
