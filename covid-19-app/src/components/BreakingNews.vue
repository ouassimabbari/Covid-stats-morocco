<script>
export default {
  props: {
    lastNews: { required: true }
  }
};
</script>

<template>
  <section class="breaking-news">
    <marquee>
      <span v-for="lastNew in lastNews" :key="lastNew.title">
        <b>
          <a target="_blank" v-bind:href="lastNew.webUrl">{{
            lastNew.title
          }}</a>
        </b>
      </span>
    </marquee>
  </section>
</template>

<style type="text/css">
.breaking-news {
  padding-top: var(--default-top);
  padding-bottom: 3em;
}

marquee span {
  margin-right: 2em;
}

marquee span a {
  color: black;
  text-decoration: none;
}

marquee span a:hover {
  text-decoration: underline;
  text-underline-position: under;
}
</style>
