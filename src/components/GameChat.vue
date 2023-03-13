<template>
  <aside class="game-chat-container">
    <div class="chat-settings">
      <div>h</div>
      <h4>STREAM CHAT</h4>
      <div>s</div>
    </div>

    <div class="chat-stream">
      <div v-for="i in 100" :key="i">asd</div>
    </div>
  </aside>
</template>

<script>
export default {}
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
}
.chat-stream {
  overflow-y: scroll;
  height: 100%;
}
</style>
