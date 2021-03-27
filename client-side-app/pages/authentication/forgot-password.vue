<template>
  <div id="container-wrapper" class="o2forms">
    <div>
      <Logo />
      <Tagline />
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item has-feedback>
          <a-input
            v-decorator="[
              'email',
              {
                rules: [
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
            ]"
            placeholder="E-mail *"
          >
            <a-icon
              slot="prefix"
              type="red-envelope"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item class="mb-0">
          <NuxtLink to="/authentication/registration" class="login-form-forgot"
            >Register</NuxtLink
          >
          <a-button type="primary" html-type="submit" class="login-form-button">
            Forgot Password
          </a-button>
          Or
          <NuxtLink to="/authentication/login">login!</NuxtLink>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  middleware: ['guest'],
  data() {
    return {
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
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
        }
      })
    },
    handleConfirmBlur(e) {
      const value = e.target.value
      this.confirmDirty = this.confirmDirty || !!value
    },
    compareToFirstPassword(rule, value, next) {
      const form = this.form
      if (value && value !== form.getFieldValue('password')) {
        return next('Two passwords that you enter is inconsistent!')
      } else {
        return next()
      }
    },
    validateToNextPassword(rule, value, next) {
      const form = this.form
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true })
      }
      return next()
    },
    //

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
  },
}
</script>
