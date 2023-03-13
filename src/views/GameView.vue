<template>
  <div class="game">
    <main class="main-content" :class="chatVisible ? '' : 'main-content-full-width'">
      <div class="video-stream">
        <h2>VIDEO STREAM</h2>
      </div>

      <div class="data-container">
        <div class="stream-info">
          <div class="streamer-pp-container">
            <img src="@/assets/logo.png" alt="streamer profile photo" width="40" height="40" />
          </div>

          <div class="stream-detail-info">
            <p class="streamer-name">
              {{ `@${username}` }}
            </p>

            <p class="stream-title">
              {{ title }}
            </p>
          </div>
        </div>

        <game-donation />
      </div>
    </main>

    <game-chat
      @toggle="(v) => chatVisible = v"
    />
  </div>
</template>

<script>
import { GameChat, GameDonation } from '@/components'
import { mapState } from 'vuex'

export default {
  components: {
    GameChat,
    GameDonation
  },
  data () {
    return {
      chatVisible: true
    }
  },
  computed: {
    ...mapState('streamer', {
      username: 'username',
      title: 'title'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.game {
  min-height: 100vh;
}
.main-content {
  width: calc(100% - $chatWidth);
  min-height: 100vh;
  @media all and (max-width: $breakpointSM) {
    width: 70%; // 100% - 30% (chat width is 30% for mobile)
  }
}
.main-content-full-width {
  width: 100% !important;
}
.video-stream {
  height: 600px;
  background-color: gray;
  display: grid;
  place-items: center;
}
.data-container {
  display: flex;
  justify-content: space-between;
  color: $colWhite;
  padding: 12px 24px;
  @media all and (max-width: $breakpointSM) {
    display: block;
  }
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
