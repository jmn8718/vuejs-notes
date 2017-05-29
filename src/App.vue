<template>
  <div>
    <toolbar :title="title"></toolbar>
    <div class="mdc-toolbar-fixed-adjust"></div>
    <div v-if="notes.length <= 10">
      <new-note @addNote="addNote"></new-note>
    </div>
    <notes-list :notes="notes" @deleteNote="deleteNote" @archiveNote="archiveNote"></notes-list>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import NewNote from './components/NewNote.vue';
import NotesList from './components/NotesList.vue';

export default {
  data () {
    return {
      title: 'Notes',
      showArchivedNotes: false,
      notes: [
        {
          title: 'note 1',
          body: 'safdasdasdasdas',
          archived: false
        },
        {
          title: 'note 2',
          body: 'safdasdaasdasdnacln  ckab cab ckjab kasdasdas',
          archived: true
        },
        {
          title: 'note 3',
          body: 'safdasdasasda  adcasc ac ada cadasdas',
          archived: false
        },
        {
          title: 'note 4',
          body: 'dasdasdasdasdasdasd',
          archived: false
        },
      ]
    }
  },
  computed: {
    filteredNotes() {
      return this.notes.filter((note) => note.archived === this.showArchivedNotes);
    }
  },
  components: {
    toolbar: Toolbar,
    'new-note': NewNote,
    'notes-list': NotesList,
  },
  methods: {
    addNote(note) {
      this.notes.push(Object.assign({
        archived: false
      }, note));
    },
    deleteNote(index) {
      this.notes.splice(index, 1);
    },
    archiveNote(index) {
      this.notes[index].archived = !this.notes[index].archived;
    }
  }
}
</script>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 100vh;
}
body {
  font-family: 'Roboto',arial,sans-serif;
  font-size: 15px;
  background-color: #e8e8e8;
  min-width: 678px;
  width: 100%;
}
</style>
