<template>
  <div>
    Welcome {{ loggedInUser.nickname }}
    <a href="javascript:void(0);" @click.prevent="logout()">logout</a>

    <!-- Menu -->
    <ul v-if="loggedInUser.role_id === 2">
      <li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
      <li><NuxtLink to="/dashboard/admin">admin</NuxtLink></li>
    </ul>

    <ul v-if="loggedInUser.role_id === 3">
      <li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
      <li><NuxtLink to="/dashboard/client">client</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: ['auth'], // 'client'
  computed: {
    loggedInUser() {
      if (
        Object.keys(this.$auth.$state.user).length !== 0 &&
        this.$auth.$state.user.length !== 0
      ) {
        return this.$auth.$state.user[0]
      } else {
        return []
      }
    },
  },
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
