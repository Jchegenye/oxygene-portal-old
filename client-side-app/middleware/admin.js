// export default async function ({ app, $auth, redirect }) {
//   const role = await $auth.user.role_id
//   if (app.$auth.loggedIn && role !== 2) {
//     return redirect('/')
//   }
// }
export default function ({ $auth, redirect }) {
  if (!$auth.hasScope('Admin')) {
    return redirect('/')
  }
}
