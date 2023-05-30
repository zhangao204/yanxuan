<template>
    <q-layout view="hHh lpR fFf" class="bg-grey-1">
        <q-header elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
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
                        澳叔严选
                    </q-toolbar-title>
                </q-btn>

                <q-space/>

                <div class="YX__toolbar-input-container row no-wrap">
                    <q-input disable dense outlined square v-model="search" placeholder="搜索不可用"
                             class="bg-white col"/>
                    <q-btn disable class="YX__toolbar-input-btn" color="grey-3" text-color="grey-8" icon="search"
                           unelevated/>
                </div>

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

                    <q-card flat bordered class="q-ma-md">
                        <q-card-section>
                            <div class="text-h6">评分细则</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <b>测试环境</b>
                            <br>
                            网络: 中国联通300M
                            <br>
                            设备: 标准办公台式机
                        </q-card-section>

                        <q-separator inset/>

                        <q-card-section>
                            评级来自于我的片面与刻薄
                        </q-card-section>
                    </q-card>

                    <q-card dark bordered class="bg-grey-9 q-ma-md">
                        <q-card-section>
                            <div class="text-h6">免责声明</div>
                            <div class="text-subtitle2">shadowsong</div>
                        </q-card-section>

                        <q-separator dark inset/>

                        <q-card-section>
                            本站所有视频和图片均为网友自发上传，本网站只提供web页面服务，并不提供资源存储，
                            若本站收录的内容无意侵犯了贵司版权，或是存在不适宜的内容，请发邮件至
                            <u>stoutstorm@yeah.net</u> ，我们会尽快进行调整。
                        </q-card-section>
                    </q-card>
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
                {icon: 'home', text: '首页', url: '/'}
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