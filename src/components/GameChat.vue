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

    <form class="chat-input-form" @submit="submitText">
      <div class="input-wrapper">
        <input
          :value="inputText"
          type="text"
          placeholder="Say something"
          class="chat-input"
          autocomplete="off"
          @input="setInputText"
        />

        <div class="emoji-icon">
          <span id="emojis">😬</span>
        </div>
      </div>

      <b-popover
        target="emojis"
        placement="top"
        :triggers="['click', 'focus']"
      >
        <span
          v-for="emoji in emojiDrawer"
          :key="emoji"
          class="pop-emoji"
          @click="addEmojiToText(emoji)"
        >
          {{ emoji }}
        </span>
      </b-popover>
    </form>
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

export default {
  components: {
  },
  data () {
    return {
      visible: true,
      inputText: '',
      chatStreamList: Array(16).fill({ username: 'michaeljackson', text: 'billie jean, you rock my world, black & white' }),
      // eslint-disable-next-line
      emojiDrawer: ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋']
    }
  },
  computed: {
    ...mapState('user', {
      username: 'username',
      userColor: 'userColor'
    })
  },
  mounted () {
    this.scrollToBottomOfChat()
    setInterval(() => {
      this.chatStreamList.push({ username: 'lebronjames', text: 'this is basketball' })
      this.scrollToBottomOfChat()
    }, 5000)
  },
  methods: {
    toggleChat () {
      this.visible = !this.visible
      this.$emit('toggle', this.visible)
    },
    setInputText (e) {
      this.inputText = e.target.value
    },
    addEmojiToText (em) {
      this.inputText += ` ${em}`
    },
    submitText (e) {
      if (e) e.preventDefault()
      if (this.inputText !== '') {
        this.chatStreamList.push({ username: this.username, text: this.inputText })
        this.inputText = ''

        this.scrollToBottomOfChat()
      }
    },
    scrollToBottomOfChat () {
      setTimeout(() => {
        const chatStream = document.getElementById('chat-stream')
        chatStream.scrollTop = chatStream.scrollHeight
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
.chat-input-form {
  padding: 0 8px;
}
.input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.chat-input {
  width: 100% !important;
  background-color: transparent !important;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  height: 40px;
  border-color: $colGray;
  color: $colGray;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 148%;
}
.chat-input:focus {
  background-color: transparent !important;
}
.emoji-icon {
  max-width: 24px !important;
  max-height: 24px !important;
  position: absolute;
  right: 16px;
}
.pop-emoji {
  margin: 2px;
}
</style>
