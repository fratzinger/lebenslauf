import { BaseModel } from "../client";

export default class Job extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Job";
  static instanceDefaults() {
    return {
    };
  }

  static setupInstance(data, { models, store }) {
    data.start = data.start && new Date(data.start);
    data.end = data.end && new Date(data.end);

    data.createdAt = data.createdAt && new Date(data.createdAt);
    data.updatedAt = data.updatedAt && new Date(data.updatedAt);
    data.deletedAt = data.deletedAt && new Date(data.deletedAt);

    return data;
  }
}
