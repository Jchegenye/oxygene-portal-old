<template>
  <div>
    <a-col :span="20" :offset="2">
      <a-row>
        <div id="wizard-form" class="mb-6">
          <!-- STEPS -->
          <a-steps :current="current" size="small" status="error">
            <a-popover
              slot="progressDot"
              slot-scope="{ index, status, prefixCls }"
            >
              <template slot="content">
                <span>step {{ index }} status: {{ status }}</span>
              </template>
              <span :class="`${prefixCls}-icon-dot`" />
            </a-popover>
            <a-step
              v-for="item in steps"
              :key="item.title"
              :title="item.title"
              :description="item.description"
            />
          </a-steps>
          <!-- FORM -->
          <div class="steps-content">
            <a-form-model
              id="components-form-demo-normal-login"
              ref="ruleForm"
              :model="ruleForm"
              :rules="rules"
              class="login-form"
            >
              <Component
                :is="stepFormComponent"
                :current="current"
                :error="error"
                :ruleForm="ruleForm"
                :formItemLayout="formItemLayout"
                :validationErrors="validationErrors"
                :dragging="dragging"
              ></Component>
            </a-form-model>
          </div>
          <!-- BUTTONS -->
          <div class="mt-3">
            <a-button-group>
              <a-button
                v-if="current < steps.length - 1"
                type="primary"
                size="small"
                @click="next"
              >
                Next <a-icon type="right" />
              </a-button>
              <a-button
                v-if="current == steps.length - 1"
                html-type="submit"
                size="small"
                :type="loading ? 'danger' : 'primary'"
                :loading="loading"
                @click.prevent="login('ruleForm')"
              >
                {{ loading ? 'Submitting ...' : 'Submit' }}
              </a-button>
              <a-button
                v-if="current > 0"
                type="dashed"
                size="small"
                @click="prev"
              >
                <a-icon type="left" /> Previous
              </a-button>
            </a-button-group>
          </div>
        </div>
      </a-row>
    </a-col>
  </div>
</template>
<script>
export default {
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
        // _token: this.csrf,
        full_name_organization: '',
        physical_address: '',
        postal_address: '',
        telephone_number: '',
        kra_pin_no: '',
        company_registration_no: '',
        company_email_address: '',
        finance_dept_name: '',
        finance_dept_email: '',
        finance_dept_telno: '',
        legal_entity: '',
        legal_entity_other: '',
        web_site_address: '',
        litigation: 'no',
        list: [
          {
            id: 1,
            name: 'Director 1',
            director_per_shareholder: '',
            director_nationality: '',
            director_id_no: '',
            director_email: '',
            director_name: '',
          },
          {
            id: 2,
            name: 'Director 2',
            director_per_shareholder: '',
            director_nationality: '',
            director_id_no: '',
            director_email: '',
            director_name: '',
          },
        ],
        company_name_change: 'no',
        cert_of_changeofname: '',
        reason_of_namechange: '',
        //
        company_directors: 'no',
        cert_of_registration: '',
        reason_of_directorschange: '',
        //
        business_period: '',
        //
        has_oxygene_employee: 'no',
        name_position: '',
        //
        has_interest_employee: 'no',
        details_of_interest: '',
        //
        contact_person_name: '',
        contact_person_title: '',
      },
      dragging: true,
      rules: {
        password: [{ validator: validatePass, trigger: 'change' }],
        email: [
          {
            type: 'email',
            message: 'The input is not valid E-mail',
          },
          {
            required: true,
            message: 'Please input your E-mail',
          },
        ],
        full_name_organization: [
          {
            required: true,
            message: 'Please input Full Name of Organization',
          },
        ],
        physical_address: [
          {
            required: true,
            message:
              'Please input Physical Address/Principal Place of Business State plot No.',
          },
        ],
        postal_address: [
          {
            required: true,
            message: 'Please input Postal Address',
          },
        ],
        telephone_number: [
          {
            required: true,
            message: 'Please input your Telephone Number',
          },
        ],
        kra_pin_no: [
          {
            required: true,
            message: 'Please input KRA PIN No.',
          },
        ],
        company_registration_no: [
          {
            required: true,
            message: 'Please input Company registration number',
          },
        ],
        company_email_address: [
          {
            type: 'email',
            message: 'The input is not valid Company E-Mail Address',
          },
          {
            required: true,
            message: 'Please input your Company E-Mail Address',
          },
        ],
        finance_dept_name: [
          {
            required: true,
            message: 'Please input your Name',
          },
        ],
        finance_dept_email: [
          {
            type: 'email',
            message: 'The input is not valid Company E-Mail Address',
          },
          {
            required: true,
            message: 'Please input your E-Mail Address',
          },
        ],
        finance_dept_telno: [
          {
            required: true,
            message: 'Please input your Telephone Number',
          },
        ],
        legal_entity: [
          {
            required: true,
            message: 'Please select legal entity',
            trigger: 'change',
          },
        ],
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
      loading: false,
      checked: true,
      error: {},
      current: 0,
      steps: [
        {
          title: 'Business/ Corporate Information',
        },
        {
          title: 'References',
        },
        {
          title: 'Litigation History',
        },
        {
          title: 'Evaluation',
        },
        {
          title: 'Data Protection Statment',
        },
        {
          title: 'Declaration',
          description: '',
        },
      ],
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
    stepFormComponent() {
      return 'ProcurementStep' + this.current
    },
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
            .$post('supplier-form', this.ruleForm)
            .then((response) => {
              this.error = response

              setTimeout(() => {
                this.error = {
                  status: 'warning',
                  message: 'Sending email ...',
                }
              }, 1500)
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
    next() {
      this.current++
    },
    prev() {
      this.current--
    },
  },
}
</script>
