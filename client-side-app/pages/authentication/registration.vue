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
        <a-form-item
          ><!-- email -->
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
        <a-form-item has-feedback>
          <a-input
            v-decorator="[
              'password',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                  {
                    validator: validateToNextPassword,
                  },
                ],
              },
            ]"
            placeholder="Password *"
            type="password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item has-feedback>
          <a-input
            v-decorator="[
              'confirm',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  {
                    validator: compareToFirstPassword,
                  },
                ],
              },
            ]"
            placeholder="Confirm password *"
            type="password"
            @blur="handleConfirmBlur"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item v-bind="formItemLayout"
          ><!-- nickname -->
          <span slot="label">
            Nickname&nbsp;
            <a-tooltip title="What would you like us to call you?">
              <a-icon type="question-circle-o" />
            </a-tooltip>
          </span>
          <a-input
            v-decorator="[
              'nickname',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                  },
                ],
              },
            ]"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayout" label="Phone Number">
          <a-input
            v-decorator="[
              'phone',
              {
                rules: [
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ],
              },
            ]"
            style="width: 100%"
          >
            <a-select
              slot="addonBefore"
              v-decorator="['prefix', { initialValue: '254' }]"
              style="width: 70px"
            >
              <a-select-option value="254"> +254 </a-select-option>
              <a-select-option value="256"> +256 </a-select-option>
            </a-select>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox :checked="checked" @change="toggleCheckedModal">
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
          <a-button
            type="primary"
            html-type="submit"
            class="login-form-button"
            :disabled="this.checked ? false : true"
          >
            Register
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
      checked: false,
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
