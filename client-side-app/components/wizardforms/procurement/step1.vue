<template>
  <div>
    <h4>Your Bank References</h4>
    <a-form-model-item
      :help="validationErrors ? validationErrors.bank_name : ''"
      :validate-status="error.status"
      prop="bank_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.bank_references.bank_name"
        placeholder="Bank name."
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.branch : ''"
      :validate-status="error.status"
      prop="branch"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.bank_references.branch"
        placeholder="Branch"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.ac_no : ''"
      :validate-status="error.status"
      prop="ac_no"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.bank_references.ac_no"
        placeholder="A/C NO."
        type="number"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.name_title : ''"
      :validate-status="error.status"
      prop="name_title"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.bank_references.name_title"
        placeholder="Name & Title"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.email_telno : ''"
      :validate-status="error.status"
      prop="email_telno"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.bank_references.email_telno"
        placeholder="Email/telephoneno:"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>

    <hr />

    <h4 class="mt-2">Trade References</h4>
    <a-button
      type="danger"
      icon="plus"
      size="small"
      class="mb-2"
      @click="addDraggbleItems"
      >Add
    </a-button>

    <a-form-model-item class="mb-0">
      <table id="mytable" class="table table-border mt-0">
        <draggable
          tag="tbody"
          :trade_references="formData.trade_references"
          handle=".handle"
        >
          <tr
            v-for="(element, idx) in formData.trade_references"
            :key="idx"
            class="p-0"
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
                      validationErrors ? validationErrors.company_name_addr : ''
                    "
                    :validate-status="error.status"
                    prop="company_name_addr"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.company_name_addr"
                      placeholder="Company Name & Address:"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                  <a-form-model-item
                    :help="
                      validationErrors ? validationErrors.contact_person : ''
                    "
                    :validate-status="error.status"
                    prop="contact_person"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.contact_person"
                      placeholder="Contact person (Full names)"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                </td>
                <td class="w-25">
                  <a-form-model-item
                    :help="validationErrors ? validationErrors.position : ''"
                    :validate-status="error.status"
                    prop="position"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.position"
                      placeholder="Position:"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                  <a-form-model-item
                    :help="
                      validationErrors ? validationErrors.office_telno : ''
                    "
                    :validate-status="error.status"
                    prop="office_telno"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.office_telno"
                      placeholder="Office Tel No:"
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
                      validationErrors ? validationErrors.mobile_telno : ''
                    "
                    :validate-status="error.status"
                    prop="mobile_telno"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.mobile_telno"
                      placeholder="Mobile Tel No:"
                      autocomplete="off"
                    >
                      <a-icon
                        slot="prefix"
                        style="color: rgba(0, 0, 0, 0.25)"
                      />
                    </a-input>
                  </a-form-model-item>
                  <a-form-model-item
                    :help="validationErrors ? validationErrors.email_addr : ''"
                    :validate-status="error.status"
                    prop="email_addr"
                    has-feedback
                    class="mb-0"
                  >
                    <a-input
                      v-model="element.email_addr"
                      placeholder="Email address:"
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

            <td>
              <span v-if="idx != 0" class="text-danger" @click="removeAt(idx)">
                <a-icon slot="prefix" type="close" />
                Cancel
              </span>
            </td>
          </tr>
        </draggable>
      </table>
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
    return { formData: this.ruleForm }
  },
  computed: {
    draggingInfo() {
      return this.dragging ? 'under drag' : ''
    },
  },
  methods: {
    removeAt(idx) {
      this.formData.trade_references.splice(idx, 1)
    },
    addDraggbleItems() {
      let id = this.formData.trade_references.length
      id++
      this.formData.trade_references.push({
        name: 'Reference ' + id,
        id,
        company_name_addr: '',
        contact_person: '',
        position: '',
        office_telno: '',
        mobile_telno: '',
        email_addr: '',
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
