<template>
  <div class="container">
    <div class="title">
      <div class="content">
        <h1>Jorge is currently</h1>
        <h2>in ____</h2>
        <p>Leaving for Columbus in 21 days</p>
      </div>
    </div>
    <my-map/>
  </div>
</template>

<script>
import Map from '~/components/Map.vue'


export default {
  layout: 'main',
  components: {
    'my-map': Map
  }
}
</script>

<style lang="scss" scope>
.title {
  position: absolute;
  color: white;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: center;
  background: rgba(0, 0, 0, .8);

  .content {
    margin-top: 30vh;
    font-size: 2em;
  }
}
</style>
