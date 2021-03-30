<template>
  <div>
    <div id="container-wrapper" class="wizard o2forms mt-4">
      <div>
        <Logo />
        <Tagline />
        <a-col :span="12" :offset="6">
          <a-row>
            <h4 class="text-bold">SUPPLIER FORM</h4>
            <p>
              <i
                >(All information provided in this document shall be used solely
                for evaluation of any company’s ability, credibility and
                willingness to become a supplier to Oxygene. Oxygene shall have
                the right to crosscheck any information with both the supplier
                or any other government organization, business references and
                financial institutions to test the integrity of the information
                provided. Any false information shall lead to automatic
                disqualification).</i
              >
            </p>
          </a-row>
        </a-col>
      </div>
    </div>

    <Procurement />
  </div>
</template>
<script>
export default {
  name: 'SupplierForm',
  middleware: ['guest'],
}
</script>
