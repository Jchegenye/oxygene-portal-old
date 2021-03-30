<template>
  <div>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Signed and Sealed: "
      class="mb-0"
    >
      <a-input v-model="formData.finance_dept_name" autocomplete="off">
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="For and on Behalf of "
      class="mb-0"
    >
      <a-input v-model="formData.finance_dept_name" autocomplete="off">
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Position in "
      class="mb-0"
    >
      <a-input v-model="formData.finance_dept_name" autocomplete="off">
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Company"
      class="mb-0"
    >
      <a-input v-model="formData.finance_dept_name" autocomplete="off">
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Date"
      class="mb-0"
    >
      <a-input v-model="formData.finance_dept_name" autocomplete="off">
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
  </div>
</template>
<script>
export default {
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
  },
  data() {
    return { formData: this.ruleForm }
  },
}
</script>
