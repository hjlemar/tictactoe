<template>
  <div  class="form-group">{{ token }}</div>
</template>

<script>
export default {
  props: ['token'],
};
</script>

<style scoped>
    div {
        width: 100px;
        height: 100px;
        background-color: lightblue;
        margin: 2px;
        border-radius: 15px;
    }
</style>


