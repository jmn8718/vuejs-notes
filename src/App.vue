<template>
  <div>
    <toolbar :title="title"></toolbar>
    <div class="mdc-toolbar-fixed-adjust"></div>
    <div v-if="notes.length <= 10">
      <new-note @addNote="addNote"></new-note>
    </div>
    <div id="app">
      <note v-for="(note, index) in notes" v-bind:title="note.title" :body="note.body" :key="index"></note>
    </div>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import NewNote from './components/NewNote.vue';
import Note from './components/Note.vue';

export default {
  data () {
    return {
      title: 'Notes',
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
  components: {
    toolbar: Toolbar,
    'new-note': NewNote,
    note: Note,
  },
  methods: {
    addNote(note) {
      this.notes.push(Object.assign({
        archived: false
      }, note));
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
  min-width: 360px;
  background-color: #e8e8e8;
  max-width: 100%;
}

#app {
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px
}
</style>
