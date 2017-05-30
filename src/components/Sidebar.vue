<template>
  <nav class="mdc-permanent-drawer">
    <div class="mdc-list-group">
      <nav class="mdc-list">
        <a
          v-for="(option, index) in options"
          :key="index"
          class="mdc-list-item"
          href=""
          :class="{ 'mdc-permanent-drawer--selected': active === option.icon}"
          @click.prevent="setActive(option.icon)"
        >
          <i class="material-icons mdc-list-item__start-detail" aria-hidden="true">
            {{ option.icon }}
          </i>
          {{ option.text }}
        </a>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    active: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      options: [
        {
          icon: 'dashboard',
          text: 'Notes'
        },
        {
          icon: 'archive',
          text: 'Archived'
        },
        {
          icon: 'delete',
          text: 'Deleted'
        },
        {
          icon: 'help',
          text: 'Help'
        }
      ],
    }
  },
  methods: {
    setActive(active) {
      this.$emit('changeActive', active);
    }
  }
}
</script>

<style scoped lang="scss">
.mdc-permanent-drawer {
  min-width: 240px;
}
</style>
