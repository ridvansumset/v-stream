<template>
  <div class="game">
    <main class="main-content">
      <div
        class="video-stream"
        :class="chatVisible ? '' : 'video-stream-full-width'"
      >
        <h2>VIDEO STREAM</h2>
      </div>

      <div class="data-container">
        <div class="stream-info">
          <div class="streamer-pp-container">
            <img src="@/assets/logo.png" alt="streamer profile photo" width="40" height="40" />
          </div>

          <div class="stream-detail-info">
            <p class="streamer-name">
              tenekekafalar
            </p>

            <p class="stream-title">
              Rocket League'de Elo Kasmaca !drop !settings
            </p>
          </div>
        </div>

        <div class="donation-container"></div>
      </div>
    </main>

    <game-chat
      @toggle="(v) => chatVisible = v"
    />
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
  display: grid;
  place-items: center;
  @media all and (max-width: $breakpointSM) {
    width: 70%; // 100% - 30% (chat width is 30% for mobile)
  }
}
.video-stream-full-width {
  width: 100% !important;
}
.data-container {
  display: flex;
  justify-content: space-between;
  color: $colWhite;
  padding: 12px 24px;
}
.stream-info {
  display: flex;
}
.streamer-pp-container {
  width: 32px;
  height: 32px;
  border: solid 2px $colWhite;
  border-radius: 25px;
  display: grid;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  margin-right: 8px;
}
.streamer-name {
  margin-bottom: 8px;
  cursor: pointer;
}
.stream-title {
  font-size: 20px;
}
</style>
