<template>
  <div id="app">
    <nav class="app-header">
      <div>
        <router-link to="/" class="app-logo">V-Stream</router-link>
      </div>

      <span class="full-name">
        {{ fullName }}
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
      fullName: 'getFullName'
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
  box-shadow: -3px 6px 4px -4px #222;
  z-index: 1000;
}
.app-logo {
  color: $colBlue;
  margin-left: 24px;
}
.app-logo:hover {
  color: $colDarkBlue;
  text-decoration: none;
}
.full-name {
  margin-right: 24px;
}
.app-content {
  margin-top: $headerHeight + 1;
  background-color: $colBlack;
}
</style>
