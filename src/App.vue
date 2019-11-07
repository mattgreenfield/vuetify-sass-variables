<template>
  <div id="app">
    <v-app>
      <Hello />
    </v-app>
  </div>
</template>

<script>
import Hello from '@/components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    Hello,
  }
}
</script>

<style lang="scss">
body {
  background: $body-background;
  margin: $body-margin;
}
</style>