import { BaseModel } from "../client";

const props = {
  createdAt: {
    type: Date,
    default: undefined
  },
  updatedAt: {
    type: Date,
    default: undefined
  },
  deletedAt: {
    type: Date,
    default: undefined
  },
  title: {
    type: String,
    default: ""
  },
  subtitle: {
    type: String,
    default: ""
  },
  date: {
    type: Date,
    default: null
  },
  url: {
    type: String,
    default: ""
  },
  isOpenAcces: {
    type: Boolean,
    default: false
  },
  authors: {
    type: Array,
    default: []
  },
  doi: {
    type: String,
    default: ""
  },
  abstract: {
    type: String,
    default: ""
  },
  tags: {
    type: String,
    default: []
  }
};

const propsArr = Object.keys(props).map(key => { return { name: key, ...props[key] }; });
const defaults = Object.assign({}, ...propsArr.filter(x => typeof x.default !== "undefined").map(x => { return { [x.name]: x.default }; }));

export default class Publication extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Publication";

  static props = props;
  static defaults = defaults;

  static instanceDefaults() {
    return {
      ...Publication.defaults
    };
  }

  static setupInstance(data, { models, store }) {
    for (let i = 0, l = propsArr.length; i < l; i++) {
      const prop = propsArr[i];
      if (!data[prop.name]) { continue; }
      if (prop.type.name === "Date") { data[prop.name] = new Date(data[prop.name]); }
    }

    data.date = data.date && new Date(data.date);

    data.createdAt = data.createdAt && new Date(data.createdAt);
    data.updatedAt = data.updatedAt && new Date(data.updatedAt);
    data.deletedAt = data.deletedAt && new Date(data.deletedAt);

    return data;
  }
}
