<template>
  <div id="landing-page">
    <div id="overlay">
      <div id="body2">
        <app-head></app-head>
        <app-header></app-header>
      </div>
       <app-about></app-about>
      <app-reason></app-reason>
      <app-finance></app-finance>
     
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "app-head": () => import("@/components/student/head"),
    "app-header": () => import("@/components/student/header"),
    "app-finance": () => import("@/components/student/content"),
    "app-reason": () => import("@/components/student/reason/reason"),
    "app-about": () => import("@/components/student/about/about")
  }
};
</script>

<style lang='scss' scoped>
#landing-page {
  width: 100%;
  overflow: hidden;
}
#body2 {
  position: relative;
  padding: 0 7%;
}

 h1 {
    line-height: 1.2;
    letter-spacing: -1px;
    margin-bottom: 4rem;
    font-size: 2.5rem;
    position:relative;
    z-index:999;

    @media screen and (min-width: $breakpoint-tablet) {
        font-size: 3.2rem;
    }
}
</style>


