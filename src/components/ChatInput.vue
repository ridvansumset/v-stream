<template>
  <div>
    <div class="input-wrapper">
      <input
        :id="id"
        :value="value"
        :type="type"
        :disabled="disabled"
        :placeholder="placeholder"
        class="base-input"
        autocomplete="off"
        @input="updateValue($event.target.value)"
      />

      <div class="input-icon input-icon-right">
        😬
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: undefined
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    fontSizeClass: {
      type: String,
      default: null
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.input-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.base-input {
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
.base-input:focus {
  background-color: transparent !important;
}
.input-icon {
  max-width: 24px !important;
  max-height: 24px !important;
  position: absolute;
}
.input-icon-right {
  right: 16px;
}
// keep custom background-color when choosing from <data-list />
// more info: https://stackoverflow.com/a/68240841/10468785
input:-webkit-autofill,
input:-webkit-autofill:focus {
  transition: background-color 600000s 0s, color 600000s 0s;
}
// hide the step buttons for number inputs
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
