<template>
  <div>
    Welcome {{ loggedInUser.nickname }}
    <a href="javascript:void(0);" @click.prevent="logout()">logout</a>

    <ul v-if="loggedInUser.role_id === 3">
      <li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
      <li><NuxtLink to="/dashboard/employee">employee</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EmployeeDashboard',
  middleware: ['auth', 'employee'],
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
        this.$notification.info({
          message: 'Notification',
          description: 'Successfully logged out!',
          placement: 'bottom',
        })
        await this.$auth.logout()
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
