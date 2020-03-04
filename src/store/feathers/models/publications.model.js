import { BaseModel } from "../client";

export default class Publication extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Publication";
  static instanceDefaults() {
    return {
      title: "",
      subtile: "",
      type: "",
      date: null,
      url: "",
      isOpenAcces: false,
      authors: [],
      doi: "",
      abstract: "",
      tags: [],
      expanded: false
    };
  }

  static setupInstance(data, { models, store }) {
    data.date = data.date && new Date(data.date);

    data.createdAt = data.createdAt && new Date(data.createdAt);
    data.updatedAt = data.updatedAt && new Date(data.updatedAt);
    data.deletedAt = data.deletedAt && new Date(data.deletedAt);

    return data;
  }
}
