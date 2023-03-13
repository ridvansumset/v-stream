<template>
  <div class="home">
    <home-catalog />

    <div class="recommended"></div>

    <div class="most-followed"></div>
  </div>
</template>

<script>
import { HomeCatalog } from '@/components'

export default {
  components: {
    HomeCatalog
  }
}
</script>

<style scoped lang="scss">
</style>
