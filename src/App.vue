<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  name: 'App',
  components: {
    'v-tabbar': tabbar
  }
}
</script>

<style lang="stylus">
</style>
