<template>
  <div class="container">
    <div class="title">
      <div class="content">
        <h1>{{ name }} is currently</h1>
        <h2>in {{ location.city }}</h2>
        <p>
          Leaving for {{ next_locations[0].country }} {{ daysUntilTrip }}
        </p>
      </div>
    </div>
    <my-map
      :origin="origin"
      :location="location"/>
  </div>
</template>

<script>
import Map from '~/components/Map.vue'
import axios from 'axios'
import moment from 'moment'


export default {
  layout: 'main',
  components: {
    'my-map': Map
  },
  data() {
    return {
      origin: {
        city: "Amsterdam",
        country: "Netherlands",
        lat: 52.1326,
        lon: 5.2913,
        timezone_id: ""
      }
    }
  },
  asyncData(context) {
    return axios.get('http://localhost:5000/v1/location')
      .then(res => {
        let checkIn = moment.unix(res.data.next_locations[0].check_in)

        return {
          name: res.data.name,
          city: res.data.city,
          next_locations: res.data.next_locations,
          location: res.data.location,
          daysUntilTrip: moment(checkIn).fromNow()

        }
      })
      .catch(e => context.error(e));
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
