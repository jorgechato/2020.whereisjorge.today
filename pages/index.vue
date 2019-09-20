<template>
  <div class="container">
    <div class="title">
      <div class="content">
        <h1>Jorge is currently</h1>
        <h2>in ____</h2>
        <p>Leaving for Columbus in 21 days</p>
      </div>
    </div>
    <l-map
      class="map"
      ref="map"
      :zoom="zoom"
      :center="location.after"
      :options="options">
      <l-tile-layer
        :url="baseUrl"
        :options="tileOptions">
      </l-tile-layer>
    </l-map>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css'

import {LMap, LTileLayer} from 'vue2-leaflet'


export default {
  components: {
    'l-map': LMap,
    'l-tile-layer': LTileLayer
  },
  data() {
    return {
      map: null,
      baseUrl: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      zoom: 5,
      location: {
        now: [41.656837, -0.8794245],
        after: [44.67, -63.61]
      },
      bounds: null,
      options: {
        zoomControl: false,
        attributionControl: false
      },
      tileOptions: {
        maxZoom: 8,
        minZoom: 3
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.map = this.$refs.map.mapObject;
      this.initMap()
    });
  },
  methods: {
    initMap() {
      this.map.flyTo(
        this.location.now,
        this.zoom + 2,
        {
          animate: true,
          duration: 5
        }
      )
    }
  }
}
</script>

<style lang="scss" scope>
// generic transform
@mixin transform($transforms) {
  -moz-transform: $transforms;
  -o-transform: $transforms;
  -ms-transform: $transforms;
  -webkit-transform: $transforms;
  transform: $transforms;
}

.container {
  font-family: "futura";
  height: 100vh;
  width: 100%;
  background: black;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  margin: 0;
  top: 50%;
  @include transform(translateY(-50.05%));
}

.map {
  height: 100vh;
  width: 100%;
  z-index:0;
}

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
