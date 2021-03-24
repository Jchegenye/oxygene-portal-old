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
        <a-form-item>
          <a-input
            v-decorator="[
              'userName',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox
            v-decorator="[
              'remember',
              {
                valuePropName: 'checked',
                initialValue: true,
              },
            ]"
          >
            Remember me
          </a-checkbox>
          <NuxtLink
            to="/authentication/forgot-password"
            class="login-form-forgot"
            >Forgot password</NuxtLink
          >
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          Or
          <NuxtLink to="/authentication/registration">register now!</NuxtLink>
        </a-form-item>
      </a-form>

      <a-button type="primary" @click="login()">Login</a-button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['guest'],
  data() {
    return {
      details: {
        email: 'johnson.gitonga@oxygene.co.ke',
        password: '111',
        // email: 'alfred.maina@oxygene.co.ke',
        // password: '111',
      },
    }
  },
  // computed: {
  //   urlTest() {
  //     return process.env.baseUrl
  //   },
  // },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          //  console.log('Received values of form: ', values)
        }
      })
    },
    login() {
      this.$auth
        .loginWith('laravelSanctum', {
          data: this.details,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    },
  },
}
</script>
