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
  establishment: {
    type: String,
    default: ""
  },
  icon: {
    type: String,
    default: ""
  },
  startAt: {
    type: Date,
    default: null
  },
  endAt: {
    type: Date,
    default: null
  },
  descriptions: {
    type: Array,
    default: []
  },
  skills: {
    type: Array,
    default: []
  }
};

const propsArr = Object.keys(props).map(key => { return { name: key, ...props[key] }; });
const defaults = Object.assign({}, ...propsArr.filter(x => typeof x.default !== "undefined").map(x => { return { [x.name]: x.default }; }));

export default class Activity extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Activity";

  static props = props;
  static defaults = defaults;

  static instanceDefaults() {
    return {
      ...Activity.defaults
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
