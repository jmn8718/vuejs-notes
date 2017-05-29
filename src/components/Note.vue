<template>
  <div class="note_wrapper mdc-elevation--z1" :class="{ archived: note.archived }">
    <div class="note_wrapper_content">
      <h1 class="mdc-typography--headline mdc-typography--adjust-margin">{{ note.title | toTitle }}</h1>
      <p class="mdc-typography--body1 mdc-typography--adjust-margin">{{ note.body }}</p>
    </div>
    <div class="note_wrapper_actions">
      <i class="material-icons mdc-tab__icon" :aria-label="archiveIcon" @click="archiveNote">{{ archiveIcon }}</i>
      <i class="material-icons mdc-tab__icon" aria-label="Delete" @click="deleteNote">delete</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    note: Object
  },
  computed: {
    archiveIcon() {
      return this.note.archived ? 'unarchive' : 'archive';
    }
  },
  methods: {
    deleteNote() {
      this.$emit('deleteNote');
    },
    archiveNote() {
      this.$emit('archiveNote');
    }
  }
}
</script>

<style scoped lang="scss">
.note_wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #FFFFFF;
  font-size: 14px;
  line-height: 19px;
  padding: 16px;
  box-sizing: border-box;
  white-space: pre-wrap;
  word-wrap: break-word;
  height: 100%;
}
.archived {
  background-color: #E0E0E0;
}
.note_wrapper_content {
  display: flex;
  flex-direction: column;
}
.note_wrapper_actions {
  display: flex;
  justify-content: flex-end;
}
.note_wrapper_actions .mdc-tab__icon {
  margin: 0;
  cursor: pointer;
}
</style>
