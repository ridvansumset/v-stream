<template>
  <aside v-if="visible" class="game-chat-container">
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

    <div class="chat-stream">
      <div v-for="i in 100" :key="i">asd</div>
    </div>
  </aside>

  <b-icon-arrow-bar-left
    v-else
    scale="1.4"
    class="chat-opener"
    @click="toggleChat"
  />
</template>

<script>
export default {
  data () {
    return {
      visible: true
    }
  },
  methods: {
    toggleChat () {
      this.visible = !this.visible
      this.$emit('toggle', this.visible)
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
  background-color: $colBlack;
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
.chat-stream {
  overflow-y: scroll;
  height: 100%;
}
</style>
