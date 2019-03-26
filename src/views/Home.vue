<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
   <appheader msg="Material Kit"></appheader>
    <product></product>
    <productimg> </productimg>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// pranali footer
import appheader from "@/components/header.vue";
import product from "@/components/productdescription.vue";
import productimg from "@/components/productmages.vue";
import customFooter from "@/components/footer.vue";

export default {
  name: "home",
  components: {
      appheader,
       product,
     productimg,
    customFooter
    }
  };
</script>
