<template>
  <div>
    <table class="table mb-4">
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" /> Company Personal Identification Number
              (PIN) (Copy)
            </a-button>
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Certificate of Tax Compliance (Copy)
            </a-button>
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />VAT Registration/certificate (Copy)
            </a-button>
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Current Business License/Certificate
              (Copy)
            </a-button>
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Names of all Directors and Partners (In a
              company letterhead paper and duly signed by one director)
            </a-button>
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Directors Identity Card (ID) (Certified
              copies)
            </a-button>
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Directors Personal Identification Number
              (PIN) (Copies)
            </a-button>
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Company CR12 document (Less than 6 months
              from date of issue)
            </a-button>
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Certificate of Company name change if any
            </a-button>
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Passport photos of all Directors of the
              company (Certified photos)
            </a-button>
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Memorandum and Articles of Association
              (Copy)
            </a-button>
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Certificate of incorporation/Partnership
              deed/ Business Certificate (Copy)
            </a-button>
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Latest Audited Financial Accounts - Last
              two years (Copies)
            </a-button>
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Detailed Business Profile</a-button
            >
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Latest Company Returns (2020)
              (Copy)</a-button
            >
          </a-upload>
        </td>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Reference letters from your business
              references</a-button
            >
          </a-upload>
        </td>
      </tr>
      <tr>
        <td>
          <a-upload
            :file-list="fileList"
            :remove="handleRemove"
            :before-upload="beforeUpload"
          >
            <a-button>
              <a-icon type="upload" />Bank reference and bank account
              information letter from your bankers</a-button
            >
          </a-upload>
        </td>
      </tr>
    </table>
    <h4 class="text-bold">
      PLEASE NOTE THE ABOVE DOCUMENTS MUST BE ARRANGED AND ATTACHED FOLLOWING
      THE SEQUENCE ABOVE
    </h4>
    <h4 class="text-bold">General Requirements</h4>
    <ul>
      <li>
        The documents should be returned back in a sealed envelope addressed to
        the Procurement officer no later than 14 days from the date of receipt
        of this document.
      </li>
      <li>
        Oxygene Limited will examine the documents to determine completeness,
        general orderliness andsufficiency in responsiveness.
      </li>
      <li>
        The applicants should have registered offices and Oxygene Limited
        reserves the discretion of visiting the physical premises from which the
        applicant conducts business.
      </li>
    </ul>
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
    return { formData: this.ruleForm, fileList: [], uploading: false }
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file)
      const newFileList = this.fileList.slice()
      newFileList.splice(index, 1)
      this.fileList = newFileList
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file]
      return false
    },
    handleUpload() {
      const { fileList } = this
      const formData = new FormData()
      fileList.forEach((file) => {
        formData.append('files[]', file)
      })
      this.uploading = true

      // You can use any AJAX library you like
      this.$axios.$post({
        url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
          this.fileList = []
          this.uploading = false
          this.$message.success('upload successfully.')
        },
        error: () => {
          this.uploading = false
          this.$message.error('upload failed.')
        },
      })
    },
  },
}
</script>
