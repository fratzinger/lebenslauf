import { BaseModel } from "../client";

export default class User extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "User";
  static instanceDefaults() {
    return {
      email: null,
      pasword: null
    };
  }

  static setupInstance(data, { models, store }) {
    data.createdAt = data.createdAt && new Date(data.createdAt);
    data.updatedAt = data.updatedAt && new Date(data.updatedAt);
    data.deletedAt = data.deletedAt && new Date(data.deletedAt);

    return data;
  }
}
