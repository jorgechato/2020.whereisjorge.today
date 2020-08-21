<template>
  <a
    target="_blank"
    :href="book.goodreads_url"
    class="tile" >

    <img
      class="tile__img"
      :src="book.cover"
      :alt="book.title"/>

    <div class="tile__details">
      <div class="tile__title">
        <div>{{ book.title | capitalize }}</div>
        <div class="author" v-for="author in book.author_list" :key="author.name">
          {{ author.name }}
        </div>
      </div>
    </div>

  </a>
</template>

<script>
export default{
  name: 'Book',
  props: {
    book: {
      type: Object,
      required: true,
    },
  }
}
</script>

<style lang="scss" scoped>

$transition: .45s;
$width: 98px;
$height: 149px;
$authorColor: rgba(white,.6);

.tile__details {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  opacity: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  transition: $transition opacity;
}

.tile__title {
  position: absolute;
  bottom: 0;
  padding: 0 5px 10px 5px;
  font-size: .8em;

  .author {
    color: $authorColor;
  }
}

.tile__img {
  width: 100%;
  height: 100%;
}

.tile {
  display: inline-block;
  position: relative;
  width: $width;
  height: $height;
  transition: transform $transition;
  text-decoration: none;
  color: white;
  margin: 13px 3px;
}

.books:hover {
  .tile {
    transform: translateX(-10%);
  }

  .tile:hover {
    transform: scale(1.2);
    transition-duration: $transition/1.1;

    .tile__details {
      opacity: 1;
    }
  }

  .tile:hover ~ .tile {
    transform: translateX(10%);
  }
}

</style>
