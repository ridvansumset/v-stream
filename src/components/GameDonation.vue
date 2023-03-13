<template>
  <div class="donation-container">
    <b-modal
      :visible="modalVisible"
      centered
      content-class="modal-content"
      body-class="modal-body"
      hide-header
      hide-footer
      @hide="modalVisible = false"
    >
      <div class="donate-modal">
        <h2 class="donate-modal-header">
          Adjust your donation amount below!
        </h2>

        <input
          :value="donateAmount"
          type="number"
          class="donate-modal-input"
          :min="1"
          @input="(e) => donateAmount = parseInt(e.target.value, 10)"
        />

        <button
          class="button donate-modal-button"
          :disabled="donateDisabled"
          @click="donateStreamer"
        >
          Donate
        </button>
      </div>
    </b-modal>

    <div>
      <div class="donated-amount">
        {{ `$${donatedAmount}` }}
      </div>
    </div>

    <div>
      <button class="button donate-button" @click="modalVisible = true">
        Donate
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      modalVisible: false,
      donateAmount: 100,
      donateDisabled: false
    }
  },
  computed: {
    ...mapState('streamer', {
      donatedAmount: 'donatedAmount'
    })
  },
  methods: {
    ...mapActions('streamer', {
      donate: 'donate'
    }),
    async donateStreamer () {
      this.donate({ amount: this.donateAmount })
      this.modalVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/variables";

.donation-container {
  display: flex;
}
.donated-amount {
  border: solid 1px $colGray;
  border-radius: 4px;
  margin-right: 12px;
  padding: 4px;
}
.button {
  border-radius: 4px;
  color: $colWhite !important;
  background-color: $colBlue !important;
  border: solid 1px $colBlue !important;
}
.donate-button {
  padding: 4px;
}
.donate-button:hover {
  outline: none;
  border: solid 1px $colDarkBlue !important;
  background-color: $colDarkBlue !important;
}
.donate-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 624px !important;
  margin-top: 127px;
  background-color: $colBlack;
  border: solid 1px $colBorder;
  border-radius: 8px;
  padding: 48px;
}
.donate-modal-header {
  color: $colWhite;
  margin-bottom: 24px;
}
.donate-modal-input {
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
  margin-bottom: 16px;
}
.donate-modal-input:focus {
  background-color: transparent !important;
}
.donate-modal-button {
  height: 50px;
}
// hide the step buttons for number inputs
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
