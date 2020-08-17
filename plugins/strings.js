import Vue from 'vue'

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('lowercase', function (value) {
  if (!value) return ''
  return value.toString().toLowerCase()
})

Vue.filter('uppercase', function (value) {
  if (!value) return ''
  return value.toString().toUpperCase()
})
