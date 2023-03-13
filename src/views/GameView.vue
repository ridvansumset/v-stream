<template>
  <div class="game">
    <main class="main-content">
      <div class="video-stream"></div>
    </main>

    <game-chat></game-chat>
  </div>
</template>

<script>
import { GameChat } from '@/components'

export default {
  components: {
    GameChat
  },
  data () {
    return {
      chatVisible: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.game {
  min-height: 100vh;
}
.main-content {
  width: 100%;
  min-height: 100vh;
}
.video-stream {
  width: calc(100% - $chatWidth);
  height: 600px;
  background-color: gray;
  @media all and (max-width: $breakpointSM) {
    width: 70%; // 100% - 30% (chat width is 30% for mobile)
  }
}
</style>
