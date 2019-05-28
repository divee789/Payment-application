<template>
    <div class="business-page">
        <app-nav></app-nav>
        <app-header></app-header>
        <app-body></app-body>
        <app-sub-body></app-sub-body>
        <app-footer></app-footer>
    </div>
</template>
<script>
export default {
     components: {
    "app-nav": () => import("@/components/business/header/nav"),
    "app-header": () => import("@/components/business/header/header"),
    "app-body": () => import("@/components/business/body/body"),
    "app-sub-body": () => import("@/components/business/content/content")
//     "app-reason": () => import("@/components/student/reason/reason"),
//     "app-about": () => import("@/components/student/about/about")
  }
}
</script>

