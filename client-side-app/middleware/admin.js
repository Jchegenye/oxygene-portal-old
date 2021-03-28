export default async function ({ app, $auth, redirect }) {
  const role = await $auth.user[0].role_id
  if (app.$auth.loggedIn && role !== 2) {
    return redirect('/')
  }
}
// export default function ({ $auth, redirect }) {
//   console.log($auth.user[0].hasScope(2))
//   if (!$auth.hasScope(2)) {
//     return redirect('/')
//   }
// }
