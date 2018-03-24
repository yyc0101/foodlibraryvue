import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import index from "../pages/index";
import detail from "../pages/detail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/detail",
      name: "detail",
      component: detail
    }
  ]
});
