<template>
  <article class="post">
    <PostMeta/>

    <Content
      :key="$page.path"
      class="post-content markdown-body"/>
    <PostDisqus/>
    <PostMeta/>

  </article>
</template>

<script>
import PostDisqus from '@theme/components/PostDisqus'
import PostMeta from '@theme/components/PostMeta'
export default {
  name: 'Post',
  components: {
    PostMeta,
    PostDisqus
  }
}
</script>
