import activities from "./activities";
import characteristics from "./characteristics";
import jobs from "./jobs";
import journals from "./journals";
import publications from "./publications";
import studies from "./studies";
import urls from "./urls";
import users from "./users";

const asObject = {
  activities,
  characteristics,
  jobs,
  journals,
  publications,
  studies,
  urls,
  users,
};

const asArray = Object.values(asObject);

export {
  activities,
  characteristics,
  jobs,
  journals,
  publications,
  studies,
  urls,
  users,
  asArray as default
};
