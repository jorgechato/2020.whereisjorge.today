<template>
  <div class="container">
    <l-map
      class="map"
      ref="map"
      :zoom="zoom"
      :center="[origin.lat, origin.lon]"
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
  props: {
    location: {
      type: Object
    },
    origin: {
      type: Object
    }
  },
  data() {
    return {
      map: null,
      baseUrl: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      zoom: 5,
      bounds: null,
      options: {
        zoomControl: false,
        attributionControl: false
      },
      tileOptions: {
        maxZoom: 8,
        minZoom: 3
      },
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
        [this.location.lat, this.location.lon],
        this.zoom + 2,
        {
          animate: true,
          duration: 10
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
</style>
