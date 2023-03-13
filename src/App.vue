<template>
  <div id="app">
    <nav class="app-header">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/game/:ridvan">Game</router-link>
      </div>

      <span>
        {{ userName }}
      </span>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', {
      userName: 'getFullName'
    })
  }
}
</script>

<style lang="scss">
@import "./styles/variables";
#app {
  color: $colWhite;
}

.app-header {
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  margin-bottom: 24px;
  border-bottom: solid 1px $colBorder;
}
</style>
