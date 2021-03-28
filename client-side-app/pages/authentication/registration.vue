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
              type="red-envelope"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>

        <!-- password & confirm -->
        <a-form-model-item>
          <a-form-model-item
            prop="password"
            :help="validationErrors ? validationErrors.password : ''"
            :validate-status="error.status"
            has-feedback
            :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
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
          <span
            :style="{
              display: 'inline-block',
              width: '24px',
              textAlign: 'center',
            }"
          ></span>
          <a-form-model-item
            prop="checkPass"
            has-feedback
            :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
            class="mb-0"
          >
            <a-input
              v-model="ruleForm.checkPass"
              placeholder="Confirm password *"
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
        </a-form-model-item>

        <!-- first name -->
        <a-form-model-item
          prop="first_name"
          :help="validationErrors ? validationErrors.first_name : ''"
          :validate-status="error.status"
          v-bind="formItemLayout"
          has-feedback
          class="mb-2"
        >
          <span slot="label">
            First Name&nbsp;
            <a-tooltip title="What would you like us to call you?">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input v-model="ruleForm.first_name" placeholder="First Name *" />
        </a-form-model-item>

        <!-- last name -->
        <a-form-model-item
          prop="last_name"
          :help="validationErrors ? validationErrors.last_name : ''"
          :validate-status="error.status"
          v-bind="formItemLayout"
        >
          <span slot="label">Last Name</span>
          <a-input v-model="ruleForm.last_name" placeholder="Last Name" />
        </a-form-model-item>

        <!-- action buttons -->
        <a-form-model-item class="mb-0">
          <a-checkbox
            v-model="ruleForm.agreement"
            checked
            @change="toggleCheckedModal"
          >
            I have read the
            <a
              href="javascript:void(0);"
              class="login-form-forgot"
              @click="agreementModal"
              >agreement</a
            >
          </a-checkbox>
          <NuxtLink
            to="/authentication/forgot-password"
            class="login-form-forgot"
            >Forgot password</NuxtLink
          >
          <a-form-model-item class="mb-0">
            <a-button
              html-type="submit"
              class="w-75"
              :disabled="checked ? false : true"
              :type="loading ? 'danger' : 'primary'"
              :loading="loading"
              @click.prevent="submitForm('ruleForm')"
            >
              {{ loading ? 'Registering ...' : 'Register' }}
            </a-button>
            <a-button class="w-22 ml-2" @click="resetForm('ruleForm')">
              Reset
            </a-button>
            Or <NuxtLink to="/authentication/login">login!</NuxtLink>
          </a-form-model-item>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  middleware: ['guest'],
  data() {
    let checkPending
    const validatePass = (rule, value, callback) => {
      clearTimeout(checkPending)
      if (value === '') {
        callback(new Error('Please input your password'))
      } else {
        checkPending = setTimeout(() => {
          if (this.ruleForm.checkPass !== '') {
            if (this.$refs.ruleForm) {
              this.$refs.ruleForm.validateField('checkPass')
            }
          } else if (value < 6) {
            callback(new Error('Password must be greater than 6'))
          } else {
            callback()
          }
        }, 500)
      }
      callback()
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('Two passwords that you enter is inconsistent!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        email: '',
        password: '',
        checkPass: '',
        first_name: '',
        last_name: '',
        agreement: true,
        _token: this.csrf,
      },
      csrf: '',
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
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
        first_name: [
          {
            required: true,
            whitespace: true,
            message: 'Please input your first name!',
          },
        ],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
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
  mounted() {
    const Laravel = {
      csrfToken: '{{csrf_token()}}',
    }
    this.csrf = Laravel.csrfToken
  },
  methods: {
    async submitForm(formName) {
      try {
        setTimeout(() => {
          this.loading = false
        }, 800)
        this.loading = true

        const result = await this.$refs[formName].validate()
        if (result)
          await this.$axios
            .$post('register', this.ruleForm)
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
                    }
                  })
              }, 2800)
            })
            .catch((err) => {
              this.errorFormAlerts(err)
            })
      } catch (error) {}
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // MODAL AGREEMENT
    agreementModal() {
      this.$info({
        title: 'Oxygene MCL User(s) Agreement',
        // JSX support
        content: (
          <div>
            <p>Coming soon!</p>
          </div>
        ),
      })
    },
    // CHECK AGREEMENT,
    toggleCheckedModal() {
      this.checked = !this.checked
    },
    // Error
    errorFormAlerts(response) {
      this.error = response
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
