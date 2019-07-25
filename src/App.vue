<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <div v-for="(item, index) in tabPath" :key="index">
      <v-tabbar v-show="$route.path === item"></v-tabbar>
    </div>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  name: 'App',
  data() {
    return {
      tabPath: [
        '/',
        '/home',
        '/spot',
        '/mine'
      ]
    }
  },
  components: {
    'v-tabbar': tabbar
  }
}
</script>

<style lang="stylus">
</style>
