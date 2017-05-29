<template>
  <div class="mdc-layout-grid max-width">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-4" v-for="(note, index) in notes">
      <note
        v-bind:note="note"
        :key="index"
        @deleteNote="deleteNote(index)"
        @archiveNote="archiveNote(index)"
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
    deleteNote(index) {
      this.$emit('deleteNote', index);
    },
    archiveNote(index) {
      this.$emit('archiveNote', index)
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
