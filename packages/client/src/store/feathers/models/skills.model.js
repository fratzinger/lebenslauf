import { BaseModel } from "../client";

import { formatDistanceStrict } from "date-fns";
import { de } from "date-fns/locale";

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
    type: Number,
    default: 0
  },
  type: {
    type: String,
    default: ""
  },
  logo: {
    type: String,
    default: ""
  },
  url: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  learnedAt: {
    type: Date,
    default: null
  },
  color: {
    type: String,
    default: null
  }
};

const propsArr = Object.keys(props).map(key => { return { name: key, ...props[key] }; });
const defaults = Object.assign({}, ...propsArr.filter(x => typeof x.default !== "undefined").map(x => { return { [x.name]: x.default }; }));

export default class Skill extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }

  static modelName = "Skill";

  static props = props;
  static defaults = defaults;

  static instanceDefaults() {
    return {
      ...Skill.defaults
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

  get knobValue() {
    return this.value;
  }

  get linearValue() {
    return this.value / 100;
  }

  get since() {
    return formatDistanceStrict(this.learnedAt, new Date(), { locale: de });
  }
}
