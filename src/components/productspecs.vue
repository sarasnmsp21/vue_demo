<template>
  <!-- created by ram -->
  <div>
    <b-row>
      <b-col md="4" class="p-0" v-for="spec in specs" v-bind:key="spec.index">
        <div class="text-center">
          <figure class="mb-4">
            <font-awesome-icon :icon="['fas', 'shield-alt']" :class="spec.dynclass"/>
          </figure>
          <div class="pt-2">
            <h5 class="font-weight-bold specs-heading">{{spec.heading}}</h5>
          </div>
          <div class="text-muted px-2 detail-description">
            <p>{{spec.para}}</p>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "productspecs",
  data() {
    return {
      specs: [
        {
          dynclass: "product-icon1",
          heading: "Free Chat",
          para:
            "Divide details about your product or agency work into parts.Write a few lines about each one. A paragraph describing a feature will be enough."
        },
        {
          dynclass: "product-icon2",
          heading: "Verified Users",
          para:
            "Divide details about your product or agency work into parts.Write a few lines about each one. A paragraph describing a feature will be enough."
        },
        {
          dynclass: "product-icon3",
          heading: "Fingerprint",
          para:
            "Divide details about your product or agency work into parts.Write a few lines about each one. A paragraph describing a feature will be enough."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/materialkitr/productspecs.scss";
</style>
