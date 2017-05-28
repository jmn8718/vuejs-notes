<template>
  <div class="mdc-elevation--z1">
    <h1 class="mdc-typography--headline mdc-typography--adjust-margin">{{ title | toTitle }}</h1>
    <p class="mdc-typography--body1 mdc-typography--adjust-margin">{{ body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String
  }
}
</script>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: calc(33% - 16px);
  max-width: calc(33% - 16px);
  background-color: #FFFFFF;
  font-size: 14px;
  line-height: 19px;
  margin: 8px;
  padding: 16px;
  box-sizing: border-box;
  white-space: pre-wrap;
  word-wrap: break-word;
}
@media only screen and (max-width: 768px) {
  div {
    max-width: calc(50% - 16px);
    flex-basis: calc(50% - 16px);
  }
}
</style>
