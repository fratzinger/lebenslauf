import { transitions } from "components/FsTransition";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "PageIndex",
        path: "",
        component: () => import("pages/PageIndex.vue"),
        meta: {
          name: "Startseite",
          transition: {
            leaveNotOverridable: transitions.zoomIn,
            enterNotOverridable: transitions.zoomOut,
            leave: transitions.zoomIn,
            enter: transitions.zoomOut,
            overrideLeave: transitions.zoomOut,
            overrideEnter: transitions.zoomIn
          }
        }
      },
      {
        name: "PageCV",
        path: "cv",
        component: () => import("pages/PageCv.vue"),
        meta: {
          name: "Lebenslauf",
          transition: {
            leave: transitions.zoomOut,
            enter: transitions.zoomIn
          }
        }
      }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
