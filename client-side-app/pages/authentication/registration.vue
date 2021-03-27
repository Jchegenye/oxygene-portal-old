<template>
  <div id="container-wrapper" class="o2forms">
    <div>
      <Logo />
      <Tagline />
      <a-form-model
        id="components-form-demo-normal-login"
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        class="login-form"
      >
        <!-- email -->
        <a-form-model-item prop="email" has-feedback>
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
        <a-form-model-item prop="last_name" v-bind="formItemLayout">
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
        callback(new Error('Please input the password'))
      } else {
        checkPending = setTimeout(() => {
          if (this.ruleForm.checkPass !== '') {
            if (this.$refs.ruleForm) {
              console.log(this.$refs.ruleForm)
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
        email: 'nelly@gmail.com',
        password: '111',
        checkPass: '111',
        first_name: 'Nelly',
        last_name: 'Muho',
        agreement: true,
        // _token: this.csrf,
      },
      // csrf: '',
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
      error: null,
    }
  },
  // mounted() {
  //   const Laravel = {
  //     csrfToken: '{{csrf_token()}}',
  //   }
  //   this.csrf = Laravel.csrfToken
  // },
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
              // login user
              this.$auth.loginWith('laravelSanctum', {
                data: {
                  email: this.ruleForm.email,
                  password: this.ruleForm.password,
                },
              })
              this.$router.push('/')
              // console.log(response)
              return response.data
            })
            .catch(function (error) {
              console.log(error)
            })

        // await this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     this.$axios
        //       .$post('register', {
        //         withCredentials: true,
        //         headers: {
        //           Accept: 'application/json',
        //           'Content-Type': 'x-www-form-urlencoded',
        //         },
        //         data: this.ruleForm,
        //       })
        //       .then((res) => {
        //         this.loading = true
        //         alert('submit!')
        //       })
        //   } else {
        //     this.loading = true
        //     console.log('error submit!!')
        //     return false
        //   }
        // })
      } catch (e) {
        this.error = e
      }
    },

    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       this.loading = true
    //       alert('submit!')
    //     } else {
    //       this.loading = true
    //       console.log('error submit!!')
    //       return false
    //     }
    //   })
    //   setTimeout(() => {
    //     this.loading = false
    //   }, 1000)
    // },
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
  },
}
</script>
