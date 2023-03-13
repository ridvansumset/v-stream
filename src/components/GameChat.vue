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
        <div v-for="(el, i) in chatStreamList" :key="i">
          {{ `${el.username}: ${el.text}` }}
        </div>
      </div>
    </div>

    <form class="chat-input-form" @submit="(e) => submitText(e, true)">
      <chat-input
        id="chat-input"
        v-model="inputText"
        placeholder="Say something"
        left-slot
        @input="submitText(null, false)"
      />
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
import ChatInput from './ChatInput'

export default {
  components: {
    ChatInput
  },
  data () {
    return {
      visible: true,
      inputText: '',
      chatStreamList: Array(25).fill({ username: 'ridvansumset', text: 'chat text' }),
      // eslint-disable-next-line
      emojiDrawer: ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋']
    }
  },
  methods: {
    toggleChat () {
      this.visible = !this.visible
      this.$emit('toggle', this.visible)
    },
    async submitText (e, pressedEnter) {
      if (e) e.preventDefault()
      if (pressedEnter && this.inputText !== '') {
        this.chatStreamList.push({ username: 'ridvansumset', text: this.inputText })
        this.inputText = ''

        setTimeout(() => {
          const chatStream = document.getElementById('chat-stream')
          chatStream.scrollTop = chatStream.scrollHeight
        }, 100)
      }
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
}
.chat-input-form {

}
</style>
