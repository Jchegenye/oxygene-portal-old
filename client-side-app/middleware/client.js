export default async function ({ app, $auth, redirect }) {
  const role = await $auth.user.role_id
  if (app.$auth.loggedIn && role !== 3) {
    return redirect('/')
  }
}
// export default function ({ $auth, redirect }) {
//   if (!$auth.hasScope('ADMIN')) {
//     return redirect('/')
//   }
// }
