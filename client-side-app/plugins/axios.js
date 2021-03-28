export default function ({ $axios, $store }) {
  $axios.interceptors.response.use(
    (success) => {
      // console.log(JSON.stringify(success) + 'responsesss')
      if (
        success.status === 200 ||
        success.status === 201 ||
        success.status === 204
      ) {
        return Promise.resolve(success)
      } else {
        return Promise.reject(success)
      }
    },
    (error) => {
      // console.log(JSON.stringify(error.response) + 'erros')
      if (error.response.status === 422) {
        const values = {
          message: error.response.data.message,
          status: 'warning',
          formErrors: error.response.data.errors,
        }
        return Promise.reject(values)
      } else if (error.response.status === 401) {
        const values = {
          message: error.response.statusText,
          status: 'info',
        }
        return Promise.reject(values)
      } else if (error.response.status === 500) {
        const values = {
          message: error.message,
          status: 'error',
        }
        return Promise.reject(values)
      } else {
        return Promise.reject(error)
      }
    }
  )
}
