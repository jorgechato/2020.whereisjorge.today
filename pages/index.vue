<template>
  <div>

    <my-logo
      :thumbnail="location.current.thumbnail"
      :country="location.current.country"/>

      <div id="location-txt">

        <h3>is currently in</h3>
        <h2>
          <a
            target="_blank"
            :href="'//www.google.com/maps/@'+location.current.lat+','+location.current.lon+',15z'">
            {{ location.current.city }}
          </a>
        </h2>

        <br>

        <h4 v-if="location.next.length">Next trips</h4>
        <div id="next-location" v-for="value in location.next">
          <div v-for="cities in value.steps">
            <span id="country">{{ cities.metadata.country }}</span> {{ cities.metadata.city }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Logo from '~/components/Header/Logo'


export default {
  components: {
    'my-logo': Logo,
  },
  data() {
    return {
    }
  },
  async asyncData({ $axios }) {
    const currentLocation = await $axios.get('/location/current');
    const nextLocation = await $axios.get('/location/next');

    return {
      location: {
        current: currentLocation.data,
        next: nextLocation.data,
      },
    }
  }
}
</script>

<style lang="scss" scope>
#next-location {
  font-family: inherit;
  text-align: left;
  display: inline-block;

  .stop-bar, .start-point, .end-point {
    background-color:rgb(50,50,50)!important;
  }

  #country {
    color: rgba(white,.4);
  }
}

#location-txt {
  text-align: center;

  h3, h4 {
    color: rgba(white,.7);
  }

  h2 {
    a {
      transition: all .1s ease-in-out;

      &:hover {
        color: white;
        font-size: 1.05em;
      }
    }
  }
}
</style>
