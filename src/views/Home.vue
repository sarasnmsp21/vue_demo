<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
   <appheader msg="Material Kit"></appheader>
   <div class="oversectiion ml-4  mr-4 ml-4 shadow p-3  bg-white rounded">
    <contentparagraph></contentparagraph>
    <product>
      <h3 slot="heading" class="text-center pt-5 pb-3"><b>We are nerd Rockstars </b></h3>
      <p slot="paragraph" class="text-center pt-0 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type  and more recently with
         </p>
    </product>
    <cardcontent></cardcontent>
     <product>
      <h3 slot="heading" class="text-center pt-5 pb-3"><b>We build awesome products</b></h3>
      <p slot="paragraph" class="text-center pt-0 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type  and more recently with
         </p>
    </product>
    <mediacontent></mediacontent>
   <product>
      <h3 slot="heading" class="text-center pt-5 pb-3"><b>Our office is our second home </b></h3>
      <p slot="paragraph" class="text-center pt-0 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type  and more recently with
         </p>
    </product>
    <productimg> </productimg>
    <productimgsec></productimgsec>
     <product>
      <h3 slot="heading" class="text-center pt-5 pb-3"><b>Want to work with us?</b></h3>
      <p slot="paragraph" class="text-center pt-4 pl-5 pr-5 pb-5">Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has 
                                been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type  and more recently with
         </p>
    </product>
     <appform></appform>
   </div>
    <customfooter brandnm="Material Kit"></customfooter>
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

import mediacontent from "@/components/mediacontent.vue";

import productimg from "@/components/productmages.vue";
import productimgsec from "@/components/imgsect.vue";

import appform from "@/components/form.vue";
import customfooter from "@/components/sarasfooter.vue";



export default {
  name: "home",
  components: {
      appheader,
      contentparagraph,
       product,
       cardcontent,
    mediacontent,
     productimg,
      productimgsec, 
        appform,
   customfooter
    }
  };
</script>

<style lang="scss">
.oversectiion
{
 margin: -100px 20px 30px ;
}
.home
{
  background-color: #ccc;
}
</style>
