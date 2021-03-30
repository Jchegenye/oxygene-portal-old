<template>
  <div>
    <a-form-model-item
      :help="validationErrors ? validationErrors.signed_sealed : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="signed_sealed"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Signed and Sealed: "
      class="mb-0"
    >
      <a-input v-model="formData.declaration.signed_sealed" autocomplete="off">
        <a-icon type="" slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.for_onbehalf_of : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="for_onbehalf_of"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="For and on Behalf of "
      class="mb-0"
    >
      <a-input
        v-model="formData.declaration.for_onbehalf_of"
        autocomplete="off"
      >
        <a-icon type="" slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.position_in : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="position_in"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Position in "
      class="mb-0"
    >
      <a-input v-model="formData.declaration.position_in" autocomplete="off">
        <a-icon type="" slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.company : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="company"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Company"
      class="mb-0"
    >
      <a-input v-model="formData.declaration.company" autocomplete="off">
        <a-icon type="" slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
      </a-input>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.date : ''"
      :validate-status="error.status"
      v-bind="formItemLayout"
      prop="date"
      has-feedback
      :style="{ width: 'calc(50% - 12px)' }"
      label="Date"
      class="mb-0"
    >
      <a-input v-model="formData.declaration.date" autocomplete="off">
        <a-icon type="" slot="prefix" style="color: rgba(0, 0, 0, 0.25)" />
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
