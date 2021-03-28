<template>
  <div v-if="Object.keys(errors).length !== 0">
    <a-alert
      :type="errors.status"
      :message="errors.message"
      banner
      class="mb-2"
    />
  </div>
</template>
<script>
export default {
  name: 'FormAlerts',
  props: ['errors'],
}
</script>
