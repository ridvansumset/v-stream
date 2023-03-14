<template>
  <form class="chat-input-form" @submit="submitValue">
    <div class="input-wrapper">
      <input
        :value="value"
        type="text"
        placeholder="Say something"
        class="chat-input"
        autocomplete="off"
        @input="setValue"
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
</template>

<script>
export default {
  data () {
    return {
      value: '',
      // eslint-disable-next-line
      emojiDrawer: ['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','😋','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐️','😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','😮‍','💨','🤤','😴','😷','🤒','🤕','🤢','🤮','🤧','🥵','🥶','😶‍','🌫️','🥴','😵‍','💫','😵','🤯','🤠','🥳','😎','🤓','🧐','😕','😟','🙁','☹️','😮','😯','😲','😳','🥺','😦','😧','😨','😰','😥','😢','😭','😱','😖','😣','😞','😓','😩','😫','🥱','😤','😡','😠','🤬','😈','👿','💀','☠️','💩','🤡','👹','👺','👻','👽️','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾','🙈','🙉','🙊','👋','🤚','🖐️','✋','🖖','👌','🤏','✌️','🤞','🤟','🤘','🤙','👈️','👉️','👆️','🖕','👇️','☝️','👍️','👎️','✊','👊','🤛','🤜','👏','🙌','👐','🤲','🤝','🙏','✍️','💅','🤳','💪','🦾','🦿','🦵','🦶','👂️','🦻','👃','🧠','🦷','🦴','👀','👁️','👅','👄','💋']
    }
  },
  methods: {
    addEmojiToText (emoji) {
      this.value += ` ${emoji}`
    },
    setValue (e) {
      this.value = e.target.value
    },
    submitValue (e) {
      e.preventDefault()
      this.$emit('submit', this.value)
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

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
