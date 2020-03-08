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
  name: {
    type: String,
    default: ""
  },
  value: {
    type: String,
    default: ""
  }
};

const propsArr = Object.keys(props).map(key => { return { name: key, ...props[key] }; });
const defaults = Object.assign({}, ...propsArr.filter(x => typeof x.default !== "undefined").map(x => { return { [x.name]: x.default }; }));

export default class Characteristic extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Characteristic";

  static props = props;
  static defaults = defaults;

  static instanceDefaults() {
    return {
      ...Characteristic.defaults
    };
  }

  static setupInstance(data, { models, store }) {
    for (let i = 0, l = propsArr.length; i < l; i++) {
      const prop = propsArr[i];
      if (!data[prop.name]) { continue; }
      if (prop.type.name === "Date") { data[prop.name] = new Date(data[prop.name]); }
    }

    return data;
  }
}
