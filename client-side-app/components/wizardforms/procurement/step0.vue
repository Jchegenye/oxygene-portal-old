<template>
  <div>
    <!-- Full Name of Organization -->
    <a-form-model-item
      prop="full_name_organization"
      :help="validationErrors ? validationErrors.full_name_organization : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      has-feedback
      class="mb-2"
    >
      <span slot="label">
        Full Name of Organization&nbsp;
        <a-tooltip title="What would you like us to call you?">
          <a-icon type="question-circle-o" />
        </a-tooltip>
      </span>
      <a-input v-model="formData.full_name_organization" />
    </a-form-model-item>

    <!-- physical Address -->
    <a-form-model-item
      prop="physical_address"
      :help="validationErrors ? validationErrors.physical_address : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      has-feedback
      label="Physical Address/Principal Place of Business State plot No."
      class="mb-2"
    >
      <a-textarea v-model="formData.physical_address" :rows="4" />
    </a-form-model-item>

    <!-- Postal Address -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.postal_address : ''"
      :validate-status="error.status"
      prop="postal_address"
      has-feedback
      label="Postal Address"
      class="mb-0"
    >
      <a-textarea v-model="formData.postal_address" :rows="4" />
    </a-form-model-item>

    <!-- Telephone Number -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.physical_address : ''"
      :validate-status="error.status"
      prop="telephone_number"
      has-feedback
      class="mb-0"
      label="Telephone Number *"
    >
      <a-input
        v-model="formData.telephone_number"
        type="number"
        min="0"
        autocomplete="off"
      >
        <a-icon
          slot="prefix"
          type="number"
          style="color: rgba(0, 0, 0, 0.25)"
        />
      </a-input>
    </a-form-model-item>

    <!-- KRA PIN No -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.physical_address : ''"
      :validate-status="error.status"
      prop="kra_pin_no"
      has-feedback
      class="mb-0"
      label="KRA PIN No. *"
    >
      <a-input v-model="formData.kra_pin_no" autocomplete="off">
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>

    <!-- Company registration number -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.company_registration_no : ''"
      :validate-status="error.status"
      prop="company_registration_no"
      has-feedback
      label="Company registration number"
      class="mb-0"
    >
      <a-input v-model="formData.company_registration_no" />
    </a-form-model-item>

    <!-- Company registration number -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.company_email_address : ''"
      :validate-status="error.status"
      prop="company_email_address"
      has-feedback
      class="mb-0"
      label="Company E-Mail Address *"
    >
      <a-input
        v-model="formData.company_email_address"
        type="email"
        autocomplete="off"
      >
        <a-icon
          slot="prefix"
          type="red-envelope"
          style="color: rgba(0, 0, 0, 0.25)"
        />
      </a-input>
    </a-form-model-item>

    <!-- Contact for finance department(email, Name and Tel no:) * -->
    <a-form-model-item>
      <div class="mt-4 d-block">
        Contact for finance department(email, Name and Tel no:) *
      </div>
      <hr class="w-50 mb-4" />
      <a-form-model-item
        :help="validationErrors ? validationErrors.finance_dept_name : ''"
        :validate-status="error.status"
        prop="finance_dept_name"
        has-feedback
        v-bind="formItemLayout"
        :style="{ width: 'calc(50% - 12px)' }"
        class="mb-0"
        label="Name"
      >
        <a-input
          v-model="formData.finance_dept_name"
          placeholder="Name"
          autocomplete="off"
        >
          <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item
        :help="validationErrors ? validationErrors.finance_dept_email : ''"
        :validate-status="error.status"
        prop="finance_dept_email"
        has-feedback
        v-bind="formItemLayout"
        :style="{ width: 'calc(50% - 12px)' }"
        class="mb-0"
        label="Email"
      >
        <a-input
          v-model="formData.finance_dept_email"
          placeholder="Email"
          type="email"
          autocomplete="off"
        >
          <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item
        :help="validationErrors ? validationErrors.finance_dept_telno : ''"
        :validate-status="error.status"
        prop="finance_dept_telno"
        has-feedback
        v-bind="formItemLayout"
        :style="{ width: 'calc(50% - 12px)' }"
        class="mb-0"
        label="Tel no:"
      >
        <a-input
          v-model="formData.finance_dept_telno"
          placeholder="Tel no"
          type="number"
          min="0"
          autocomplete="off"
        >
          <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-model-item>
    </a-form-model-item>

    <!-- Legal Entity: (a) Sole proprietor (b) Corporation (c) Partnership (d) Other  && Web Sites Address (if any) -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.legal_entity : ''"
      :validate-status="error.status"
      label="Legal Entity:"
      prop="legal_entity"
      class="mb-0"
    >
      <a-radio-group v-model="formData.legal_entity">
        <a-radio value="soleproprietor" :checked="true">
          Sole proprietor
        </a-radio>
        <a-radio value="corporation"> Corporation </a-radio>
        <a-radio value="partnership"> Partnership </a-radio>
        <a-radio value="other"> Other </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.legal_entity_other : ''"
      :validate-status="error.status"
      prop="legal_entity_other"
      has-feedback
      class="mb-0"
      label="Other Description"
      :hidden="formData.legal_entity === 'other' ? false : true"
    >
      <a-input
        v-model="formData.legal_entity_other"
        type="textarea"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <hr />

    <!-- Web Sites Address (if any) -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.web_site_address : ''"
      :validate-status="error.status"
      prop="web_site_address"
      has-feedback
      class="mb-0"
      label="Web Sites Address (if any)"
    >
      <a-input v-model="formData.web_site_address" addon-before="Http://" />
    </a-form-model-item>

    <hr />
    <h4 class="mt-2">Directors contacts</h4>
    <a-button
      type="danger"
      icon="plus"
      size="small"
      class="mb-2"
      @click="addDraggbleItems"
      >Add
    </a-button>

    <a-form-model-item class="mb-0">
      <table id="mytable" class="table table-borderless items mt-0">
        <draggable
          tag="tbody"
          :list="formData.list"
          class="list-group"
          handle=".handle"
        >
          <tr
            v-for="(element, idx) in formData.list"
            :key="idx"
            class="list-group-item p-0"
          >
            <!-- <td scope="row" class="drag-columns">
              <a-icon type="pic-left" />
            </td> -->

            <td>
              <span class="text">{{ element.name }} </span>
            </td>

            <td class="p-0">
              <tr>
                <td>
                  <a-form-model-item
                    :help="
                      validationErrors ? validationErrors.director_name : ''
                    "
                    :validate-status="error.status"
                    prop="director_name"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.director_name"
                      placeholder="Name"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                </td>
                <td>
                  <a-form-model-item
                    :help="
                      validationErrors ? validationErrors.director_email : ''
                    "
                    :validate-status="error.status"
                    prop="director_email"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.director_email"
                      placeholder="Email"
                      type="director_email"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                </td>
                <td>
                  <a-form-model-item
                    :help="
                      validationErrors ? validationErrors.director_id_no : ''
                    "
                    :validate-status="error.status"
                    prop="director_id_no"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.director_id_no"
                      placeholder="Identification No."
                      type="number"
                      min="0"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                </td>
                <td>
                  <a-form-model-item
                    :help="
                      validationErrors
                        ? validationErrors.director_nationality
                        : ''
                    "
                    :validate-status="error.status"
                    prop="director_nationality"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.director_nationality"
                      placeholder="Nationality"
                      min="0"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                </td>
                <td>
                  <a-form-model-item
                    :help="
                      validationErrors
                        ? validationErrors.director_per_shareholder
                        : ''
                    "
                    :validate-status="error.status"
                    prop="director_per_shareholder"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.director_per_shareholder"
                      placeholder="Percentage shareholding (%)"
                      min="0"
                      type="number"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                </td>
              </tr>
            </td>

            <td class="w-15">
              <span v-if="idx != 0" class="text-danger" @click="removeAt(idx)">
                <a-icon slot="prefix" type="close" />
                Cancel
              </span>
            </td>
          </tr>
        </draggable>
      </table>
    </a-form-model-item>

    <!-- 1.12 -->
    <hr />
    <!-- company_name_change -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.company_name_change : ''"
      :validate-status="error.status"
      label="Have you changed your company name over the last 10 years?"
      prop="company_name_change"
      class="mb-0"
    >
      <a-radio-group v-model="formData.company_name_change">
        <a-radio value="yes"> Yes </a-radio>
        <a-radio value="no"> No </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <!-- cert_of_changeofname -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.cert_of_changeofname : ''"
      :validate-status="error.status"
      prop="cert_of_changeofname"
      has-feedback
      class="mb-0"
      label="Attach certificate of change of name"
      :hidden="formData.company_name_change === 'yes' ? false : true"
    >
      <a-upload-dragger
        name="file"
        :multiple="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">Support for a single upload.</p>
      </a-upload-dragger>
    </a-form-model-item>
    <!-- reason_of_namechange -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.reason_of_namechange : ''"
      :validate-status="error.status"
      prop="reason_of_namechange"
      has-feedback
      class="mb-0"
      label="Provide clear details outlining reasons and purpose of name change"
      :hidden="formData.company_name_change === 'yes' ? false : true"
    >
      <a-textarea v-model="formData.reason_of_namechange" :rows="4" />
    </a-form-model-item>

    <!-- 1.13 -->
    <hr />
    <!-- company_directors -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.company_directors : ''"
      :validate-status="error.status"
      label="Have you changed your company Directors or ownership in the last 10 years?"
      prop="company_directors"
      class="mb-0"
    >
      <a-radio-group v-model="formData.company_directors">
        <a-radio value="yes"> Yes </a-radio>
        <a-radio value="no"> No </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <!-- cert_of_registration -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.cert_of_registration : ''"
      :validate-status="error.status"
      prop="cert_of_registration"
      has-feedback
      class="mb-0"
      label="Attach certificate of registration and/or latest annual returns"
      :hidden="formData.company_directors === 'yes' ? false : true"
    >
      <a-upload-dragger
        name="file"
        :multiple="false"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">Click or drag file to this area to upload</p>
        <p class="ant-upload-hint">Support for a single upload.</p>
      </a-upload-dragger>
    </a-form-model-item>
    <!-- reason_of_directorschange -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.reason_of_directorschange : ''"
      :validate-status="error.status"
      prop="reason_of_directorschange"
      has-feedback
      class="mb-0"
      label="Provide clear details outlining reasons and purpose of change of Directors"
      :hidden="formData.company_directors === 'yes' ? false : true"
    >
      <a-textarea v-model="formData.reason_of_directorschange" :rows="4" />
    </a-form-model-item>

    <!-- 1.14 -->
    <hr />
    <!-- business_period -->
    <a-form-model-item>
      Period in which you have been in business for which you wish to supply us
      with goods/services
      <a-form-model-item
        :help="validationErrors ? validationErrors.business_period : ''"
        :validate-status="error.status"
        prop="business_period"
        has-feedback
        class="mb-0"
        label=""
      >
        <a-input v-model="formData.kra_pin_no" autocomplete="off">
          <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
        </a-input>
      </a-form-model-item>
    </a-form-model-item>

    <!-- 1.15 -->
    <hr />
    <!-- has_oxygene_employee -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.has_oxygene_employee : ''"
      :validate-status="error.status"
      label="Are any of the Directors, Partners, Shareholders or employees, employed by or have relatives who are currently employed by Oxygene Limited?"
      prop="has_oxygene_employee"
      class="mb-0"
    >
      <a-radio-group v-model="formData.has_oxygene_employee">
        <a-radio value="yes"> Yes </a-radio>
        <a-radio value="no"> No </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <!--  name_position -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.name_position : ''"
      :validate-status="error.status"
      prop="name_position"
      has-feedback
      class="mb-0"
      label="Declare name and position"
      :hidden="formData.has_oxygene_employee === 'yes' ? false : true"
    >
      <a-textarea v-model="formData.name_position" :rows="4" />
    </a-form-model-item>

    <!-- 1.16 -->
    <hr />
    <!-- has_interest_employee -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.has_interest_employee : ''"
      :validate-status="error.status"
      label="Do any of the Directors, Partners, Shareholders or employees have any other interest (other than what you are seeking to supply) with persons currently employed by Oxygene Limited or other suppliers, partners or Directors of Oxygene Limited?"
      prop="has_interest_employee"
      class="mb-0"
    >
      <a-radio-group v-model="formData.has_interest_employee">
        <a-radio value="yes"> Yes </a-radio>
        <a-radio value="no"> No </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <!-- details_of_interest  -->
    <a-form-model-item
      :help="validationErrors ? validationErrors.details_of_interest : ''"
      :validate-status="error.status"
      prop="details_of_interest"
      has-feedback
      class="mb-0"
      label="Provide full details of interest "
      :hidden="formData.has_interest_employee === 'yes' ? false : true"
    >
      <a-textarea v-model="formData.details_of_interest" :rows="4" />
    </a-form-model-item>

    <!-- 1.17 -->
    <hr />
    <a-form-model-item>
      <p class="mb-0">
        Contact persons within your Organization to whom enquiries about this
        application should be directed. (Provide two contact names)
      </p>
      <!-- contact_person_name -->
      <a-form-model-item
        :help="validationErrors ? validationErrors.contact_person_name : ''"
        :validate-status="error.status"
        prop="contact_person_name"
        has-feedback
        class="mb-0"
        label="Names (full names please):"
      >
        <a-textarea v-model="formData.contact_person_name" :rows="4" />
      </a-form-model-item>
      <!-- contact_person_title -->
      <a-form-model-item
        :help="validationErrors ? validationErrors.contact_person_title : ''"
        :validate-status="error.status"
        prop="contact_person_title"
        has-feedback
        class="mb-0"
        label="Title:"
      >
        <a-textarea v-model="formData.contact_person_title" :rows="4" />
      </a-form-model-item>
    </a-form-model-item>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable,
  },
  props: {
    current: {
      type: [Number],
      required: true,
    },
    error: {
      type: [Object],
      required: true,
    },
    formItemLayout: {
      type: [Object],
      required: true,
    },
    validationErrors: {
      type: [Object],
      required: true,
    },
    ruleForm: {
      type: [Object],
      required: true,
    },
    dragging: {
      type: [Boolean],
      required: true,
    },
  },
  data() {
    return {
      formData: this.ruleForm,
    }
  },
  computed: {
    draggingInfo() {
      return this.dragging ? 'under drag' : ''
    },
  },
  methods: {
    removeAt(idx) {
      this.formData.list.splice(idx, 1)
    },
    addDraggbleItems() {
      let id = this.formData.list.length
      id++
      this.formData.list.push({
        name: 'Director ' + id,
        id,
        director_per_shareholder: '',
        director_nationality: '',
        director_id_no: '',
        director_email: '',
        director_name: '',
      })
    },
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
  },
}
</script>
