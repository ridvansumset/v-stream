<template>
  <div class="game">
    <main class="main">
      <div class="video"></div>
    </main>

    <game-chat></game-chat>
  </div>
</template>

<script>
import { GameChat } from '@/components'

export default {
  components: {
    GameChat
  }
}
</script>

<style lang="scss" scoped>
.game {
  min-height: 100vh;
}
.main {
  width: 100%;
  min-height: 100vh;
}
.video {
  width: 100%;
  height: 600px;
  background-color: gray;
}
</style>
