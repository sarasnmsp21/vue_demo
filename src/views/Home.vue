<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
   <appheader msg="Material Kit"></appheader>
   <div class="oversectiion ml-4 mb-0 mr-4 ml-4 shadow p-3 mb-0 bg-white rounded">
    <contentparagraph></contentparagraph>
    <product></product>
    <cardcontent></cardcontent>
     <productdesc></productdesc>
    <mediacontent></mediacontent>
   <productdescprict></productdescprict>
    <productimg> </productimg>
     <productdesp></productdesp>
     <appform></appform>
   </div>
    <customfooter></customfooter>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// pranali footer
import appheader from "@/components/header.vue";
import contentparagraph from "@/components/contentparagraph.vue";
import product from "@/components/contentdescription.vue";
import cardcontent from "@/components/cardcontent.vue";
import productdesc from "@/components/contentdescription.vue";
import mediacontent from "@/components/mediacontent.vue";
import productdescprict from "@/components/contentdescription.vue";
import productimg from "@/components/productmages.vue";
import productdesp from "@/components/productdescription.vue";
import appform from "@/components/form.vue";
import customfooter from "@/components/footer.vue";



export default {
  name: "home",
  components: {
      appheader,
      contentparagraph,
       product,
       cardcontent,
       productdesc,
       mediacontent,
       productdescprict,
     productimg,
        productdesp,
        appform,
   customfooter
    }
  };
</script>

<style lang="scss">
.oversectiion
{
 margin: -100px 20px 0 ;
}
.home
{
  background-color: #ccc;
}
</style>
