<template>
  <header :class="">
    <ul>
      <li>
        <nuxt-link to="/" class="banner">whereisjorge</nuxt-link>
      </li>
      <li>
        <a href="//jorgechato.com">ARTICLES</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scope>
$nav-height: 60px;

header {
  color: white;
  height: $nav-height;
  position: sticky;
  z-index: 1;
  border-bottom: 1px solid hsla(0,0%,100%,.1);
  top: 0;
  padding: 0 10%;

  .banner {
    font-weight: 700;
    font-size: 28px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    li {
      float: left;
      line-height: $nav-height;

      &:nth-child(even) {
        margin-left: 2em;
      }
    }
  }

  a {
    color: white;
    text-decoration: none;

    &:hover{
      color: white;
    }
  }
}
</style>
