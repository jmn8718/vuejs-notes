<template>
  <div class="mdc-elevation--z2 wrapper">
    <form>
      <input v-model="title" placeholder="Title" v-show="isTakingNote">
      <textarea
        v-model.lazy="body"
        :rows="isTakingNote ? 3 : 1"
        placeholder="Take a note..."
        @focus="startTakingNote"
      ></textarea>
      <div class="buttons" v-show="isTakingNote">
        <button class="mdc-button button" @click.prevent="resetNote">RESET</button>
        <button class="mdc-button button" @click.prevent="addNote" :disabled="!isFormValid">DONE</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      body: '',
      isTakingNote: false
    }
  },
  computed: {
    isFormValid() {
      return this.title && this.body;
    }
  },
  methods: {
    startTakingNote() {
      this.isTakingNote = true;
    },
    addNote() {
      this.$emit('addNote', {
        title: this.title,
        body: this.body
      });
      this.resetNote();
    },
    resetNote() {
      this.title = '';
      this.body = '';
      this.isTakingNote = false;
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 50%;
  margin: 0 auto;
  display: flex;
  background-color: #FFF;
}
form {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 8px;
  & > input, textarea {
    font-family: 'Roboto';
    min-height: 24px;
    line-height: 24px;
    font-size: 16px;
    padding: 8px;
    background-color: transparent;
    border: none;
    border-width: 0;
  },
  & > *:focus {
    outline: none;
    box-shadow: none;
  }
}
textarea {
  resize: none;
}
.buttons {
  display: flex;
  justify-content: flex-end;
}
.button {
  margin: 0 8px;
}
</style>
