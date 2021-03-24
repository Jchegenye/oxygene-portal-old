<template>
  <div>
    Welcome admin {{ $auth.user[0].name }}
    <a href="javascript:void(0);" @click.prevent="logout()">logout</a>

    <ul v-if="$auth.user[0].role_id === 2">
      <li><NuxtLink to="/dashboard">dashboard</NuxtLink></li>
      <li><NuxtLink to="/dashboard/admin">admin</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  middleware: ['auth', 'admin'],
}
</script>
