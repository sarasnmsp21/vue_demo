<template>
  <!-- created by ram -->
  <div>
    <div class="text-center mt-5 mb-5">
      <div class="product-title font-weight-bold sectionheader">
        <slot name="h3tag"></slot>
      </div>
      <div class="product-description">
        <slot name="ptag"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "divheaders"
};
</script>

<style lang="scss">
@import "../assets/scss/materialkitr/divheaders.scss";
</style>
