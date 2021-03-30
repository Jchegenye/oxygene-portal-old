<template>
  <div>
    <h4>Your Bank References</h4>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Bank name."
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Branch"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="A/C NO."
        type="number"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Name & Title"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Email/telephoneno:"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>

    <h4 class="mt-2">Trade References</h4>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Company Name & Address:"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Contact person (Full names)"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Position:"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Office Tel No:"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Mobile Tel No:"
        autocomplete="off"
      >
        <a-icon slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.finance_dept_name : ''"
      :validate-status="error.status"
      prop="finance_dept_name"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      class="mb-0"
    >
      <a-input
        v-model="formData.finance_dept_name"
        placeholder="Email address:"
        autocomplete="off"
      >
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
