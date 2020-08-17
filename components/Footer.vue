<template>
  <div class="footer__net">

    <span class="limit">{</span>

    <Social />

    <span class="limit">}</span>

    <div class="by">
      with <a href="//github.com/jorgechato/whereisjorge.today"><fa :icon="['fas', 'heart']" /></a> by Jorge Chato
    </div>

  </div>
</template>

<script>
import Social from '~/components/Social'

export default {
  components: {
    Social,
  },
}
</script>

<style lang="scss" scoped>
$color: rgba(white, .3);


.footer__net{
  padding-top: 2em;
  padding-bottom: 2em;
  text-align: center;

  .by{
    padding-top: 2em;
    color: rgba(white, .1);

    .fa-heart {
      font-size: inherit;
      color: rgba(white, .1);

      &:hover {
        font-size: inherit;
        color: rgba(red, .6);
      }
    }
  }

  .limit{
    font-size: 4em;
    color: $color;
  }
}

.limit, .social {
  display: inline-block;
  vertical-align: middle;
}

.social {
  padding-top: 1em;
}

</style>
