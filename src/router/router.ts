import Home from "../views/Home.vue";
import Doc from "../views/Doc.vue";
import Button from "../components/button.vue";
import Switch from "../components/switch.vue";
import Dialog from "../components/dialog.vue";
import Tabs from "../components/tabs.vue";
import Start from "../views/Start.vue"
import Introduce from "../views/Introduce.vue"
import Install from "../views/Install.vue"
import { createWebHashHistory, createRouter } from "vue-router";
const history = createWebHashHistory();
export const router = createRouter({
  history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        {
          path: "start",
          component: Start,

        },
        {
          path: "introduce",
          component: Introduce,

        },
        {
          path: "install",
          component: Install,

        },
        {
          path: "button",
          component: Button,
        },
        {
          path: "switch",
          component: Switch,
        },
        {
          path: "dialog",
          component: Dialog,
        },
        {
          path: "tabs",
          component: Tabs,
        },
      ],
    },
  ],
});
