<template>
  <aside class="chat">
    <div v-for="i in 500" :key="i">asd</div>
  </aside>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.chat {
  width: $chatWidth;
  position: fixed;
  top: $headerHeight + 1; // add + 1 due to border height
  bottom: 0;
  right: 0;
  overflow-y: scroll;
  background-color: purple;
  @media all and (max-width: $breakpointSM) {
    width: 30%;
  }
}
</style>
