<template>
  <div>

    <nav-bar
      :thumbnail="location.current.thumbnail"/>

      <my-logo
        :thumbnail="location.current.thumbnail"
        :country="location.current.country"/>

        <div class="location-txt">

          <h3>is currently in</h3>
          <h2>
            <a
              target="_blank"
              :href="'//www.google.com/maps/@'+location.current.lat+','+location.current.lon+',13z'">
              {{ location.current.city }}
            </a>
          </h2>
        </div>

        <next-locations
          :locations="location.next"/>

          <book-list
            :books="books"/>
  </div>
</template>

<script>
import Nav from '~/components/Header/Nav'
import Logo from '~/components/Header/Logo'
import Next from '~/components/Location/Next'
import BookList from '~/components/Books/List'


export default {
  components: {
    'nav-bar': Nav,
    'my-logo': Logo,
    'next-locations': Next,
    'book-list': BookList,
  },
  async asyncData({ $axios }) {
    const currentLocation = await $axios.get('/location/current');
    const nextLocation = await $axios.get('/location/next')
      .catch(err => { return [] });
    const books = await $axios.get('/books', {
      params: { score: 5 }
    })
      .catch(err => { return [] });

    return {
      location: {
        current: currentLocation.data,
        next: nextLocation.data,
      },
      books: books.data,
    }
  }
}
</script>

<style lang="scss" scope>
.location-txt {
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
