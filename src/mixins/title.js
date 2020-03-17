export default {
  mounted() {
    let { title } = this.$options
    if (title) {
      title = typeof title === 'function' ? title.call(this) : title
      document.title = `miwa-snippets - ${title}`
    } else {
      document.title = 'miwa-snippets'
    }
  }
}
