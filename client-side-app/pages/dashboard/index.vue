<template>
  <div>
    Welcome {{ loggedInUser.nickname }}
    <a href="javascript:void(0);" @click.prevent="logout()">logout</a>

    <!-- Menu -->
    <h1>Lounge Area</h1>
    <p>This is your waiting area, if you have issues kindly contact us</p>
    <a-button>Refresh</a-button>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  middleware: ['auth'],
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
