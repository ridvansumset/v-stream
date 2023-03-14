<template>
  <aside v-if="visible" class="game-chat-container">
    <div class="wrapper">
      <div class="chat-settings">
        <b-icon-arrow-bar-right
          scale="1.2"
          class="chat-closer"
          @click="toggleChat"
        />

        <h4 class="chat-header">
          STREAM CHAT
        </h4>

        <span />

        <div v-if="chatPaused" class="chat-paused">
          <span>CHAT PAUSED</span>
        </div>
      </div>

      <div id="chat-stream" class="chat-stream">
        <p v-for="(el, i) in chatStreamList" :key="i">
          <span
            :style="{ color: username === el.username ? userColor : 'gray' }"
          >
            {{ el.username }}
          </span>:
          <span>
            {{ el.text }}
          </span>
        </p>
      </div>
    </div>

    <game-chat-input
      @submit="submitText"
    />
  </aside>

  <b-icon-arrow-bar-left
    v-else
    scale="1.4"
    class="chat-opener"
    @click="toggleChat"
  />
</template>

<script>
import { mapState } from 'vuex'
import GameChatInput from './GameChatInput'

export default {
  components: { GameChatInput },
  data () {
    return {
      visible: true,
      chatPaused: false,
      chatStreamList: Array(16).fill({ username: 'michaeljackson', text: 'billie jean, you rock my world, black & white' })
    }
  },
  computed: {
    ...mapState('user', {
      username: 'username',
      userColor: 'userColor'
    })
  },
  mounted () {
    this.startScrollListening()
    this.scrollToBottomOfChat()
    setInterval(() => {
      this.chatStreamList.push({ username: 'lebronjames', text: 'this is basketball' })
      if (!this.chatPaused) {
        this.scrollToBottomOfChat()
      }
    }, 5000)
  },
  methods: {
    startScrollListening () {
      this.getChatStream().addEventListener('scroll', this.listenForScroll)
    },
    listenForScroll () {
      const chatStream = this.getChatStream()
      // if the user scrolled close to the bottom of the chat stream
      this.chatPaused = !(chatStream.scrollTop > (chatStream.scrollHeight - chatStream.clientHeight - 10))
    },
    getChatStream () {
      return document.getElementById('chat-stream')
    },
    toggleChat () {
      this.visible = !this.visible
      this.$emit('toggle', this.visible)
    },
    submitText (value) {
      if (value !== '') {
        this.chatStreamList.push({ username: this.username, text: value })
        this.scrollToBottomOfChat()
      }
    },
    scrollToBottomOfChat () {
      setTimeout(() => {
        const chatStream = this.getChatStream()
        if (chatStream) {
          chatStream.scrollTop = chatStream.scrollHeight
        }
      }, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.game-chat-container {
  width: $chatWidth;
  position: fixed;
  top: $headerHeight;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $colBlack;
  padding-bottom: 12px;
  @media all and (max-width: $breakpointSM) {
    width: 30%;
  }
}
.chat-settings {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-bottom: solid 1px $colBorder;
  & > h4 {
    margin: 0;
  }
  @media all and (max-width: $breakpointSM) {
    padding: 6px 8px;
  }
}
.chat-closer {
  cursor: pointer;
}
.chat-opener {
  cursor: pointer;
  position: fixed;
  top: $headerHeight + 8;
  right: 4px;
}
.chat-header {
  font-size: 20px;
  @media all and (max-width: $breakpointSM) {
    font-size: 10px;
  }
}
.wrapper {
  height: calc(100% - (41px + 40px + 12px));
}
.chat-stream {
  overflow-y: scroll;
  height: 100%;
  padding-left: 12px;
  @media all and (max-width: $breakpointSM) {
    padding-left: 8px;
  }
  & > p {
    margin-bottom: 0;
    font-size: 12px;
    @media all and (max-width: $breakpointSM) {
      font-size: 8px;
    }
  }
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: $colGray;
  }
}
.chat-paused {
  position: absolute;
  top: 50px;
  left: 100px;
  border: solid 1px $colBorder;
  border-radius: 4px;
  background-color: #333;
  display: grid;
  place-items: center;
  padding: 6px 8px;
  & > span {
    font-size: 16px;
  }
}
</style>
