<template>
  <div>
    Welcome client {{ $auth.user[0].name }}
    <a href="javascript:void(0);" @click.prevent="logout()">logout</a>

    <ul v-if="$auth.user[0].role_id === 3">
      <li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
      <li><NuxtLink to="/dashboard/client">client</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'client'],
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
