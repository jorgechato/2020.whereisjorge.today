<template>
  <div>
    <h4 v-if="locations.length">Next trips</h4>
    <div id="next-location" v-for="value in locations">
      <div v-for="cities in value.steps">
        <span id="country">{{ cities.metadata.country }}</span> {{ cities.metadata.city }}
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Next',
  props: {
    locations: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scope>
$countryColor: rgba(white,.4);

#next-location {
  font-family: inherit;
  text-align: left;
  display: inline-block;

  #country {
    color: $countryColor;
  }
}
</style>

