<template>
  <nuxt-link :to="'/'" class="logo">

    <div class="logo__top">
    J<span class="circle"></span>RGE
    </div>

    <div class="logo__bottom front">
    CH
    </div>

    <Parallax :thumbnail="thumbnail" class="logo__bottom">
    <p slot="content">{{ country | capitalize }}</p>
    </Parallax>

    <div class="logo__bottom front">
    T<span class="circle"></span>
    </div>

  </nuxt-link>
</template>

<script>
import Parallax from '~/components/Header/Parallax'

export default {
  name: 'Logo',
  props: {
    country: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  components: {
    Parallax,
  },
}
</script>

<style lang="scss" scoped>

.logo {
  margin: .5em auto .6em auto;
  font-family: "futura-bold";
  text-align: center;
  font-size: 5em;
  display: block;
  text-decoration: none;
  color: white;
  max-width: 400px;
  width: 100%;

  .circle {
    width: .8em;
    height: .8em;
    padding: 0;
    font-size: 1em;
    border-radius: 50%;
    background: white;
    display: inline-block;
  }

  .location {
    font-size: .15em;
    color: grey;
  }

  .logo__top {
    font-size: 1.1em;
    margin-bottom: -15px;
  }

  .logo__bottom {
    vertical-align: middle;
    display: inline-block;
  }

  .front {
    position: relative;
    z-index: 1;
  }
}

</style>
