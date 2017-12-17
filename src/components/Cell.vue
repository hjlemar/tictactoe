<template>
  <div  class="form-group">{{ token }}</div>
</template>

<script>
export default {
  props: ['token'],
};
</script>

<style>
    div {
        width: 100px;
        height: 100px;
        background-color: lightblue;
    }
</style>


