<template>
<div>
  <h1>What is Universal Mode?</h1>
  <p>When the user typs a url in the browser, the user receives a static page that is already rendered. Thus, making the application nice and speedy.</p>
  <p>In conclusion, this mode is used to speed up the SPAs</p>
  <h2>Smart Prefetching</h2>
  <p>This prefetching action is something that happens in the backend that speeds up the page during the univeral mode by the way of splitting the code.</p>
  <h2>SEO</h2>
  <p>we want to make sure all our pages are indexed by search engines!</p>
  <h2>When to use Nuxt.js?</h2>
  <p>If the application you are creating doesn't get updated often, it is better to serve a static site. Otherwise, it is overkill to use this package.</p>
  <p>univeral vs static site deployment, Univeral deployment HTML is generated on every request. 
    Static Site Depolyment, HTML generated once and deployed to server. </p>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'What is Univeral? ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Talking about what is univerasl mode.',
        },
      ],
    }
  },
}
</script>

