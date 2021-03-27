<template>
  <div>
    <div class="flex-center position-ref full-height text-center">
      <div class="text-center">
        <Logo />
        <Tagline />

        <div class="links">
          <template v-if="$auth.loggedIn">
            <NuxtLink to="/dashboard">dashboard</NuxtLink>
            <a href="javascript:void(0);" @click.prevent="logout()">logout</a>
          </template>
          <template v-else>
            <NuxtLink to="/authentication/login">login</NuxtLink>
            <NuxtLink to="/authentication/registration">register now</NuxtLink>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lounge',
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
