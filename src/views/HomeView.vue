<template>
  <div class="home">
    <home-catalog />

    <div class="recommended-container">
      <h2 class="recommended-header">
        Recommended streams
      </h2>

      <div class="recommended-streams">
        <div v-for="(stream, i) in streams" :key="`${stream.name}-${i}`" class="stream">
          <div
            class="stream-preview"
            v-b-hover="(hovered) => hoverStream(stream, hovered)"
            @click="goToGamePage(stream.streamer)"
          >
            <span>{{stream.previewCount}}</span>
          </div>

          <div class="stream-info">
            <div class="stream-pp-container">
              <router-link :to="{ name: 'game', params: { streamerName: stream.streamer }}" class="no-underline">
                <img src="@/assets/logo.png" alt="streamer profile photo" width="40" height="40" />
              </router-link>
            </div>

            <router-link :to="{ name: 'game', params: { streamerName: stream.streamer }}" class="no-underline">
              <p class="stream-name">{{ stream.name }}</p>
              <p class="stream-streamer">{{ stream.streamer }}</p>
              <p class="stream-category">{{ stream.category }}</p>
              <span v-for="tag in stream.tags" :key="tag" class="stream-tag">{{ tag }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="game-container">
      <h2 class="game-header">
        Most followed games
      </h2>

      <div class="game-streams">
        <div v-for="(game, i) in games" :key="`${game.name}-${i}`" class="game">
          <div class="game-preview">
          </div>

          <div class="game-info">
            <div>
              <p class="game-name">{{ game.name }}</p>
              <p class="game-viewer-count">{{ game.viewerCount }}</p>
              <span v-for="tag in game.tags" :key="tag" class="game-tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeCatalog } from '@/components'

export default {
  components: {
    HomeCatalog
  },
  data () {
    return {
      streams: [
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] },
        { name: 'Stream name', previewCount: 1, streamer: 'Jahrein', category: 'Just Chatting', tags: ['turkish', 'fun'] }
      ],
      games: [
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] },
        { name: 'Game name', viewerCount: '128K', tags: ['shooter', 'fps'] }
      ]
    }
  },
  methods: {
    hoverStream (stream, hovered) {
      if (hovered) {
        stream.previewCount += 1
      }
    },
    goToGamePage (streamer) {
      this.$router.push({ name: 'game', params: { streamerName: streamer } })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/styles/variables";

.home {
  min-height: 100vh;
}
.recommended-container, .game-container {
  padding: 24px 48px;
}
.recommended-header, .game-header {
  font-size: 20px;
  color: $colWhite;
  margin-bottom: 24px;
}
.recommended-streams, .game-streams {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;
}
.stream {
  border-radius: 4px;
}
.stream-preview {
  background-color: $colGreen;
  display: grid;
  place-items: center;
  padding: 96px 144px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  cursor: pointer;
}
.game-preview {
  background-color: $colBlue;
  padding: 144px 96px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.stream-info {
  display: flex;
  padding: 8px 12px;
  border: solid 1px $colBorder;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.game-info {
  padding: 8px 12px;
  border: solid 1px $colBorder;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.stream-pp-container {
  width: 24px;
  height: 24px;
  border: solid 2px $colWhite;
  border-radius: 25px;
  display: grid;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  margin-right: 8px;
}
.stream-name, .game-name {
  font-size: 16px;
  margin-bottom: 2px;
  color: $colWhite;
}
.stream-streamer {
  font-size: 12px;
  margin-bottom: 8px;
  color: $colGray;
}
.game-viewer-count {
  font-size: 16px;
  margin-bottom: 2px;
  color: $colGray;
}
.stream-category {
  font-size: 14px;
  margin-bottom: 8px;
  color: $colGray;
}
.stream-tag, .game-tag {
  font-size: 10px;
  border-radius: 8px;
  background-color: gray;
  padding: 2px 6px;
  margin-right: 4px;
  color: $colWhite;
}
.no-underline, .no-underline:hover {
  text-decoration: none;
}
</style>
