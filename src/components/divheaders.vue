<template>
  <!-- created by ram -->
  <div>
    <b-col md="10" class="mx-auto">
      <b-col md="6" class="mx-auto">
        <div class="text-center mt-5 mb-5">
          <div class="product-title font-weight-bold sectionheader">
            <slot name="h3tag"></slot>
          </div>
          <div class="product-description">
            <slot name="ptag"></slot>
          </div>
        </div>
      </b-col>
    </b-col>
  </div>
</template>

<script>
export default {
  name: "divheaders",
};
</script>

<style lang="scss">
.sectionheader {
    color: #3C4857;
    h3{
      font-weight: 900;
    }
}
</style>
