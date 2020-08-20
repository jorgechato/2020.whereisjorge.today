<template>
  <div class="social">

    <a href="//jorgechato.com"><fa :icon="['fas', 'stream']" /></a>
    <a href="//gumroad.com/l/twitch-lightroom-presets-donde-esta-jorge"><fa :icon="['fas', 'shopping-cart']" /></a>
    <a href="//open.spotify.com/show/6HPGljWQbxmnxqhWNNMUpX"><fa :icon="['fab', 'spotify']" /></a>
    <a href="//www.instagram.com/whereisjorge.today"><fa :icon="['fab', 'instagram']" /></a>

  </div>
</template>

<script>
export default {
  name: 'Social'
}
</script>

<style lang="scss" scoped>
$youtube: #ff0000;
$spotify: #1db954;
$stream: white;
$instagram: #c13584;
$shopping-cart: #034EA2;
$color: rgba(white, .3);


.svg-inline--fa{
  font-size: 2em;
  padding: 0 .2em;
  text-decoration: none;
  color: $color;
}

.fa-youtube:hover{
  color: $youtube;
}

.fa-shopping-cart:hover{
  color: $shopping-cart;
}

.fa-spotify:hover{
  color: $spotify;
}

.fa-stream:hover{
  color: $stream;
}

.fa-instagram:hover{
  color: $instagram;
}
</style>

