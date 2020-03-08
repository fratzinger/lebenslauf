import activities from "./activities.init";
import characteristics from "./characteristics.init";
import jobs from "./jobs.init";
import journals from "./journals.init";
import publications from "./publications.init";
import skills from "./skills.init";
import studies from "./studies.init";
import urls from "./urls.init";
import users from "./users.init";

const asObject = {
  activities,
  characteristics,
  jobs,
  journals,
  publications,
  skills,
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
  skills,
  studies,
  urls,
  users,
  asArray as default
};
