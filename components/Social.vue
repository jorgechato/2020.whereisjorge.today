<template>
  <div class="social">

    <a href="//jorgechato.com"><fa :icon="['fas', 'ghost']" /></a>
    <a href="//gumroad.com/l/twitch-lightroom-presets-donde-esta-jorge"><fa :icon="['fas', 'camera-retro']" /></a>
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
$ghost: white;
$instagram: #c13584;
$camera: #00CED1;
$color: rgba(white, .3);


.svg-inline--fa{
  font-size: 2.5em;
  padding: 0 .2em;
  text-decoration: none;
  color: $color;
}

.fa-youtube:hover{
  color: $youtube;
}

.fa-camera-retro:hover{
  color: $camera;
}

.fa-spotify:hover{
  color: $spotify;
}

.fa-ghost:hover{
  color: $ghost;
}

.fa-instagram:hover{
  color: $instagram;
}
</style>

