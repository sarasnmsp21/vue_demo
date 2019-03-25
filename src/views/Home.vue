<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <custom-footer></custom-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// pranali footer
import customFooter from "@/components/footer.vue";

export default {
  name: "home",
  components: {
    customFooter
  }
  
 
};
</script>
