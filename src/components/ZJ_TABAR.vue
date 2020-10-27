<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'tabbar',
}
</script>
<style>
#tabbar{ position:fixed; width: 100%; bottom: 0; display:flex; box-shadow: 0px -3px 3px rgba(100, 100, 100, 0.2);}

</style>
