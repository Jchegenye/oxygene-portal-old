<template>
  <div>
    <p>
      Have you, any of the Directors or the company itself, had any litigation
      concerning any contract/LPO you have executed in the last 5 years? If yes,
      Provide details in a separate sheet showing client, cause and matter in
      dispute and current status of suit
    </p>
    <a-form-model-item
      :help="validationErrors ? validationErrors.litigation : ''"
      :validate-status="error.status"
      label=""
      prop="litigation"
      class="mb-0"
    >
      <a-radio-group v-model="formData.litigation">
        <a-radio value="yes">Yes</a-radio>
        <a-radio value="no"> No </a-radio>
      </a-radio-group>
    </a-form-model-item>
    <a-form-model-item
      :help="validationErrors ? validationErrors.legal_entity_other : ''"
      :validate-status="error.status"
      prop="legal_entity_other"
      has-feedback
      class="mb-0"
      label="Other Description"
      :hidden="formData.litigation === 'yes' ? false : true"
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
  methods: {
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
