<template>
  <section>

    <h4>Recommended reading</h4>

    <div class="slide">
      <div class="books">
        <book
          v-for="book in books"
          :key="book.book.title"
          :book="book.book"
          />
      </div>
    </div>

  </section>
</template>

<script>
import Book from '~/components/Books/Book'


export default {
  name: 'BookList',
  components: {
    "book": Book,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

.slide{
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
