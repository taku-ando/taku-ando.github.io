<template>
  <section class="post-meta main-div">
    <div id="disqus_thread"></div>
  </section>
</template>
<script>
export default {
  name: 'PostDisqus',
  mounted() {
    var disqus_config = function () {
      this.page.url = window.location.origin;  
      this.page.identifier = window.location.pathname; 
    };
    (function() { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://ji-shu-burogu.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
}
</script>
<style lang="stylus" scoped>
@import '~@theme/styles/variables.styl'

.post-meta
  .post-date
    color lighten($grayTextColor, 50%)
    margin-bottom 1rem
    .create-date
      float left
    .update-date
      float right
  .post-links
    .post-link
      display block
      line-height 1.7
      color lighten($grayTextColor, 20%)
      font-weight normal
      transition all 0.2s
      &:hover
        color $accentColor
</style>