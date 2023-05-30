<template>
    <div class="component">
        <q-card flat bordered>
            <q-card-section horizontal>
                <q-card-section class="q-pt-xs">
                    <div class="text-overline">{{ site['type'] }}</div>
                    <div class="text-h5 q-mt-sm q-mb-xs">
                        {{ site['title'] }}
                    </div>
                    <div>
                        <q-badge color="red" v-show="!site['availability']">
                            国内不可达
                            <q-icon name="warning" color="white" class="q-ml-xs"/>
                        </q-badge>
                    </div>
                    <div class="text-caption">
                        {{ site['summary'] }}
                    </div>
                </q-card-section>
                <q-card-section class="col-5 flex flex-center">
                    <q-img
                            class="rounded-borders"
                            src="/yanxuan/images/cover.jpg"
                    />
                </q-card-section>
            </q-card-section>

            <q-separator/>

            <q-card-actions>
                <a target="_blank" :href="site['url']">
                    <q-btn flat color="primary">
                        前往该网站
                    </q-btn>
                </a>
            </q-card-actions>

            <q-separator/>

            <q-card-actions>
                <q-btn flat color="dark">
                    <div class="text-body1">
                        综合评分:
                    </div>
                </q-btn>
                <q-rating
                        v-model="site['rating']['comprehensive']"
                        size="16px"
                        color="orange"
                        :max="5"
                        disable/>
                <q-space/>

                <q-btn
                        color="grey"
                        round
                        flat
                        dense
                        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                        @click="expanded = !expanded"
                />
            </q-card-actions>

            <q-slide-transition>
                <div v-show="expanded">
                    <q-separator/>
                    <q-card-section class="text-subitle2">
                        <div>
                            网页访问速度:
                            <q-rating
                                    v-model="site['rating']['speed']"
                                    size="14px"
                                    color="purple"
                                    :max="5"
                                    disable/>
                        </div>

                        <div>
                            视频播放流畅度:
                            <q-rating
                                    v-model="site['rating']['fluency']"
                                    size="14px"
                                    color="purple"
                                    :max="5"
                                    disable/>
                        </div>

                        <div>
                            内容分类:
                            <q-rating
                                    v-model="site['rating']['category']"
                                    size="14px"
                                    color="purple"
                                    :max="5"
                                    disable/>
                        </div>

                        <div>
                            页面布局:
                            <q-rating
                                    v-model="site['rating']['layout']"
                                    size="14px"
                                    color="purple"
                                    :max="5"
                                    disable/>
                        </div>

                        <div>
                            导航:
                            <q-rating
                                    v-model="site['rating']['nav']"
                                    size="14px"
                                    color="purple"
                                    :max="5"
                                    disable/>
                        </div>

                        <div>
                            广告:
                            <q-rating
                                    v-model="site['rating']['ad']"
                                    size="14px"
                                    color="purple"
                                    :max="5"
                                    disable/>
                        </div>
                    </q-card-section>
                </div>
            </q-slide-transition>
        </q-card>
    </div>
</template>

<script>
import {ref} from 'vue'

export default {
    name: "SiteCard",

    props: {
        site: {
            type: Object,
            required: true
        }
    },

    setup(props) {
        return {
            expanded: ref(false),
        }
    }
}
</script>

<style lang="sass" scoped>

</style>