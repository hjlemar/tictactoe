/* eslint-disable */ 
<template>
  <div>{{ token }}</div>
</template>

<script>
export default {
  props: ['token', 'index']
}
</script>

<style>
    div {
        width: 100px;
        height: 100px;
        background-color: lightblue;
    }
</style>


