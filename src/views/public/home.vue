<template>
  <div id="landing">
    <div>
      <page-head></page-head>
    </div>

    <div>
      <page-a></page-a>
    </div>

    <div>
      <app-purpose></app-purpose>
    </div>

    <div class="close">
      <app-reason></app-reason>
      <app-te></app-te>
    </div>

    <div>
      <app-start></app-start>
    </div>

    <div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    "app-purpose": () => import("@/components/landing/purpose"),
    "page-head": () => import("@/components/landing/header"),
    "page-a": () => import("@/components/landing/conA"),
    "app-start": () => import("@/components/landing/start"),
    "app-reason": () => import("@/components/landing/reason"),
    "app-te": () => import("@/components/landing/testimonial"),
    "app-footer": () => import("@/components/landing/footer")
  }
};
</script>

