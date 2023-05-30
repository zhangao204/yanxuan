<template>
    <q-banner inline-actions class="bg-green text-white">
        <h5 class="text-center">活动已结束，感谢参与</h5>
    </q-banner>
    <div class="view home q-pa-sm">
    </div>
</template>

<script>
export default {
    name: "HomeView",

    setup() {
        return {}
    }
}
</script>

<style lang="sass" scoped>
.home
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  padding-bottom: 24px

.item
  padding: 24px 14px 0 14px

@media screen and (max-width: 680px)
  .home
    grid-template-columns: 1fr

</style>