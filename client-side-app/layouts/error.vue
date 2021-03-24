<template>
  <div id="container-wrapper" class="error">
    <div>
      <Logo />
      <Tagline />

      <p
        v-if="error.statusCode === 404"
        class="mb-0 font-weight-300 font-size-22"
      >
        Page not found
      </p>
      <p v-else class="mb-0 font-weight-900">An error occurred</p>
      <NuxtLink to="/">Go back home</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    error: Object,
    value: 'error',
  },
}
</script>
