<template>
  <nav id="nav" class="navbar is-transparent is-fixed-top"
        ref="nav">

    <MicroLogo />

    <nuxt-link class="menu" :to="'/mochila'">Mochila</nuxt-link>
    <a class="menu"
      href="//www.youtube.com/channel/UCvYE-kjfF_fkg6akr5DNvdw?view_as=subscriber">
       Youtube
    </a>
    <a class="menu"
      href="//www.instagram.com/jorgechato">
       Instagram
    </a>

  </nav>
</template>

<script>
import MicroLogo from '~/components/Header/MicroLogo'

export default {
  name: 'Nav',
  components: {
    MicroLogo,
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
