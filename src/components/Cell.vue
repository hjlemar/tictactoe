<template>
  <div>{{ token }}</div>
</template>

<script>
export default {
  props: ['token'],
};
</script>

<style scoped>
    div {
      width: 50px;
      height: 50px;
      background-color: lightblue;
      margin: 2px;
      border-radius: 15px;
    }
</style>


