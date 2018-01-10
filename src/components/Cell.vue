<template>
  <div class="p-2">{{ token }}</div>
</template>

<script>
export default {
  props: ['token'],
};
</script>

<style scoped>
    div {
      width: 40px;
      height: 40px;
      background-color: lightblue;
      margin: 2px;
      border-radius: 15px;
    }
</style>


