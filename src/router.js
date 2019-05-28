import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function loadView(view) {
  return () =>
    import( /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: loadView("public/home")
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: loadView("public/sign-in")
    },
    {
      path: "/students",
      name: "students",
      component: loadView("public/student-page"),
      children: [{
          path: "info",
          component: loadView("student-page/landing")
        },
        {
          path: "validation",
          component: loadView("student-page/form")
        }
      ]
    },
    {
      path: "/business",
      name: "business",
      component: loadView("public/business-page"),
      children: [{
          path: "info",
          component: loadView("business-page/landing")
        },
        {
          path: "validation",
          component: loadView("business-page/form")
        }
      ]
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: loadView("dashboard/index"),
      children: [{
          path: "/",
          name: "index",
          component: loadView("dashboard/overview")
        },
        {
          path: "wallet",
          component: loadView("dashboard/Wallet")
        },
        {
          path: "bitcoin",
          component: loadView("dashboard/Bitcoin")
        },
        {
          path: "payments",
          component: loadView("dashboard/Payment")
        },
        {
          path: "transfer",
          component: loadView("dashboard/transfer")
        },
        {
          path: "tokens",
          component: loadView("dashboard/tokens")
        },
        {
          path: "loans",
          component: loadView("dashboard/loans")
        },
        {
          path: "discounts",
          component: loadView("dashboard/discounts")
        },
        {
          path: "activate-account",
          component: loadView("dashboard/Activate-account")
        },
        {
          path: "*",
          redirect: "/"
        }
      ]
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});