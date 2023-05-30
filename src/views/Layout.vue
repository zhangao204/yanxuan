<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-primary text-white q-py-xs" height-hint="58">
            <q-toolbar>
                <q-btn
                        flat
                        dense
                        round
                        @click="toggleLeftDrawer"
                        aria-label="Menu"
                        icon="menu"
                />

                <q-btn flat no-caps no-wrap class="q-ml-xs" to="/">
                    <q-toolbar-title shrink class="text-weight-bold">
                        Stoutstorm Store
                    </q-toolbar-title>
                </q-btn>

                <q-space/>

                <div class="q-gutter-sm row items-center no-wrap">
                </div>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                show-if-above
                bordered
                class="bg-grey-2"
                :width="320">

            <q-scroll-area class="fit">
                <q-list padding>
                    <q-item v-for="link in menu" :key="link.text" v-ripple clickable>
                        <q-item-section avatar>
                            <q-icon color="grey" :name="link.icon"/>
                        </q-item-section>
                        <q-item-section>
                            <router-link :to="link.url">
                                <q-item-label>{{ link.text }}</q-item-label>
                            </router-link>
                        </q-item-section>
                    </q-item>

                    <q-separator class="q-my-md"/>
                </q-list>
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view/>
        </q-page-container>
    </q-layout>
</template>

<script>
import {ref} from 'vue'

export default {
    name: 'Layout',

    setup() {
        const leftDrawerOpen = ref(false)
        const search = ref('')

        function toggleLeftDrawer() {
            leftDrawerOpen.value = !leftDrawerOpen.value
        }

        return {
            leftDrawerOpen,
            search,

            toggleLeftDrawer,

            menu: [
                {icon: 'home', text: 'home', url: '/'},
                {icon: 'android', text: 'Android', url: '/'},
                {icon: 'apple', text: 'IOS', url: '/'},
            ]
        }
    }
}
</script>

<style lang="sass" scoped>
.YX
  &__toolbar-input-container
    min-width: 100px
    width: 55%

  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0, 0, 0, .24)
    max-width: 60px
    width: 100%

  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem

    &:hover
      color: #000

</style>