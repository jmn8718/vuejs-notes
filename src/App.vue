<template>
  <div class="wrapper">
    <toolbar :title="title"></toolbar>
    <div class="mdc-toolbar-fixed-adjust container">
      <sidebar :active="active" @changeActive="changeActive"></sidebar>
      <div class="container_content">
        <help v-if="active === 'help'"></help>
        <template v-else>
          <div v-if="active === 'dashboard'">
            <new-note @addNote="addNote"></new-note>
          </div>
          <notes-list :notes="filteredNotes" @deleteNote="deleteNote" @archiveNote="archiveNote"></notes-list>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import Help from './components/Help.vue';
import NewNote from './components/NewNote.vue';
import Sidebar from './components/Sidebar.vue';
import NotesList from './components/NotesList.vue';

export default {
  data () {
    return {
      title: 'Notes',
      showArchivedNotes: false,
      active: 'dashboard',
      notes: [
        {
          title: 'note 1',
          body: 'safdasdasdasdas',
          archived: false,
          deleted: false
        },
        {
          title: 'note 2',
          body: 'safdasdaasdasdnacln  ckab cab ckjab kasdasdas',
          archived: true,
          deleted: false
        },
        {
          title: 'note 3',
          body: 'safdasdasasda  adcasc ac ada cadasdas',
          archived: false,
          deleted: false
        },
        {
          title: 'note 4',
          body: 'dasdasdasdasdasdasd',
          archived: false,
          deleted: false
        },
      ]
    }
  },
  computed: {
    filteredNotes() {
      switch (this.active) {
        case 'dashboard':
          return this.notes.filter((note) => !note.archived);
        case 'archive':
          return this.notes.filter((note) => note.archived);
        case 'delete':
          return this.notes.filter((note) => note.deleted);
        default:
          return this.notes;
      }
    }
  },
  components: {
    help: Help,
    toolbar: Toolbar,
    'new-note': NewNote,
    'notes-list': NotesList,
    sidebar: Sidebar,
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
    },
    changeActive(active) {
      this.active = active;
    }
  }
}
</script>

<style lang="scss">
:root {
  --mdc-theme-primary: #FFBB00;
  --mdc-theme-text-primary-on-primary: #000;
  --mdc-theme-background: #e8e8e8;
}

body {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100%;
  height: 100vh;
  font-family: 'Roboto',arial,sans-serif;
  font-size: 15px;
  background-color: #e8e8e8;
}

.wrapper {
  width: 100%;
}
.mdc-toolbar-fixed-adjust.container {
  display: flex;
  flex: 1 1 auto;
  height: calc(100% - 64px);
  box-sizing: border-box;
}

.container .container_content {
  margin-top: 16px;
  width: 100%;
}
</style>
