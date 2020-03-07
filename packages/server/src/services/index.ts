import { Application } from "../declarations";
import users from "./users/users.service";
import publications from "./publications/publications.service";
import activities from "./activities/activities.service";
import studies from "./studies/studies.service";
import journals from "./journals/journals.service";
import skills from "./skills/skills.service";
import characteristics from "./characteristics/characteristics.service";
import jobs from "./jobs/jobs.service";
import urls from "./urls/urls.service";
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(users);
  app.configure(publications);
  app.configure(activities);
  app.configure(studies);
  app.configure(journals);
  app.configure(skills);
  app.configure(characteristics);
  app.configure(jobs);
  app.configure(urls);
}
