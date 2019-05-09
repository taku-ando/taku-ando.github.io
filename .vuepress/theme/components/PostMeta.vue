<template>
  <section
    v-if="$page.frontmatter.type !== 'page'"
    class="post-meta main-div">
    <section class="post-date clearfix">
      <span class="create-date">update at：{{ $page.createdAt }}</span>

      <span
        v-if="$page.updatedAt"
        class="update-date">
        更新日：{{ $page.updatedAt }}
      </span>
    </section>

    <section class="post-links">
      <router-link
        v-if="prevPost"
        :to="prevPost.path"
        class="post-link">
        前の投稿：{{ prevPost.title }}
      </router-link>

      <router-link
        v-if="nextPost"
        :to="nextPost.path"
        class="post-link">
        次の投稿：{{ nextPost.title }}
      </router-link>
    </section>
  </section>
</template>

<script>
import IconInfo from '@theme/components/widgets/IconInfo'

export default {
  name: 'PostMeta',
  components: {
    IconInfo
  },
  computed: {
    thisIndex () {
      return this.$posts.indexOf(this.$page)
    },
    prevPost () {
      const nextIndex = this.thisIndex + 1
      return nextIndex > this.$posts.length - 1 ? null : this.$posts[nextIndex]
    },
    nextPost () {
      const prevIndex = this.thisIndex - 1
      return prevIndex < 0 ? null : this.$posts[prevIndex]
    }
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
