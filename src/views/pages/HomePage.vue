<template>
    <q-banner inline-actions class="bg-orange text-white">
        注意保护个人隐私，不要相信网站中的任何赌博，借贷广告。<b>谨防诈骗，远离赌毒 !!!</b>
    </q-banner>
    <div class="view home q-pa-sm">
        <div class="q-ma-sm" v-for="item in sites">
            <SiteCard :site="item"/>
        </div>
    </div>
</template>

<script>
import SiteCard from '@/components/SiteCard.vue'
import data from '@/data/sites'
import {onMounted, ref} from 'vue'

export default {
    name: "HomeView",

    components: {SiteCard},

    setup() {
        const sites = ref([])

        onMounted(() => {
            sites.value = data
        })

        return {
            sites
        }
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