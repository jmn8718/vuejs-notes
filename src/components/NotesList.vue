<template>
  <div class="mdc-layout-grid max-width">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4" v-for="note in notes">
      <note
        v-bind:note="note"
        :key="note.id"
        @deleteNote="deleteNote(note.id)"
        @archiveNote="archiveNote(note.id)"
      ></note>
    </div>
  </div>
</template>

<script>
import Note from './Note.vue';
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
  components: {
    note: Note,
  },
  methods: {
    deleteNote(id) {
      this.$emit('deleteNote', id);
    },
    archiveNote(id) {
      this.$emit('archiveNote', id)
    }
  }
}
</script>

<style scoped lang="scss">
.max-width {
  max-width: 1024px;
  width: 100%;
}
</style>
