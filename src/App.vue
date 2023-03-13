<template>
  <div id="app">
    <nav class="app-header">
      <div>
        <router-link to="/">V-Stream</router-link>
<!--        <router-link to="/game/:ridvan">Game</router-link>-->
      </div>

      <span>
        {{ userName }}
      </span>
    </nav>

    <router-view class="app-content" />
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
  font-family: Verdana, serif;
}
.app-header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #222;
  height: $headerHeight !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 0 24px;
  //border-bottom: solid 1px $colBorder;
  box-shadow: -3px 6px 4px -4px #222;
  z-index: 1000;
}
.app-content {
  margin-top: $headerHeight + 1;
  background-color: $colBlack;
}
</style>
