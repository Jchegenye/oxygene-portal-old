<template>
  <div id="container-wrapper" class="o2forms">
    <div>
      <Logo />
      <Tagline />
      <FormAlerts :errors="error" />

      <a-form-model
        id="components-form-demo-normal-login"
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        class="login-form"
      >
        <!-- email -->
        <a-form-model-item
          prop="email"
          :help="validationErrors ? validationErrors.email : ''"
          :validate-status="error.status"
          has-feedback
        >
          <a-input v-model="ruleForm.email" type="email" placeholder="E-mail *">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>

        <a-form-model-item
          prop="password"
          :help="validationErrors ? validationErrors.password : ''"
          :validate-status="error.status"
          has-feedback
          class="mb-0"
        >
          <a-input
            v-model="ruleForm.password"
            placeholder="Password *"
            type="password"
            autocomplete="off"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>

        <a-form-model-item class="mb-2">
          <a-checkbox
            v-model="ruleForm.remember_me"
            checked
            @change="toggleCheckedModal"
          >
            Remember me
          </a-checkbox>
          <NuxtLink
            to="/authentication/forgot-password"
            class="login-form-forgot"
            >Forgot password</NuxtLink
          >
          <a-button
            html-type="submit"
            class="login-form-button"
            :type="loading ? 'danger' : 'primary'"
            :loading="loading"
            @click.prevent="login('ruleForm')"
          >
            {{ loading ? 'Logging in ...' : 'Log in' }}
          </a-button>
          Or
          <NuxtLink to="/authentication/registration">register now!</NuxtLink>
        </a-form-model-item>
      </a-form-model>
      <a-button @click.prevent="login('ruleForm')">Log in</a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  middleware: ['guest'],
  data() {
    let checkPending
    const validatePass = (rule, value, callback) => {
      clearTimeout(checkPending)
      if (value === '') {
        callback(new Error('Please input your password'))
      } else {
        checkPending = setTimeout(() => {
          if (value < 6) {
            callback(new Error('Password must be greater than 6'))
          } else {
            callback()
          }
        }, 500)
      }
      callback()
    }
    return {
      ruleForm: {
        _token: this.csrf,
        email: 'jtechinfo3@gmail.com', // jtechinfo3@gmail.com
        password: '111',
        remember_me: true,
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        email: [
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ],
      },
      csrf: '',
      loading: false,
      checked: true,
      error: {},
    }
  },
  computed: {
    validationErrors() {
      if (Object.keys(this.error).length !== 0) {
        return this.error.formErrors
      } else {
        return {}
      }
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  mounted() {
    const Laravel = {
      csrfToken: '{{csrf_token()}}',
    }
    this.csrf = Laravel.csrfToken
  },
  methods: {
    async login(formName) {
      try {
        setTimeout(() => {
          this.loading = false
        }, 800)
        this.loading = true

        const result = await this.$refs[formName].validate()
        if (result)
          await this.$axios
            .$post('login', this.ruleForm)
            .then((response) => {
              this.error = response

              setTimeout(() => {
                this.error = {
                  status: 'warning',
                  message: 'Logging you in ...',
                }
              }, 1500)

              // login user
              setTimeout(() => {
                this.$auth
                  .loginWith('laravelSanctum', {
                    data: {
                      email: this.ruleForm.email,
                      password: this.ruleForm.password,
                    },
                  })
                  .then(() => {
                    if (this.$store.$auth.user.length !== 0) {
                      if (this.$store.$auth.user[0].role_id === 2) {
                        this.$router.push('/dashboard/admin')
                      } else if (this.$store.$auth.user[0].role_id === 3) {
                        this.$router.push('/dashboard/employee')
                      } else if (this.$store.$auth.user[0].role_id === 4) {
                        this.$router.push('/dashboard/client')
                      } else {
                        this.logout()
                      }
                      // success message
                      if (this.$auth.loggedIn) {
                        this.$notification.success({
                          message: 'Notification',
                          description:
                            'Successfully logged in as ' +
                            this.$store.$auth.user[0].nickname,
                          placement: 'bottom',
                        })
                      }
                    }
                  })
              }, 2800)
            })
            .catch((err) => {
              this.errorFormAlerts(err)
            })
      } catch (error) {}
    },
    // Error
    errorFormAlerts(response) {
      this.error = response
    },
    // CHECK AGREEMENT,
    toggleCheckedModal() {
      this.checked = !this.checked
    },
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
