<template>
  <nav
    id="nav"
    class="navbar is-transparent is-fixed-top"
    ref="nav">

    <MicroLogo
      :thumbnail="thumbnail"/>

    <span v-for="link in links" :key="link.name">
    <a class="menu" v-bind:href="link.url">
      {{ link.name }}
    </a>
    </span>

  </nav>
</template>

<script>
import MicroLogo from '~/components/Header/MicroLogo'

export default {
  name: 'Nav',
  components: {
    MicroLogo,
  },
  props: {
    thumbnail: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      links: [
        {
          name: "Articles",
          url: "//jorgechato.com"
        },
        {
          name: "Twitch",
          url: "//www.twitch.tv/dondeestajorge"
        },
        {
          name: "Shop",
          url: "//gumroad.com/l/twitch-lightroom-presets-donde-esta-jorge"
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("scroll", () => {
        var navbar = document.getElementById("nav")
        var nav_classes = navbar.classList
        if(document.documentElement.scrollTop >= 300) {
          if (nav_classes.contains("shrink") === false) {
            nav_classes.toggle("shrink");
          }
        }
        else {
          if (nav_classes.contains("shrink") === true) {
            nav_classes.toggle("shrink");
          }
        }
      })
    })
  },
}
</script>

<style lang="scss" scoped>

nav{
  padding: .5em 4%;
  background: rgba(black,.9);
  position: fixed;
  z-index: 2;
  top: -6em;
  left: 0;
  right: 0;
  height: 4em;
  overflow: hidden;
  text-align: right;
  transition: .5s top;
}

nav.shrink {
  top: 0;
  transition: .5s top;
}

.logo__min, .menu {
  display: inline-block;
  vertical-align: middle;
}

.menu{
  padding-left: .5em;
  padding-top: 1.5em;
}

</style>
