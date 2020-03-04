import { BaseModel } from "../client";

export default class Skill extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Skill";
  static instanceDefaults() {
    return {
      name: "",
      value: 0.0
    };
  }

  static setupInstance(data, { models, store }) {
    data.createdAt = data.createdAt && new Date(data.createdAt);
    data.updatedAt = data.updatedAt && new Date(data.updatedAt);
    data.deletedAt = data.deletedAt && new Date(data.deletedAt);

    return data;
  }
}
