export default async function ({ app, $auth, redirect }) {
  const role = await $auth.user[0].role_id
  if (app.$auth.loggedIn && role !== 3) {
    return redirect('/')
  }
}
